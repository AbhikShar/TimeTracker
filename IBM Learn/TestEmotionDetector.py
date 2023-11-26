import cv2
import numpy as np
from keras.models import model_from_json
import time

emotion_dict = {0: "Angry", 1: "Disgusted", 2: "Fearful", 3: "Happy", 4: "Neutral", 5: "Sad", 6: "Surprised"}
emotions_to_practice = ["Happy", "Surprised", "Angry", "Neutral", "Fearful"]

# Load the pre-trained emotion detection model
json_file = open('model/emotion_model.json', 'r')
loaded_model_json = json_file.read()
json_file.close()
emotion_model = model_from_json(loaded_model_json)
emotion_model.load_weights("model/emotion_model.h5")
print("Loaded model from disk")

# Open the webcam
cap = cv2.VideoCapture(0)  # 0 indicates the default webcam, change to another number if you have multiple cameras

message_change_interval = 10  # Change message every 10 seconds
last_message_change_time = time.time()

current_emotion_index = 0
message = f"Practice {emotions_to_practice[current_emotion_index]} Emotion"

while True:
    ret, frame = cap.read()
    frame = cv2.resize(frame, (640, 480))  # Adjust the frame size as needed
    if not ret:
        break

    # Check if it's time to change the message
    if time.time() - last_message_change_time >= message_change_interval:
        current_emotion_index = (current_emotion_index + 1) % len(emotions_to_practice)
        message = f"Practice {emotions_to_practice[current_emotion_index]} Emotion"
        last_message_change_time = time.time()

    # Add the message at the top of the screen
    cv2.putText(frame, message, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2, cv2.LINE_AA)

    # Detect faces available on the webcam feed
    face_detector = cv2.CascadeClassifier('haarcascades/haarcascade_frontalface_default.xml')
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    num_faces = face_detector.detectMultiScale(gray_frame, scaleFactor=1.3, minNeighbors=5)

    for (x, y, w, h) in num_faces:
        cv2.rectangle(frame, (x, y-50), (x+w, y+h+10), (0, 255, 0), 4)
        roi_gray_frame = gray_frame[y:y + h, x:x + w]
        cropped_img = np.expand_dims(np.expand_dims(cv2.resize(roi_gray_frame, (48, 48)), -1), 0)

        emotion_prediction = emotion_model.predict(cropped_img)
        maxindex = int(np.argmax(emotion_prediction))
        detected_emotion = emotion_dict[maxindex]

        if detected_emotion == emotions_to_practice[current_emotion_index]:
            cv2.putText(frame, "Good Job!", (x+5, y+50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)

        cv2.putText(frame, detected_emotion, (x+5, y-20), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2, cv2.LINE_AA)

    cv2.imshow('Emotion Detection', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
