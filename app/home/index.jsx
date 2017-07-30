import React from 'react';
import MainSection from './components/mainSection';
import Navbar from '../components/navbar';

export default class HomeContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <MainSection />
      </div>
    );
  }
}

