import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header.jsx";
import Footer from "./component/Footer/Footer.jsx";
import SingleCoin from "./component/CoinDetailPage/SingleCoin/SingleCoin";
import CoinDetailPage from "./component/CoinDetailPage/CoinDetailPage";
import Exchange from "./component/Exchange/Exchange";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlecoin/:id" element={<SingleCoin />} />
          <Route path="/detailpage" element={<CoinDetailPage />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
