import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import InProgress from './components/banner/InProgress'
import Resolved from './components/banner/Resolved'
import Container from './components/Container'
import CustomerTickets from './components/CustomerTickets'
import Flex from './components/Flex'
import Navbar from './components/Navbar'

// Fetch Data
const fetchData = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

const fetchDataPromise = fetchData();

function App() {

  

  // Ticket card selected
  const [selectedCards, setSelectedCards] = useState([])
  // console.log(selectedCards)

  return (
    <>
      <Navbar />
      <Container>
        <Banner selectedCards={selectedCards}/>
        <Suspense fallback={'Loading...'}>
          <CustomerTickets selectedCards={selectedCards} setSelectedCards={setSelectedCards} fetchDataPromise={fetchDataPromise}/>
        </Suspense>
      </Container>
    </>
  )
}

export default App
