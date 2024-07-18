import React from 'react';
import './App.css';
import './ImageSlider';
import IamgeSlider from './ImageSlider';
import TikTakToe from './TicTackToe';
import TableForm from './TableForm';
import Calculator from './Calculator';
import Carousel from './Carousel';
import FlashCard from './FlashCard';
import EventBasic from './ReactEventHandling/EventHandle_Basic'
import CommentsList from './Comment'
const App = () => {
  return (
    <div className="game">
      {/* <TikTakToe /> */}
      {/* <IamgeSlider /> */}
      {/* <TableForm />  */}
      {/* <Calculator /> */}
      <Carousel />
      {/* < EventBasic /> */}
      {/* <FlashCard /> */}
      {/* <CommentsList /> */}
    </div>
  );
};

export default App;
