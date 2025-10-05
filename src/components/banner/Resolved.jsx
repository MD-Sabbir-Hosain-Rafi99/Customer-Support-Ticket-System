import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import bg2 from '../../assets/bg2.png'
const Resolved = ({resolvedNum}) => {
    return (
        <>
            <div className="w-[408px] md:w-[708px] h-[250px] relative">
                <div className="absolute inset-0">
                    <img src={bg2} className="w-full h-full rounded-2xl object-cover" alt="pattern" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h2 className="text-xl font-semibold">Resolved</h2>
                    <p className="text-5xl font-medium">{resolvedNum}</p>
                </div>
            </div>
        </>
    )
}

export default Resolved
