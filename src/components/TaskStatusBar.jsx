import React from 'react'
import Selected from './selectedTicketCard/Selected'

const TaskStatusBar = ({selectedCards}) => {
    // console.log(selectedCards)
  return (
    <div>
      <h2 className='text-xl'>Task Status</h2>
      
      {
        selectedCards.map(card => <Selected key={card.id} card={card}></Selected>) 
      }
    </div>
  )
}

export default TaskStatusBar
