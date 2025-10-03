import './App.css'
import Banner from './components/banner/Banner'
import InProgress from './components/banner/InProgress'
import Resolved from './components/banner/Resolved'
import Container from './components/Container'
import Flex from './components/Flex'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Container>
        <Banner/>
      </Container>
    </>
  )
}

export default App
