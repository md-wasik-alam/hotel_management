"use client"
import React, { useState } from 'react'
import statename from '@/utils/state.json'
const FilterBox = () => {
    const stateEntries = Object.entries(statename);
    const [person,setPerson]=useState(0);
    const [chield,setChield]=useState(0);
    const [room,setRoom]=useState(0);
   
    return (
        <div className='bg-sky-900 h-auto py-10 flex flex-col items-center'>
            <h2 className=' text-5xl text-white font-serif' >Find the right place to call home.</h2>
            <div className="flex bg-white px-4 py-3 rounded-lg mt-7 space-x-4">


                <select id="countries" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Select Location</option>
                    {stateEntries.map(([stateCode, stateName]) => (
                        <option key={stateCode}>{`${stateName}`}</option>
                    ))}
                </select>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Bedroom</option>
                    <option value="">AC</option>
                    <option value="">Non AC</option>
                    <option value="">Smoking</option>
                    <option value="">Non-smoking</option>

                </select>

                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="  border rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button">{person} Adult {chield} Chield {room} Rooms <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
                </button>


                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li className='flex justify-between px-4'>
                            <p href="#" className="block  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Adult</p>
                            <div className="flex border justify-between w-20 items-center px-2 ">
                                <button className='px-2 rounded-sm hover:bg-gray-200' onClick={()=>person>0?setPerson(person-1):null}>-</button>
                                <span>{person}</span>
                                <button className='px-2 rounded-sm hover:bg-gray-200' onClick={()=>setPerson(person+1)}>+</button>
                            </div>
                        </li>
                        <li className='flex justify-between px-4'>
                            <p href="#" className="block  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Chield</p>
                            <div className="flex border justify-between w-20 items-center px-2 ">
                                <button className='px-2 rounded-sm hover:bg-gray-200' onClick={()=>chield>0?setChield(chield-1):null}>-</button>
                                <span>{chield}</span>
                                <button className='px-2 rounded-sm hover:bg-gray-200' onClick={()=>setChield(chield+1)}>+</button>
                            </div>
                        </li>
                        <li className='flex justify-between px-4'>
                            <p href="#" className="block  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rooms</p>
                            <div className="flex border justify-between w-20 items-center px-2 ">
                                <button className='px-2 rounded-sm hover:bg-gray-200' onClick={()=>room>0?setRoom(room-1):null}>-</button>
                                <span>{room}</span>
                                <button className='px-2 rounded-sm hover:bg-gray-200' onClick={()=>setRoom(room+1)}>+</button>
                            </div>
                        </li>

                    </ul>
                </div>

                <button className='px-3 rounded py-2 bg-blue-700 text-white'>Search</button>

            </div>
        </div>
    )
}

export default FilterBox
