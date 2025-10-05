import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import bg1 from '../../assets/bg1.png'

const InProgress = ({selectedCards}) => {
    return (
        <>
            <div className="w-[408px] md:w-[608px] h-[250px] rounded-2xl relative">
                <div className="absolute inset-0">
                    <img src={bg1} className="w-full h-full rounded-2xl object-cover" alt="pattern" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h2 className="text-xl font-semibold">In-Progress</h2>
                    <p className="text-5xl font-medium">{selectedCards.length}</p>
                </div>
            </div>

        </>
    )
}

export default InProgress
