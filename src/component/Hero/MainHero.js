'use client';

import useSmallScreen from '../Function/useSmallScreen.js';
import Hero from './Hero.js';
// Make sure this import exists

export default function MainNavbar() {
  const isSmallScreen = useSmallScreen();

  return (
    <div className="w-full ">
      {isSmallScreen ? <Hero /> : <Hero />}
    </div>
  );
}
