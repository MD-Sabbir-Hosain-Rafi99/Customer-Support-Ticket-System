import React from 'react'
import Selected from './selectedTicketCard/Selected'
import ResolvedRightSideCard from './ResolvedRightSideCard'

const TaskStatusBar = ({ selectedCards, completeInprogress }) => {
    // console.log(selectedCards)
    return (
        <div className='order-1 md:order-2'> 
            <h2 className='text-2xl font-semibold'>Task Status</h2>

            <div className="">
                {selectedCards.length === 0 && (
                    <p className='text-[12px] mt-1'>Select a ticket to add to Task Status</p>
                )}
                {
                     selectedCards.map(card => <Selected selectedCards={selectedCards} completeInprogress={completeInprogress} key={card.id} card={card}></Selected>)
                }
            </div>
                        <ResolvedRightSideCard></ResolvedRightSideCard>
        </div>
    )
}

export default TaskStatusBar
