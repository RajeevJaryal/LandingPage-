import { useState } from 'react'
import LandingPage from './landingpage/LandingPage'
import ExperienceSection from './landingpage/ExperienceSection';
import ConversationsSection from './landingpage/ConversationsSection';
import './App.css'
import TemplateSection from './landingpage/TemplateSection';
import TestimonialSection from './landingpage/TestimonialSection';
import ProductivityCTA from './landingpage/ProductivityCTA';
import FooterSection from './landingpage/FooterSection';

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
