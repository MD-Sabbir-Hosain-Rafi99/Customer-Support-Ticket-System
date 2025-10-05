import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
const Selected = ({ card, completeInprogress }) => {
    // console.log(card)

    const handleComplete = () => {
        completeInprogress(card)
        console.log(card.id)
        toast("Complete");
    }
    return (
        // <p>Select a ticket to add to Task Status</p>
        <>
            <div className="p-4 w-[230px] bg-white rounded-md mt-4">
                <h3 className='pb-2 text-black'>{card.title}</h3>
                <button onClick={handleComplete} className="btn bg-[#02A53B] w-full text-white">Complete</button>
            </div>

            <ToastContainer />

        </>

    )
}

export default Selected
