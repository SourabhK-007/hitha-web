import React from 'react'
import { partners, team } from '../constants'

const TeamAndPartners = () => {
    return (
        <section className='bg-[#e3e3e3]  mx-auto  md:px-15 lg:py-17 gap-20 w-full  flex flex-col items-center '>
            <div className='flex justify-center items-center flex-col w-[80%]'>
                <h1 className='heading'>Our Team</h1>
           
                <div className='flex flex-wrap w-[80%] md:w-[80%] justify-center items-center gap-10 my-10'>
                    {team.map((member, index) => (
                        /* Give the items a fixed or min-width so they stay consistent */
                        <div key={index} className='flex flex-col items-center justify-start mt-10 w-[150px] md:w-[200px]'>
                            <div className='w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white'>
                                <img src={member.img} alt={member.name} className='w-full h-full object-cover grayscale' />
                            </div>
                            <h2 className='text-[16px] font-oswald mt-4 text-center'>{member.name}</h2>
                            <p className='text-gray-600 text-[14px] font-oswald'>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-center items-center flex-col'>
                <h1 className="heading">
                    Our Ecosystem
                </h1>

                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 mt-12 w-full max-w-5xl place-items-center">

                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="w-22 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center"
                        >
                            <img
                                src={partner}
                                alt={`Partner ${index + 1}`}
                                className="object-contain h-full w-full "
                                loading="lazy"
                            />

                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default TeamAndPartners