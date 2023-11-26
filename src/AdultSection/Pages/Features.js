import React, { Fragment } from 'react';

const FeatureBlock = ({ title, description }) => (
<div className="neon-box opacity-50 border-t border-gray-200 border-opacity-0 pt-4 bg-gradient-to-br from-yellow-100 to-yellow-400 p-8 rounded-lg">
    <dt className="font-medium text-xl text-gray-900">{title}</dt>
    <dd className="mt-2 text-gray-500">{description}</dd>
  </div>
);

const Features = () => {
  const images = [
    "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?auto=format&fit=crop&q=80&w=3538&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.pixabay.com/photo/2020/08/29/06/10/boy-5526279_1280.jpg",
    "https://www.brainfacts.org/-/media/Brainfacts2/Diseases-and-Disorders/Childhood-Disorders/Article-Images/Dyslexia-Article-Image.png",
    "https://media.istockphoto.com/id/1279422267/photo/asian-girl-with-downs-syndrome-studying-in-art-class.jpg?s=612x612&w=0&k=20&c=skkHYUYV2SmP7LptZypB4cnkcXGiN0Urz0Bt1eveFZc=",
    "https://media.istockphoto.com/id/1324829668/photo/autistic-children-care-of-child-mental-health-with-a-child-psychologist-using-a-psychotherapy.jpg?s=612x612&w=0&k=20&c=eJUFmmgb5DnvdQtbEYUeGtqX3vopXAc8BXFFJAEXAac=",
    "https://i0.wp.com/www.additudemag.com/wp-content/uploads/2016/11/School.3Rs.How_to_improve_reading_skills_in_children_with_ADHD_or_LD.Article.983.girl_mom_reading.ts_77832675-1.jpg",
    "https://www.brainbalancecenters.com/hubfs/Imported_Blog_Media/Reading-Help-for-Dyslexia-1.jpg",
  ];

  return (
    <Fragment>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mt-12 mb-8">Features</h2>
      <div className="mx-auto flex flex-wrap justify-between max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt="" className="rounded-lg bg-gray-100" />
          ))}
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 pl-4 lg:pl-16">
            <h1 className="text-2xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">A.I.</span>utism
            </h1>
            <p className="mt-4 text-xl text-gray-500 mb-8">
                A.I.utism is committed to empowering those with autism and dyslexia, fostering a sense of community and enhancing awareness. The application stands as a testament to the potential and capabilities of these individuals, underlining the tagline: "Harnessing Strengths, Bridging Communities."
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
    <FeatureBlock title="Customized User Experience" description="Acknowledging the individuality of every user, the app facilitates customization to cater to their distinct needs and aspirations." />
    <FeatureBlock title="Event Exploration" description="A.I.utism centralizes events aimed at raising awareness for autism and dyslexia. This feature enables users to explore and partake in events that align with their vision and objectives." />
    <FeatureBlock title="Opportunities for Volunteering" description="A.I.utism bridges the gap between individuals with autism or dyslexia and support organizations. Through the app, users can discover volunteer roles, allowing them to contribute to the community and the causes close to their hearts." />
    <FeatureBlock title="Awareness and Discussion Platforms" description="The app includes moderated forums, offering a secure platform for users to discuss their experiences, challenges, and successes." />
    <FeatureBlock title="Connect with Like-minded Peers" description="A.I.utism enables users to connect with peers who resonate with their experiences, laying the groundwork for mutual support and guidance." />
    <FeatureBlock title="Narrative Promotion and Advocacy" description="Promoting personal narratives, A.I.utism encourages individuals to share their life stories, victories, and challenges, cultivating a sense of unity within the community." />
</dl>
        </div>
      </div>
    </Fragment>
  )
}

export default Features;
