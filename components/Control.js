import React from 'react'

export default function Control() {
    return (
        <div>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto container">
                <div class="h-96 rounded-lg bg-gray-200 p-5">
                    <div className='flex justify-between items-center'>
                        <h1 className='title'>Whitelist</h1>
                        <div className='flex space-x-2 text-green-700'>
                            <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 12l4.243 4.243l8.484-8.486" />
                            </svg>
                            <h1 className='desc'>Data synced in blockchain</h1>
                        </div>
                    </div>
                    <hr className='border-gray-300 my-2' />
                    <div id='dns-item' className='bg-white p-1 px-4 rounded-lg flex justify-between items-center'>
                        <h1>DNSAddress</h1>
                        <div className='flex space-x-10 items-center'>
                            <h1>DD/MM/YY</h1>z
                        </div>
                    </div>

                </div>
                <div class="h-96 rounded-lg bg-gray-200 p-5">
                    <div className='flex justify-between items-center'>
                        <h1 className='title'>Blacklist</h1>
                        <div className='flex space-x-2'>
                            <svg className='animate-spin' width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M18.43 4.25a.76.76 0 0 0-.75.75v2.43l-.84-.84a7.24 7.24 0 0 0-12 2.78a.74.74 0 0 0 .46 1a.73.73 0 0 0 .25 0a.76.76 0 0 0 .71-.51a5.63 5.63 0 0 1 1.37-2.2a5.76 5.76 0 0 1 8.13 0l.84.84h-2.41a.75.75 0 0 0 0 1.5h4.24a.74.74 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75m.25 9.43a.76.76 0 0 0-1 .47a5.63 5.63 0 0 1-1.37 2.2a5.76 5.76 0 0 1-8.13 0l-.84-.84h2.47a.75.75 0 0 0 0-1.5H5.57a.74.74 0 0 0-.75.75V19a.75.75 0 0 0 1.5 0v-2.43l.84.84a7.24 7.24 0 0 0 12-2.78a.74.74 0 0 0-.48-.95" />
                            </svg>
                            <h1 className='desc text-black'>Data syncing...</h1>
                        </div>
                    </div>
                    <hr className='border-gray-300 my-2' />

                </div>            </div>
            <div className='bg-[#FC7944] mx-auto container mt-10 p-5 h-96 rounded-xl'>
                <h1 className='title text-black'>Information gathering</h1>
                <hr className='border-black my-2' />
                <div className='space-y-3 mt-7' id='infogathering'>
                    <div className='bg-[#191516] text-white p-1 px-4 rounded-lg flex justify-between items-center'>
                        <h1>DNSAddress</h1>
                        <div className='flex space-x-10 items-center'>
                            <h1>DD/MM/YY</h1>
                            <svg className='text-red-500' width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                    <path d="M12 7.627v5.5m0 3.246v-.5" />
                                    <circle cx="12" cy="12" r="9" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className='bg-[#191516] text-white p-1 px-4 rounded-lg flex justify-between items-center'>
                        <h1>DNSAddress</h1>
                        <div className='flex space-x-10 items-center'>
                            <h1>DD/MM/YY</h1>
                            <svg className='text-green-400' width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.635 6.138l.235.123L12 19.882l3.13-1.565a7 7 0 0 0 3.865-5.997l.005-.264V6.693zm3.433 4.561a1 1 0 0 1 1.497 1.32l-.083.094l-5.234 5.235a1.1 1.1 0 0 1-1.46.085l-.096-.085l-2.404-2.404a1 1 0 0 1 1.32-1.498l.094.083l1.768 1.768z" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
