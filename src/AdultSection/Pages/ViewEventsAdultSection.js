import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const ViewEventsAdultSection = () => {
  return (
    <div style={{ backgroundColor: "#fdff9e" }}>
      <div className="bg-white" style={{ backgroundColor: "#FFEC86" }}>
        <div className="bg-white" style={{ backgroundColor: "#0d87f400" }}>
          <br />
          <br />
          <br />
          <h2 className="text-4xl font-bold text-gray-900" style={{ textAlign: "center" }}>Community Events</h2>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

              {/* Event 1 */}
              <Link to="/" className="group" style={{ backgroundColor: "#fdff9e", padding: "30px", borderRadius: "20px" }}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://www.brainfacts.org/-/media/Brainfacts2/Diseases-and-Disorders/Childhood-Disorders/Article-Images/Dyslexia-Article-Image.png" alt="People enjoying a community picnic." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>Summer Festival</h2>
                <h3 className="mt-4 text-sm text-gray-700" style={{ marginBottom: "34px" }}>
                  Join us this weekend at Meadowview Park for a vibrant summer festival! This event, organized for the local community, promises a day of music, food, and family-friendly activities. Enjoy the festivities and create lasting memories.
                </h3>
                <Link to="/" className="rounded-md bg-[#FF1493] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-[#FF1493] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">RSVP</Link>
              </Link>

              {/* Event 2 */}
              <Link to="/" className="group" style={{ backgroundColor: "#fdff9e", padding: "30px", borderRadius: "20px" }}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://media.istockphoto.com/id/1279422267/photo/asian-girl-with-downs-syndrome-studying-in-art-class.jpg?s=612x612&w=0&k=20&c=skkHYUYV2SmP7LptZypB4cnkcXGiN0Urz0Bt1eveFZc=" alt="People learning about autism awareness." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>Community Workshop</h2>
                <h3 className="mt-4 text-sm text-gray-700" style={{ marginBottom: "34px" }}>
                  Calling all advocates! The Maplewood Community Center is hosting a workshop on community engagement and collaboration. Join us on September 15th to learn how to make a positive impact in our town.
                </h3>
                <Link to="/" className="rounded-md bg-[#FF1493] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-[#FF1493] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">RSVP</Link>
              </Link>

              {/* Event 3 */}
              <Link to="/" className="group" style={{ backgroundColor: "#fdff9e", padding: "30px", borderRadius: "20px" }}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://media.istockphoto.com/id/1324829668/photo/autistic-children-care-of-child-mental-health-with-a-child-psychologist-using-a-psychotherapy.jpg?s=612x612&w=0&k=20&c=eJUFmmgb5DnvdQtbEYUeGtqX3vopXAc8BXFFJAEXAac=" alt="People enjoying an art event." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>Art Festival</h2>
                <h3 className="mt-4 text-sm text-gray-700" style={{ marginBottom: "34px" }}>
                  Get ready for an artistic celebration at the Riverside Art Center! Our Art & Culture Festival is happening on October 2nd. Explore various art forms, engage with local artists, and immerse yourself in creativity.
                </h3>
                <Link to="/" className="rounded-md bg-[#FF1493] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-[#FF1493] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">RSVP</Link>
              </Link>

              {/* Event 4 */}
              <Link to="/" className="group" style={{ backgroundColor: "#fdff9e", padding: "30px", borderRadius: "20px" }}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://i0.wp.com/www.additudemag.com/wp-content/uploads/2016/11/School.3Rs.How_to_improve_reading_skills_in_children_with_ADHD_or_LD.Article.983.girl_mom_reading.ts_77832675-1.jpg" alt="People enjoying a movie night." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>Outdoor Movie Night</h2>
                <h3 className="mt-4 text-sm text-gray-700" style={{ marginBottom: "34px" }}>
                  Save the date! The Riverfront Park is hosting an outdoor movie night on September 20th. We'll be screening a family-friendly film, and there will be snacks and a cozy atmosphere for everyone to enjoy.
                </h3>
                <Link to="#" className="rounded-md bg-[#FF1493] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-[#FF1493] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">RSVP</Link>
              </Link>

              {/* Event 5 */}
              <Link to="/" className="group" style={{ backgroundColor: "#fdff9e", padding: "30px", borderRadius: "20px" }}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://www.brainbalancecenters.com/hubfs/Imported_Blog_Media/Reading-Help-for-Dyslexia-1.jpg" alt="People enjoying a culinary event." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>Cooking Workshop</h2>
                <h3 className="mt-4 text-sm text-gray-700" style={{ marginBottom: "34px" }}>
                  Calling all food enthusiasts! Join us for a cooking workshop at the Rainbow Kitchen on September 30th. Our MasterChef Showcase features talented local chefs demonstrating their culinary skills. Taste incredible dishes and support our chefs.
                </h3>
                <Link to="/" className="rounded-md bg-[#FF1493] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-[#FF1493] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">RSVP</Link>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEventsAdultSection;
