import React from 'react'

function ServicesPics() {
    return (
        <div className="max-w-4xl ">

            <div id="default-carousel" className="relative" data-carousel="static">
                <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                        <img src="https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_64a006e0d1d9d9bbdbecc930_10_Essential_Figma_Plugins_to_Streamline_Design_to_Code_Process_in_2023_OG_Image_d2bd0dcb61.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://s3-alpha-sig.figma.com/plugins/1037108608720448600/60744/834ce87e244e6cb5aaafe832f2daf211c924d83a-cover?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjDxzWk0kJc15ALGsKB30rBdZYN9Cv~QNMuo7pq5BOfFeuTt9addrx6P4w9Ow-z~P9u~i5B2tZCn7GRXKVPOcN7mKPhSh2QDCYXQG~pV75tFZw8U9KQMPqjzB-5t9YOFHERc3azYFF045NZEyiHlOQhDCDU-mCw~ANJgSguK5V6ubO7n08nI2iZTEvRhB0AXH8pFMv4~96uRcMY8BEek-h6Vk3P5w-eF1izXbuLRozZuyLGlnuetP2hWdteHg0J0LASmLsxpLjqTCLTMkjZai~CbHHKSZAvx089BfdMgggkfAn-3ITOuZ3t1E9z3kAR4wn8aVlu4Pl3gw1oT2GZCrg__" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://s3-alpha.figma.com/hub/file/3637637910/45412fe5-4c0b-46b8-9dc2-267c1cdfa73a-cover.png" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>
                </div>
                <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
                <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
            </div>
            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </div>
    )
}

export default ServicesPics
