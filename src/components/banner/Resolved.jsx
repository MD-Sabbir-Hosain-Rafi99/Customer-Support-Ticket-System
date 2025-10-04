import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import bg2 from '../../assets/bg2.png'
const Resolved = () => {
    return (
        <>
            <div className="w-[608px] h-[250px] relative">
                <div className="absolute inset-0">
                    <img src={bg2} className="w-full h-full rounded-2xl object-cover" alt="pattern" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h2 className="text-xl font-semibold">Resolved</h2>
                    <p className="text-5xl font-medium">0</p>
                </div>
            </div>
        </>
    )
}

export default Resolved
