import React, { Component } from "react";
import Card from "./Card";
import img1 from "../img/image1.jpg";
import img2 from "../img/image2.jpg";
import img3 from "../img/image3.jpg";
import img4 from "../img/image4.jpg";
import img5 from "../img/image5.jpg";
import img6 from "../img/image6.jpg";
import img7 from "../img/image7.jpg";
import img8 from "../img/image8.jpg";
import img9 from "../img/image9.jpg";
import img10 from "../img/image10.jpg";
import img11 from "../img/image11.jpg";
import img12 from "../img/image12.jpg";
import img13 from "../img/image13.jpg";
import img14 from "../img/image14.jpg";
import img15 from "../img/image15.jpg";
import img16 from "../img/image16.jpg";

class Assortment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: img1,
      name: "Dolce 3 Drawer Console Chair – Linon",
      price: "£55.00",
      stock: true,

      img_2: img2,
      name_2: "Variable Product",
      price_2: "£15.00 - £18.00",
      stock_2: true,

      img_3: img3,
      name_3: "Linea Console Table Dark Espresso – Winsome",
      price_3: "£42.00",
      stock_3: false,

      img_4: img7,
      name_4: "Feugiat Viverra Mauris",
      price_4: "£37.00",
      stock_4: false,
    };
  }

  accessories = () => {
    this.setState({
      img: img1,
      name: "Dolce 3 Drawer Console Chair – Linon",
      price: "£55.00",
      stock: true,

      img_2: img2,
      name_2: "Variable Product",
      price_2: "£15.00 - £18.00",
      stock_2: true,

      img_3: img3,
      name_3: "Linea Console Table Dark Espresso – Winsome",
      price_3: "£42.00",
      stock_3: false,

      img_4: img7,
      name_4: "Feugiat Viverra Mauris",
      price_4: "£37.00",
      stock_4: false,
    });
  };

  bedRoom = () => {
    this.setState({
      img: img4,
      name: "Avington Console Chair Black – TMP",
      price: "£42.00",
      stock: false,

      img_2: img5,
      name_2: "Rochester Console Table Antique  – Winsome",
      price_2: "£23.00",
      stock_2: true,

      img_3: img6,
      name_3: "Modern Anywhere Chair – TMP",
      price_3: "£27.00",
      stock_3: true,

      img_4: img8,
      name_4: "Grouped Product",
      price_4: "£23.00 - £42.00",
      stock_4: false,
    });
  };

  officeRoom = () => {
    this.setState({
      img: img9,
      name: "Modern Anywhere Chair – TMP",
      price: "£27.00",
      stock: true,

      img_2: img10,
      name_2: "Variable Product",
      price_2: "£15.00 - £18.00",
      stock_2: true,

      img_3: img11,
      name_3: "Raw Gunmetal Bottle Cage Lamp – Gray",
      price_3: "£37.00",
      stock_3: false,

      img_4: img12,
      name_4: "Feugiat Viverra Mauris",
      price_4: "£37.00",
      stock_4: true,
    });
  };

  mattress = () => {
    this.setState({
      img: img13,
      name: "Modern Anywhere Chair – TMP",
      price: "£27.00",
      stock: true,

      img_2: img14,
      name_2: "Variable Product",
      price_2: "£15.00 - £18.00",
      stock_2: true,

      img_3: img15,
      name_3: "Raw Gunmetal Bottle Cage Lamp – Gray",
      price_3: "£37.00",
      stock_3: false,

      img_4: img16,
      name_4: "Feugiat Viverra Mauris",
      price_4: "£37.00",
      stock_4: false,
    });
  };

  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="best">
              <div className="orange_box"></div>
              <div className="best_text">
                <h2>Best Seller</h2>
              </div>
            </div>
            <nav className="menu">
              <ul className="menu_list">
                <li className="menu_item" onClick={this.accessories}>
                  Accessories
                </li>
                <li className="menu_item" onClick={this.bedRoom}>
                  Bed Room
                </li>
                <li className="menu_item" onClick={this.officeRoom}>
                  Office Room
                </li>
                <li className="menu_item" onClick={this.mattress}>
                  Mattress
                </li>
              </ul>
              <div className="dash"></div>
            </nav>
          </div>
        </header>
        <section className="assortment">
          <div className="assortment_container">
            <Card
              photo={this.state.img}
              infoname={this.state.name}
              infoprice={this.state.price}
              infostock={this.state.stock ? "Are available" : "Not available"}
            />
            <Card
              photo={this.state.img_2}
              infoname={this.state.name_2}
              infoprice={this.state.price_2}
              infostock={this.state.stock_2 ? "Are available" : "Not available"}
            />
            <Card
              photo={this.state.img_3}
              infoname={this.state.name_3}
              infoprice={this.state.price_3}
              infostock={this.state.stock_3 ? "Are available" : "Not available"}
            />
            <Card
              photo={this.state.img_4}
              infoname={this.state.name_4}
              infoprice={this.state.price_4}
              infostock={this.state.stock_4 ? "Are available" : "Not available"}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Assortment;
