/// <reference types="vite/client" />

// Import the necessary components
import { headerTemplate } from '../components/header'; // Adjust the import path if needed
import Navbar from '../components/navbar';
import Hero from '../components/hero';

document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header-container');
    
    // Check if the header container exists
    if (headerContainer) {
      console.log('Header container found');
      headerContainer.innerHTML = headerTemplate; // Insert the header template
    } else {
      console.log('Header container not found');
    }
  
    // Initialize other components
    new Navbar();
    new Hero();
  });
  
  