import React, { Component } from 'react';
import ListMakanan from '../ListData/ListMakanan'

class MenuMakanan extends Component {
  constructor() {
    super();
    this.state = {
      pesan: 0
    }
    this.pesanan = this.pesanan.bind(this);
    this.rubahPesanan = this.rubahPesanan.bind(this);
  }
  rubahPesanan() {
    this.setState((props,state) => {
      return {
        pesan: this.state.pesan + 1
      };
    });
  }
  pesanan(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                <center>
                  <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                <center>
                  <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                <center>
                  <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                <center>
                  <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"/>
                <center>
                  <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
        <input type="text" onChange={this.pesanan}/>
        <h3>Pesanan Anda: {this.state.pesan}</h3>
      </div>
    );
  }
}
export default MenuMakanan;
