import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StoryCard = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      // Replace the API URL with your own data source.
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();

      const user = data.results[0];
      setUserData({
        name: `${user.name.first} ${user.name.last}`,
        profilePicture: user.picture.large,
      });

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <article className="flex max-w-xl flex-col items-start justify-between" style={{ backgroundColor: "#ffffff", padding: "30px", borderRadius: "8px" }}>
      <div className="flex items-center gap-x-4 text-xs mb-4">
        <time dateTime="2023-10-28" className="text-gray-500">Oct 28, 2023</time>
        <Link to="/stories/story" className="font-medium text-gray-700 text-xl hover:text-blue-500 transition-colors duration-300">Discovering New Horizons</Link>
      </div>
      <div className="group relative">
        <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link to="/stories/story" className="hover:underline">Discovering New Horizons</Link>
        </h3>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-900">
        Embrace a journey of resilience and growth, where unique challenges become your path to self-discovery. Join us in exploring the strengths within neurodiversity and uncovering the hidden talents that redefine your life's narrative.
        </p>
      </div>
      <div className="relative mt-6 flex items-center gap-x-4">
        <img src={isLoading ? 'loading.gif' : userData.profilePicture} alt="Profile" className="h-10 w-10 rounded-full bg-gray-200" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <Link to="/stories/story" className="hover:underline">{isLoading ? 'Loading...' : userData.name}</Link>
          </p>
          <p className="text-gray-600">Adventurer</p>
        </div>
      </div>
    </article>
  );
}

export default StoryCard;
