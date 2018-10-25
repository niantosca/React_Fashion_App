import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/App.css";
import StyleCard from "./components/card/style-card";
import API from "../utils/API";
import Navbar from "../navbar/navbar";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


class StylePage extends Component {

     constructor(props){
         super(props);
            this.state = {
                pins: [],
                id: "",
                images: [
                    "./images/Bouge_2.png"
            ]
        };
     };

    componentDidMount() {
        this.loadPins();
    };

    loadPins = () => {
        API.getPinCat(this.props.category)
            .then(res => {
                if (res.data) {
                    this.setState({
                        pins: res.data
                    });
                }
            })
            .catch(err => console.log(err));
    };

    deletePins = id => {
        API.deletePins(id)
            .then(res => this.loadPins())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <Navbar/>
                <div className="Home">
                    <div className="Home-header">
                        <img src={this.state.images[0]} />
                    </div>
                    <p className="Home-intro">
                        Check out these options!
                    </p>
                </div>
                <div className="row">
                    {this.state.pins.map(pin =>
                        <Card className="col-4" data-title={pin.title}>
                            <CardImg top width="100%" src={pin.image_URL} alt="Card image cap" />
                        </Card>
                    )}
                </div>
            </div>
        )
    }
};
export default StylePage;