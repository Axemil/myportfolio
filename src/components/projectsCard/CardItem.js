import React, { Component } from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

export default class CardItem extends Component {
  cardRender = () => {
    let cardlist = [];
    for (let i = 0; i < this.props.times; i++)
      cardlist[i] = (
        <Card shadow={2} style={{ width: "512px", margin: "20px auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: `url(${this.props.url}) center / cover`
            }}
          >
            {this.props.title}
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions
            style={{ display: "flex", justifyContent: "space-around" }}
            border
          >
            <Button primary ripple>
              GitHub
            </Button>
            <Button primary ripple>
              Codepen
            </Button>
            <Button primary ripple>
              Live demo
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    return cardlist;
  };
  render() {
    return <div className="cell-grid">{this.cardRender()}</div>;
  }
}
