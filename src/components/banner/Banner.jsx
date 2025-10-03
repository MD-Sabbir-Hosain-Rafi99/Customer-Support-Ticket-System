import React from 'react'
import Flex from '../Flex'
import InProgress from './InProgress'
import Resolved from './Resolved'

const Banner = () => {
    return (
        <>
            <div className="">
                <Flex className={'mt-5 justify-between'}>
                    <InProgress />
                    <Resolved />
                </Flex>
            </div>
        </>
    )
}

export default Banner
