import React from 'react'
import Haze from '../AdultSection/components/Haze'
import HazeStyle2 from '../AdultSection/components/HazeStyle2'

const Features = () => {
    return (
        <div class="py-24 sm:py-32">
            <HazeStyle2/>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <h2 class="text-base font-semibold leading-7 text-indigo-600">A.I.utism</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unlocking Potential Together</p>
                    <p class="mt-6 text-lg leading-8 text-gray-600">A.I.utism is an innovative and inclusive app dedicated to enhancing the lives of individuals with autism and dyslexia. Our mission is crystal clear: to empower, educate, and cultivate a supportive community that promotes understanding and acceptance. This comprehensive app offers a wide range of features, each meticulously designed to cater to the diverse needs of our users.</p>
                </div>
                <Haze/>
                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                <span class="font-bold">Interactive Learning for Children:</span>
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">
                                <span class="font-bold">Visual Vocabulary Expansion:</span> Children can enhance their vocabulary by associating words with images, making language acquisition enjoyable and intuitive.
                                <br />
                                <br />
                                <span class="font-bold">Word-Based Games:</span> Engaging word games aid in language skill development while keeping children entertained.
                                <br />
                                <br />
                                <span class="font-bold">Interactive Flashcards:</span> Visual flashcards promote visual learning and boost memory retention.</dd>
                        </div>
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                <span class="font-bold">Community Engagement for Adults:</span>
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">
                                <span class="font-bold">Awareness Events:</span> Adults can explore and participate in community events focused on raising awareness and advocacy for autism and dyslexia, fostering social engagement and inclusivity.
                                <br />
                                <br />
                                <span class="font-bold">Volunteer Opportunities:</span> The app connects users with NGOs and organizations dedicated to supporting individuals with autism and dyslexia, making it effortless to contribute to the community.
                                <br />
                                <br />
                                <span class="font-bold">Personal Story Sharing:</span> Users have the opportunity to share their personal experiences and stories, nurturing a sense of belonging and understanding among adults on the spectrum.</dd>
                        </div>
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                <span class="font-bold">Safe and Supportive Community:</span>
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">
                                <span class="font-bold">Moderated Forums:</span> The app includes moderated forums where users can openly discuss their challenges, successes, and experiences in a secure and supportive environment.
                                <br />
                                <br />
                                <span class="font-bold">Professional Guidance:</span> Connect with autism experts, therapists, and counselors for expert guidance and support.</dd>
                        </div>
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                <span class="font-bold">Personalized User Experience:</span>
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">We recognize the uniqueness of each individual, each with their preferences and requirements. The app allows users to customize their interface to suit their specific needs, ensuring a more tailored and user-centric experience.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Features
