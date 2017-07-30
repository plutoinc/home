import React from 'react';
import MainSection from './components/mainSection';
import Navbar from '../components/navbar';
import ScholarCarousel from './components/scholarCarousel';
import CriticismSection from './components/criticismSection';
import PlatformSection from './components/platformSection';
import ResearchSection from './components/researchSection';
import BlogSection from './components/blogSection';

export default class HomeContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <MainSection />
        <ScholarCarousel />
        <CriticismSection />
        <PlatformSection />
        <ResearchSection />
        <BlogSection />
      </div>
    );
  }
}

