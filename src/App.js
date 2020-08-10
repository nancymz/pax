import React from 'react';

import './App.css';

import AppAppBar from './components/AppAppBar';
import ProductHero from './components/ProductHero';
import ProductValues from './components/ProductValues';
import ProductCategories from './components/ProductCategories';
import ProductHowItWorks from './components/ProductHowItWorks';
import ProductCTA from'./components/ProductCTA';
import AppFooter from './components/AppFooter';




function App() {
  return (
    <React.Fragment>
      <AppAppBar />
    {/*<ButtonAppBar></ButtonAppBar>*/}
    {/* <Album></Album> */}
    <ProductHero></ProductHero>
    <ProductValues />
    <ProductCategories />
    <ProductHowItWorks />
    <ProductCTA />
    <AppFooter />
    </React.Fragment>
  );
}

export default App;
