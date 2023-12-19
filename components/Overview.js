import React, { useState } from 'react'
import Marquee from "react-fast-marquee";


export default function Overview() {
    const [graph, setGraph] = useState(1)
    return (
        <div>
            <div class="container mx-auto flex flex-col md:flex-row md:space-x-5">

                <div class="left md:w-1/2 space-y-2 desc">
                    <div class="left-child border border-white rounded-xl  p-6 flex justify-between items-center">
                        <h1 className='text-white'>Total queries</h1>
                        <h1 className='title text-3xl p-5 rounded-xl bg-white'>100</h1>
                    </div>
                    <div class="left-child border border-white rounded-xl  p-6 flex justify-between items-center">
                        <h1 className='text-white'>Blocked queries</h1>
                        <h1 className='title text-3xl p-5 rounded-xl bg-white'>100</h1>
                    </div>
                    <div class="left-child border border-white rounded-xl  p-6 flex justify-between items-center">
                        <h1 className='text-white'>Allowed queries</h1>
                        <h1 className='title text-3xl p-5 rounded-xl bg-white'>100</h1>
                    </div>
                </div>

                <div class="right md:w-1/2 bg-[#FC7944] rounded-xl p-8">
                    <h1 className='text-xl'>Query logs</h1>
                    <hr className='border-[#191516] my-2' />
                    <div className='bg-[#191516] text-white p-1 px-4 rounded-lg flex justify-between items-center'>
                        <h1>DNSAddress</h1>
                        <div className='flex space-x-10 items-center'>
                            <h1>DD/MM/YY</h1>
                        </div>
                    </div>
                </div>

            </div>
            <div id='graphs' class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-10 mx-auto container">
                <div class="h-96 rounded-lg bg-white p-5">
                    <div className='flex justify-between items-center'>
                        {
                            graph == 1 &&
                            <h1 className='desc'>Graph 1</h1>
                        }
                        {
                            graph == 2 &&
                            <h1 className='desc'>Graph 2</h1>
                        }
                        <div className=''>
                            <button onClick={() => setGraph(1)}>
                                <svg width="25" height="25" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 36L19 24l12-12" />
                                </svg>
                            </button>
                            <button onClick={() => setGraph(2)}>
                                <svg width="25" height="25" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m19 12l12 12l-12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr className='my-2' />
                    {
                        graph == 1 && <div className='mt-40 text-center opacity-50'>first graph</div>
                    }
                    {
                        graph == 2 && <div className='mt-40 text-center opacity-50'>second graph</div>
                    }
                </div>
                <div class="h-96 rounded-lg border border-[#FC7944]">
                    <img src="indns.png" />
                </div>

            </div>
        </div>
    )
}
