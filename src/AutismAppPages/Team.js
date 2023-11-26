import React from 'react';

const Team = () => {
    return (
        <div style={{ backgroundColor: "#0d87f430" }}>
            <div class="bg-[#0d87f400] py-24 sm:py-32" style={{ backgroundColor: "#0d87f40" }}>
                <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3" style={{ backgroundColor: "#0d87f40" }}>
                    <div class="max-w-2xl" style={{ backgroundColor: "#0d87f400" }}>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600">We're the creators of a digital platform that addresses both autism and dyslexia, known as A.I.utism. Our mission is to not only design a user-friendly environment but also to craft a virtual space that connects with and supports every individual navigating their online journey, promoting neurodiversity.</p>
                    </div>
                    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <li>
                            <div class="flex items-center gap-x-6" style={{ backgroundColor: "#0d87f400" }}>
                            <img
  class="h-16 w-16 rounded-full"
  src="https://i.stack.imgur.com/frlIf.png"
  alt="AbhikShar's Avatar"
  onError="this.src='URL_TO_DEFAULT_IMAGE'"
/>                                <div>
                                    <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Loy Tauma</h3>
                                    <p class="text-sm font-semibold leading-6 text-gray-600">Tech Enthusiast, Front-end, and UI Developer</p>
                                    <a href="https://github.com/AbhikShar" class="text-sm font-semibold leading-6 text-indigo-600">AbhikShar</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-x-6" style={{ backgroundColor: "#0d87f400" }}>
                                <img class="h-16 w-16 rounded-full" src="https://avatars.githubusercontent.com/u/1000000001?v=4" alt="" />
                                <div>
                                    <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Tantantanish</h3>
                                    <p class="text-sm font-semibold leading-6 text-gray-600">Back-end Developer, ML Enthusiast</p>
                                    <a href="https://github.com/tantantanish" class="text-sm font-semibold leading-6 text-indigo-600">tantantanish</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Team;
