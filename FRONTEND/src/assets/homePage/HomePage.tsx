import React, { Component } from 'react'
import Footer from './footer/Footer.tsx'
import Header from './header/Header.tsx';
import CorePage from './corePage/CorePage.tsx'
import image1 from '../images/DansLesComptes.png'

import './homePage.css'



export default class HomePage extends Component {
  render() {
   
    return (
      <div>
        <div className='sticky-header'>
          <Header/>
        </div>      
        <CorePage/>
        <Footer/>
      </div>
    )
  }
}
