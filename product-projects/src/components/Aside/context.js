import React, { Component } from "react";
import products from "../Products/Products";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return {
        ...state,
        button: action.payload,
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    button: "Meat",
    products: [
      {
        id: 1,
        name: "Dana Eti",
        category: "Meat",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://static01.nyt.com/images/2019/10/06/well/meat1/meat1-superJumbo.jpg",
      },
      {
        id: 2,
        name: "Anchor",
        category: "Milk",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7ZjOXvOc-IafKvfGHrj6b8e5iFN09Gt3OwA&usqp=CAU",
      },
      {
        id: 3,
        name: "Head&Shoulders",
        category: "Skin-Care",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img: "https://pics.drugstore.com/prodimg/345542/900.jpg",
      },
      {
        id: 4,
        name: "Coca&Cola",
        category: "Drink",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://ayb.akinoncdn.com/products/2019/01/22/3539/d365ffae-7e3f-4bc1-b5b4-c7a2c5569002_size780x780_quality60_cropCenter.jpg",
      },
      {
        id: 5,
        name: "Dove",
        category: "Skin-Care",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://www.dove.com/content/dam/unilever/dove/saudi_arabia/pack_shot/6281006423428-1725796-png.png",
      },
      {
        id: 6,
        name: "Palmolive",
        category: "Skin-Care",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://www.bigw.com.au/medias/sys_master/images/images/h83/hdf/12267831885854.jpg",
      },
      {
        id: 7,
        name: "Nexxus",
        category: "Skin-Care",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9ePGLStKpJCysWzKg6hvc7iFO-9HqPL_kgg&usqp=CAU",
      },
      {
        id: 8,
        name: "BioKap",
        category: "Skin-Care",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-FQjP7B8791-Lkr1Pd7JDeNof86Zt75MS6w&usqp=CAU",
      },
      {
        id: 9,
        name: "Vodka Watermelon",
        category: "Drink",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKCDOCHZWarX6HqLT0JiKkOEShF_dCn_u0ow&usqp=CAU",
      },
      {
        id: 10,
        name: "Chocalate",
        category: "Drink",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://www.sustagen.com.au/sites/site.prod1.sustagen.com.au/files/2019-03/chocolate-drink-mocha-delight.jpg",
      },
      {
        id: 11,
        name: "Clover",
        category: "Milk",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://ww2.kqed.org/bayareabites/wp-content/uploads/sites/24/2018/05/IMG_3390-new.jpg",
      },
      {
        id: 12,
        name: "Horizon & Valley",
        category: "Milk",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img: "https://cdn.trendhunterstatic.com/thumbs/organic-milk.jpeg",
      },
      {
        id: 13,
        name: "Dean's",
        category: "Milk",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://listrick.com/wp-content/uploads/2019/03/Dean-Foods-Milk-1024x576.jpg",
      },
      {
        id: 14,
        name: "Cornish Moo",
        category: "Milk",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://worldbranddesign.com/wp-content/uploads/2019/04/Hutch-Agency---Cornish-Moo3.jpg",
      },
      {
        id: 15,
        name: "Bodi",
        category: "Drink",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://worldbranddesign.com/wp-content/uploads/2019/04/Dave-Jones-Design--%C2%A0Bodi-products1.jpg",
      },
      {
        id: 16,
        name: "Martini",
        category: "Drink",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://www.thedrinksbusiness.com/wordpress/wp-content/uploads/2014/06/VR-1207-046_1-640x349.jpg",
      },
      {
        id: 17,
        name: "Vegan Steak",
        category: "Meat",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://lovingitvegan.com/wp-content/uploads/2018/05/Vegan-Steak-17.jpg",
      },
      {
        id: 18,
        name: "Steak",
        category: "Meat",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/the_meat_you_eat_slideshow/650x350_the_meat_you_eat_slideshow.jpg",
      },
      {
        id: 19,
        name: "Qoyun Eti",
        category: "Meat",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://res.cloudinary.com/grohealth/image/upload/v1583748198/DCUK/Content/Red-meat_Medium.jpg",
      },
      {
        id: 20,
        name: "Quzu Eti",
        category: "Meat",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        img:
          "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/globalmeatnews.com/headlines/livestock/red-meat-report-slammed-by-industry/9038653-1-eng-GB/Red-meat-report-slammed-by-industry_wrbm_large.jpg",
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export default Consumer;
