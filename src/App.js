import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import ReservePage from './components/ReservePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import { Routes, Route } from "react-router-dom";
import { Box } from  '@chakra-ui/react'

function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Box height={"124px"} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/reserve" element={<ReservePage />}></Route>
        </Routes>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
