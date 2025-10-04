import React from 'react'
import Flex from '../Flex'
import InProgress from './InProgress'
import Resolved from './Resolved'

const Banner = ({selectedCards}) => {
    return (
        <>
            <div className="">
                <Flex className={'mt-5 justify-between'}>
                    <InProgress selectedCards={selectedCards} />
                    <Resolved />
                </Flex>
            </div>
        </>
    )
}

export default Banner
