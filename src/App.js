import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/layout';
import { HomePage } from './pages/HomePage';
import { ShopingCard } from './pages/ShopingCard';
import React, { useState} from "react";


function App() {
  const [myCardItem, setMyCardItem] = useState([]);
  console.log(myCardItem);
  return (
   <Routes>
    <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage  setMyCardItem={setMyCardItem}/>} />
        <Route path='shoping' element={<ShopingCard myCardItem={myCardItem}/>} />
    </Route>
   </Routes>
  );
}

export default App;
