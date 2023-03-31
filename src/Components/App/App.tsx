import React from 'react';
import AboutMeBox from '../AboutMe/AboutMeBox';
import Carousel from 'antd/es/carousel';
import Aspirations from '../Aspirations/Aspirations';
import FunFacts from '../FunFacts/FunFacts';


const App: React.FC = () => (
  <div style={{overflow: 'hidden', backgroundColor: 'navy'}}>
  <Carousel style={{height: '100vh'}}>
    <AboutMeBox/>
    <Aspirations />
    <FunFacts/>
  </Carousel>
  </div>
);

export default App;

