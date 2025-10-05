
import LeftCard from './LeftCard';
import TaskStatusBar from './TaskStatusBar';

const CustomerTickets = ({ fetchDataPromise, selectedCards, setSelectedCards, completeInprogress }) => {

    
    // console.log(selectedCards)

    return (
        <div className='flex items-start gap-x-8 mt-10'>
            <LeftCard selectedCards={selectedCards} setSelectedCards={setSelectedCards} fetchDataPromise={fetchDataPromise}/>
            <TaskStatusBar completeInprogress={completeInprogress} selectedCards={selectedCards}/>
        </div>
    )
}

export default CustomerTickets
