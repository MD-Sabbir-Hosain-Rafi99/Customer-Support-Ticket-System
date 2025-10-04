import React, { use } from 'react'
import { CiCalendar } from "react-icons/ci";
const LeftCard = ({ fetchDataPromise, selectedCards, setSelectedCards }) => {

    const initialData = use(fetchDataPromise)
    // console.log(initialData);

    const handleSelectedCard = (itemCardData) => {
        setSelectedCards([...selectedCards, itemCardData])
    }
    return (
        <>
            
            <div>
                <h2 className='text-2xl font-bold'>Customer Tickets</h2>
                <div className="grid grid-cols-2 gap-[15px] mt-3">

                    {
                        initialData.map((item, index) => {
                            // console.log(item)
                            return <div onClick={() =>handleSelectedCard(item)} key={index} className='shadow-md rounded-md cursor-pointer bg-white p-4 w-[500px] h-[148px]'>
                                <div className="flex items-center justify-between">
                                    <div className="">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <div className={`flex items-center gap-2 rounded-3xl px-2 ${item.status == "In Progress" ? "bg-amber-100" : "bg-green-300"}`}>
                                        <div className={` rounded-full h-[10px] w-[10px] ${item.status == "Open" ? "bg-green-700" : "bg-[#FEBB0C]"}`}>

                                        </div>
                                        <div className="">
                                            <p>{item.status}</p>
                                        </div>
                                    </div>
                                </div>
                                <p>{item.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-x-3">
                                        <div className="">
                                            <p>#{item.id}</p>
                                        </div>
                                        <div className="text-base">
                                            <p className={`${item.priority == "HIGH PRIORITY" ? "text-red-500" : item.priority == "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}>{item.priority}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <div className="">
                                            <p>{item.customer}</p>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <CiCalendar />
                                            <span>{item.createdAt}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default LeftCard
