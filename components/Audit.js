import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';

export default function Audit() {
    const [type, setType] = useState(1)
    const [status, setStatus] = useState(3)
    return (
        <div>
            <div className='flex justify-center space-x-4'>
                <div onClick={() => setType(1)} className={type == 1 ? 'bg-[#FC7944] text-[#191516] cursor-pointer px-5 p-2 rounded-xl' : 'border cursor-pointer border-[#FC7944] text-[#FC7944] px-5 p-2 rounded-xl'}>
                    Bulk
                </div>
                <div onClick={() => setType(2)} className={type == 2 ? 'bg-[#FC7944] cursor-pointer text-[#191516] px-5 p-2 rounded-xl' : 'border cursor-pointer border-[#FC7944] text-[#FC7944] px-5 p-2 rounded-xl'}>
                    Individual
                </div>
            </div>
            <div id='bulk' className='space-x-5 outline-dotted h-60 outline-[#FC7944] items-center mx-auto flex justify-center container mt-10 text-center pt-10 desc text-[#FC7944]'>
                <h1>Drop a file</h1>
                <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M11.5 15.577v-8.65l-2.33 2.33l-.708-.719L12 5l3.538 3.538l-.707.72L12.5 6.927v8.65zM6.615 19q-.69 0-1.152-.462Q5 18.075 5 17.385v-2.423h1v2.423q0 .23.192.423q.193.192.423.192h10.77q.23 0 .423-.192q.192-.193.192-.423v-2.423h1v2.423q0 .69-.462 1.152q-.463.463-1.153.463z" />
                </svg>
            </div>
            <div className='mx-auto container text-white desc flex justify-center mt-40'>
                {status == 1 &&
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Get started by uploading a file')
                                .start();
                        }}
                    />
                }
                {status == 2 &&
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Processing file...')
                                .start();
                        }}
                    />
                }
                {status == 3 &&
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Checking for potential phishing links...')
                                .start();
                        }}
                    />
                }
            </div>
        </div>
    )
}
