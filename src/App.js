import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import ReservePage from './components/ReservePage';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from  '@chakra-ui/react'

function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Box height={"124px"} />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<ReservePage />}></Route>
        </Routes>
        </BrowserRouter>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
