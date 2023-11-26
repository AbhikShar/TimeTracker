import React from 'react';

const Story = () => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <article className="bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Exploring New Horizons</h1>
        <div className="flex items-center gap-x-4 mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="User Profile"
            className="h-12 w-12 rounded-full bg-gray-100"
          />
          <div>
            <p className="text-lg font-semibold text-gray-900">John Anderson</p>
            <p className="text-gray-600">Adventurer</p>
          </div>
        </div>
        <p className="text-gray-800 text-lg leading-relaxed mb-8">
          There's a world out there waiting to be explored, and I've made it my life's mission to discover its hidden treasures. Join me on an incredible journey through uncharted territories, from the dense jungles of the Amazon to the icy landscapes of Antarctica. Together, we'll experience the wonders of our planet like never before.
        </p>
        <img
          src="https://images.unsplash.com/photo-1544812046-28f6e9e3d45b"
          alt="Adventure"
          className="w-full rounded-lg"
        />
        <p className="text-gray-800 text-lg leading-relaxed mt-8">
          As an explorer and adventurer, I've faced countless challenges and pushed the boundaries of human exploration. From climbing towering peaks to navigating treacherous waters, my journey has been filled with exhilarating moments and heart-pounding experiences. Through it all, I've learned that the world is a vast and beautiful place, and I'm excited to share my stories with you.
        </p>
      </article>
    </div>
  );
};

export default Story;
