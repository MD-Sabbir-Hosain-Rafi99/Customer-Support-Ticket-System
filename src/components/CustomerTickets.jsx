
import LeftCard from './LeftCard';
import TaskStatusBar from './TaskStatusBar';
const CustomerTickets = ({ fetchDataPromise }) => {

    
    

    return (
        <div className='flex items-start gap-x-8 mt-10'>
            <LeftCard fetchDataPromise={fetchDataPromise}/>
            <TaskStatusBar/>
        </div>
    )
}

export default CustomerTickets
