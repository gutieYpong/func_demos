import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import InfiniteScroll from "./components/InfiniteScroll/infiniteScroll";
import FetchData from "./components/FetchData/fetchData";
import FetchDataHook from "./components/FetchData/fetchData(Hook)";
import FetchDataUseReducer from "./components/FetchData/fetchData(Reducer)";
import SetIntervals from "./components/SetIntervals";


const Container = styled.div`
  /* Layout */
  width: auto;
  min-width: 100%;
  height: auto;
  min-height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "routes"
    "main"
    "footer";
  grid-template-rows: 40vh 10vh 60vh 10vh;
  grid-row-gap: 16px;
  place-items: start center;
  padding: 32px;

  background-color: #C4A8E3;
`;

const Cover = styled.div`
  /* Layout */
  width: 80%;
  height: 100%;
  grid-area: header;
  display: flex;
  justify-content: space-around;
  
  /* background-color: yellow; */

  div { // 1869 x 2390
    width: 200px;
    height: 256px;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, #7F46A6 -2px 6px 8px 0px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    /* border: 3px solid #7F46A6; */
    /* border-radius: 55% 55% 0px 0px / 44% 44% 0px 0px; */
  }
`;

const Paths = styled.div`
  /* Layout */
  width: 60%;
  height: 100%;
  grid-area: routes;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 50%);
  place-items: center;

  /* background-color: lightcoral; */
`;

const Footer = styled.div`
  /* Layout */
  width: 50%;
  height: 100%;
  grid-area: footer;

  /* background-color: lightpink; */
`;

const App = () => {
  return (
    <Container>
      <Cover>
        <div>
          <img src={ process.env.PUBLIC_URL + `IU_tuned_croped.png` } alt="cover" />
        </div>
      </Cover>
      <BrowserRouter>
      <Paths>
        <span><Link to="/">Infinite Scroll</Link></span>
        <span><Link to="/fetchdata">Fetch Data</Link></span>
        <span><Link to="/fetchdata-hook">Fetch Data useHook </Link></span>
        <span><Link to="/fetchdata-reducer">Fetch Data useReducer</Link></span>
        <span><Link to="/set-intervals">Set Intervals</Link></span>
      </Paths>
        <Routes>
          <Route path="/" element={ <InfiniteScroll /> } />
          <Route path="/fetchdata" element={ <FetchData /> } />
          <Route path="/fetchdata-hook" element={ <FetchDataHook /> } />
          <Route path="/fetchdata-reducer" element={ <FetchDataUseReducer /> } />
          <Route path="/set-intervals" element={ <SetIntervals /> } />
        </Routes>
      </BrowserRouter>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default App;
