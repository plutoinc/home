import React from 'react';
import MainSection from './components/mainSection';
import Navbar from '../components/navbar';
import ScholarCarousel from './components/scholarCarousel';
import CriticismSection from './components/criticismSection';

export default class HomeContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <MainSection />
        <ScholarCarousel />
        <CriticismSection />
      </div>
    );
  }
}

