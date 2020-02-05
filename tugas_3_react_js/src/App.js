import React, { Component } from 'react';
import Footer from './Page/Footer'
import MenuMakanan from './Page/MenuMakanan'
import Header from './Page/Header'
import MenuTentangKami from './Page/MenuTentangKami'
import MenuKontak from './Page/MenuKontak'
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <h2>Daftar Makananan Yang Kami Sediakan:</h2>
          <MenuMakanan/>
          <MenuTentangKami/>
          <MenuKontak/>
        <Footer/>
      </div>
    );
  }
}

export default App;
