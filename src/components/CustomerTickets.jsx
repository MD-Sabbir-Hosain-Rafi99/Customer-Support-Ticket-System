
import LeftCard from './LeftCard';
import TaskStatusBar from './TaskStatusBar';

const CustomerTickets = ({ fetchDataPromise, selectedCards, setSelectedCards }) => {

    
    // console.log(selectedCards)

    return (
        <div className='flex items-start  gap-x-8 mt-10'>
            <LeftCard selectedCards={selectedCards} setSelectedCards={setSelectedCards} fetchDataPromise={fetchDataPromise}/>
            <TaskStatusBar selectedCards={selectedCards}/>
        </div>
    )
}

export default CustomerTickets
