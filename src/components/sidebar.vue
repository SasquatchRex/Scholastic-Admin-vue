<template>
    <div
        class="w-[25vw] max-w-[30vw] bg-zinc-900 h-[95%] my-auto mx-10 py-10 rounded-3xl flex flex-col lg:mx-5 lg:w-[20vw]">
        <div class="flex-grow">
            <router-link to="/">
                <div
                    class="text-gray-50 text-3xl border-b-2 border-gray-600 text-center w-4/5 ml-4 pb-5 px-2 cursor-pointer">
                    Scholastic Admin
                </div>
            </router-link>
            <div class="pt-10 space-y-2">
                <router-link to="/">
                    <div
                        class="mx-4 bg-zinc-800 py-3 px-6 rounded-2xl flex cursor-pointer hover:bg-zinc-700 transition-colors ease-in-out">
                        <div class="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                            </svg>
                        </div>
                        <div class="text-gray-400 ml-6">Dashboard</div>
                    </div>
                </router-link>
                <router-link to="/add/subjects">
                    <div
                        class="mx-4 bg-zinc-800 py-3 px-6 rounded-2xl flex cursor-pointer hover:bg-zinc-700 transition-colors ease-in-out mt-2">
                        <div class="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewRox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div class="text-gray-400 ml-6">Add Subjects</div>
                    </div>
                </router-link>
                <router-link to="/add/mark">
                    <div
                        class="mx-4 bg-zinc-800 py-3 px-6 rounded-2xl flex cursor-pointer hover:bg-zinc-700 transition-colors ease-in-out mt-2">
                        <div class="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>

                        </div>
                        <div class="text-gray-400 ml-6">Add Results data</div>
                    </div>
                </router-link>
                <router-link to="/export">
                    <div
                        class="mx-4 bg-zinc-800 py-3 px-6 rounded-2xl flex cursor-pointer hover:bg-zinc-700 transition-colors ease-in-out mt-2">
                        <div class="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                            </svg>


                        </div>
                        <div class="text-gray-400 ml-6">Export Result</div>
                    </div>
                </router-link>
                
                    <a href="http://localhost:8000/admin" target="_blank"
                        class="mx-4 bg-zinc-800 py-3 px-6 rounded-2xl flex cursor-pointer hover:bg-zinc-700 transition-colors ease-in-out mt-2">
                        <div class="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>



                        </div>
                        <div class="text-gray-400 ml-6">Admin</div>
                    </a>
                
            </div>
        </div>

        <div class="w-full mb-8">
            <div class="rounded-full bg-neutral-900 w-20 h-20 mx-auto  overflow-hidden">
                <img src="@/assets/photo.png" class="scale-150 ">
            </div>
            <div class="text-gray-400 text-xl text-center mt-2">Prithak Lamsal</div>
            <div class="text-gray-400 text-base text-center">Full Stack Python Developer</div>
            <a href="https://www.prithaklamsal.com.np" target="_blank"
                class="text-gray-500 flex justify-center underline">Visit profile Here!</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomeSidebar",
    components: {},
    data() {
        return {
            svg1: "assets/svgs/dashboard.svg", // SVG file location
        };
    },
};
</script>
