import React from 'react';
import { Link } from 'react-router-dom';
import VolunteerForm from '../Pages/VolunteerForm';

const VolunteeringEvent = () => {
  return (
    <div className="group relative lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0" style={{ backgroundColor: "#ffffff", borderRadius: "10px", padding: "30px", marginTop: "20px" }}>
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img src="https://www.wired.com/images_blogs/wiredscience/2010/10/ari_neeman.jpg" alt="Placeholder Image" className="h-full w-full object-cover object-center" />
      </div>
      <div>
        <h3 className="mt-6 text-2xl text-gray-900" style={{ marginBottom: "20px" }}>
          <Link to="VolunteerForm">
            <span className="absolute inset-0"></span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
              Campaigns around you!
            </span>
          </Link>
        </h3>
        <p className="text-base text-gray-600" style={{ marginBottom: "20px" }}>Join us in our mission to create a positive impact in our community. Volunteer at our upcoming event and be part of something meaningful. Your time and dedication can bring about real change. Act now and contribute!</p>

        <Link to="VolunteerForm" className="rounded-md bg-[#FF1493] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-[#FF1493] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Involved</Link>
      </div>
    </div>
  );
}

export default VolunteeringEvent;
