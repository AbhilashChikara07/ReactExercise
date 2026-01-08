import React from "react";
import "./StyleCss/ShopingStyle.css";
import ShoepingItem from "./Components/ShopingItem.jsx";
import Navbar from "./Components/Navbar.jsx";

class ShopingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [
                { id: 1, title: "hats", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
                { id: 2, title: "jackets", imageUrl: "https://i.ibb.co/px2tCc3/jackets.png" },
                { id: 3, title: "sneakers", imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png" },
                { id: 4, title: "womens", imageUrl: "https://i.ibb.co/GCCdy8t/womens.png" },
                { id: 5, title: "mens", imageUrl: "https://i.ibb.co/R70vBrQ/mens.png" },
                { id: 6, title: "hats", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
                { id: 7, title: "jackets", imageUrl: "https://i.ibb.co/px2tCc3/jackets.png" },
                { id: 8, title: "sneakers", imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png" },
                { id: 9, title: "womens", imageUrl: "https://i.ibb.co/GCCdy8t/womens.png" },
                { id: 10, title: "mens", imageUrl: "https://i.ibb.co/R70vBrQ/mens.png" },
            ],
        };
    }

    render() {
        const { categories } = this.state;
        return (
            <>
                <ShoepingItem categories={categories} />
            </>
        );
    }
}

export default ShopingPage;