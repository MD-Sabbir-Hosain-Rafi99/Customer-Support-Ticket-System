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

function App() {

  const fetchDataPromise = fetchData();

  // Ticket card selected
  const [selectedCards, setSelectedCards] = useState([])


  return (
    <>
      <Navbar />
      <Container>
        <Banner/>
        <Suspense fallback={'Loading...'}>
          <CustomerTickets fetchDataPromise={fetchDataPromise}/>
        </Suspense>
      </Container>
    </>
  )
}

export default App
