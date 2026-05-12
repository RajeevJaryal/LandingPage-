import { useState } from 'react'
import LandingPage from './landingpage/LandingPage'
import ExperienceSection from './ExperienceSection';
import ConversationsSection from './ConversationsSection';
import './App.css'
import TemplateSection from './TemplateSection';
import TestimonialSection from './TestimonialSection';
import ProductivityCTA from './ProductivityCTA';
import FooterSection from './FooterSection';

function App() {
 return(
  <>
  <LandingPage/>  
  <ExperienceSection/>
  <ConversationsSection/>
  <TemplateSection/>
  <TestimonialSection/>
  <ProductivityCTA/>
  <FooterSection/>
  </>
  
 )
}

export default App
