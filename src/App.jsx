import { ChakraProvider } from '@chakra-ui/react'

import Navbar from './components/Navbar'
import Footer from './sections/Footer'
import theme from './utils/theme'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <ChakraProvider theme={ theme }>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ChakraProvider>
  )
}

export default App