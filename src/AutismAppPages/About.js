import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section 
            className="about-section max-w-screen-xl items-center relative overflow-hidden bg-gray-900 space-y-6 py-6"
        >
            <div 
                className="absolute top-0 left-0 right-0 bottom-0 z-[-1]"
                style={{
                    backgroundImage: `url("https://img.freepik.com/premium-photo/silhouette-group-young-traveler-standing-open-arms-watched-star-milky-way-night-sky-top-mountain-they-enjoyed-traveling-was-successful-when-he-reached-summit_623166-407.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.5)', // This will darken the background image.
                }}
            ></div>

            <article className="text-content px-6 py-4">
                <header className="title-header mb-4">
                    <span className="text-white border-b-2 border-[#0D79F4] uppercase">About us</span>
                    <h2 className="text-3xl font-bold text-white tracking-tight sm:text-6xl">A.I.<span className="text-[#0D79F4]">utism</span></h2>
                </header>
                <section className="text-details mx-auto max-w-5xl text-white mt-6 text-lg leading-8">
                    <div>
                        Autism, an intricate neurodevelopmental condition, shapes human experiences in myriad ways. It bestows a fresh viewpoint, unmatched abilities, and deep empathy. People with autism often perceive the world differently, noticing details others might miss or feeling overwhelmed by sensory information. The "A.I.utism" app is tailored to cater to this unique sensory and cognitive experience. Through machine learning, the application understands the user's specific needs and offers customized tools and support.
                    </div>
                    <div>
                        Dyslexia, on the other hand, is a neurological condition affecting the way individuals process written language. Many who have dyslexia struggle with tasks that others find simple, like reading a page of text or comprehending written instructions. However, they often excel in other areas, such as problem-solving, creative thinking, and oral communication. The "A.I.utism" app, while primarily designed with autism in mind, is equally beneficial for individuals with dyslexia. By employing advanced text-to-speech features, personalized learning techniques, and interactive exercises, the app assists users in overcoming reading challenges, boosting confidence, and enhancing their natural strengths.
                    </div>
                    <div>
                        The fusion of technology and understanding in "A.I.utism" represents a significant leap forward in inclusivity. By bridging the gap between neurotypical education methods and the needs of those with neurodivergent conditions, we're fostering an environment where everyone has the tools to succeed.
                    </div>
                    <div>
                        In our journey with "A.I.utism", we're not just developing an application; we're building a movement. A movement centered around understanding, empowerment, and the celebration of diversity in all its forms.
                    </div>
                    <div>
                        Join us in championing a more inclusive future. Dive into the world of "A.I.utism" and discover the transformative potential of technology, compassion, and community.
                    </div>
                </section>
                <nav className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                    <Link to="/About/Home" className="text-xl">Home <span aria-hidden="true">&rarr;</span></Link>
                    <Link to="/About/child" className="text-xl">Child<span aria-hidden="true">&rarr;</span></Link>
                    <Link to="/About/adult" className="text-xl">Adult<span aria-hidden="true">&rarr;</span></Link>
                    <Link to="/About/team" className="text-xl">Our Team<span aria-hidden="true">&rarr;</span></Link>
                </nav>
            </article>
        </section>
    );
}

export default About;
