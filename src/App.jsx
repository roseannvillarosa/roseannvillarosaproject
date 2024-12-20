import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Sigin from './components/Sign';


function App() {
  const pageTitle ="Home page"
  const caption ="I love Crochet handmade."
  return (
    <div
      className="flex flex-col min-h-screen">
      <Header />
      <h1>{pageTitle}</h1>
      <div className="flex-grow">
        <Content title ={"Descover Content"} caption={caption} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
