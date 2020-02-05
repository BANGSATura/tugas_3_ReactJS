import React, { Component } from 'react';
import Footer from './Page/Footer'
import MenuMakanan from './Page/MenuMakanan'
import Header from './Page/Header'
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <h2>Daftar Makananan Yang Kami Sediakan:</h2>
          <MenuMakanan/>
        <Footer/>
      </div>
    );
  }
}

export default App;
