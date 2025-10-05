import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import InProgress from './components/banner/InProgress'
import Resolved from './components/banner/Resolved'
import Container from './components/Container'
import CustomerTickets from './components/CustomerTickets'
import Flex from './components/Flex'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Fetch Data
const fetchData = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

const fetchDataPromise = fetchData();

function App() {

  // Ticket card selected
  const [selectedCards, setSelectedCards] = useState([])
  const [resolvedNum, setResolveNum] = useState(0)
  // console.log(selectedCards)

  // Complete in-progress
  const completeInprogress = (c) => {
    // console.log(c)
    const filterCardData = selectedCards.filter(crd => crd.id !== c.id);
    // console.log(filterCardData)
    setSelectedCards(filterCardData);
    setResolveNum(resolvedNum + 1)
  }


  return (
    <>
      <Navbar />
      <Container>
        <Banner resolvedNum={resolvedNum} selectedCards={selectedCards} />
        <Suspense fallback={'Loading...'}>
          <CustomerTickets  completeInprogress={completeInprogress} selectedCards={selectedCards} setSelectedCards={setSelectedCards} fetchDataPromise={fetchDataPromise} />
        </Suspense>
      </Container>
      <Footer/>
    </>
  )
}

export default App
