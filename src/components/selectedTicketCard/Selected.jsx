import React from 'react'

const Selected = ({card}) => {
    console.log(card)
    return (
        // <p>Select a ticket to add to Task Status</p>
        <div className="p-4 w-[230px] bg-white rounded-md mt-4">
            <h3 className='pb-2'>{card.title}</h3>
            <button className="btn bg-[#02A53B] w-full text-white">Complete</button>
        </div>
    )
}

export default Selected
