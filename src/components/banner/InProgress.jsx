import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import bg1 from '../../assets/bg1.png'

const InProgress = () => {
    return (
        <>
            <div class="w-[608px] h-[250px] rounded-2xl relative">
                <div class="absolute inset-0">
                    <img src={bg1} class="w-full h-full rounded-2xl object-cover" alt="pattern" />
                </div>

                <div class="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h2 class="text-xl font-semibold">In-Progress</h2>
                    <p class="text-5xl font-medium">0</p>
                </div>
            </div>

        </>
    )
}

export default InProgress
