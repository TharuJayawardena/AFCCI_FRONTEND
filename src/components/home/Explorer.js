import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import styles from "../../styles/index.module.css";
import { Typography, Button } from "@mui/material";
const carouselStyle = {
  textAlign: "center",
};

export default function Explorer() {
  var items = [
    {
      img: "wrapper.png",
    },
    {
        img: "wrapper.png",
      }
  ];

  return (
    <div className="mt-0" style={carouselStyle}>
      <Carousel indicators={false}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

const Item = (props) => {
  
  return (
  
  <Card >
  <CardMedia
    className="d-flex align-items-center"
    
    image={props.item.img}
    alt="main carousel image"
    style={{ height: "600px"}}
  >
    <div>
      <p className = "items-center" style={{ marginRight:"400px",marginLeft:"400px", fontSize: "60px", fontWeight: "500", color: "#FFFFFF" }}>
        Explore Our Journey
      </p>
      <p className = "items-center" style={{ fontSize: "15px", fontWeight: "80", color: "#FFFFFF"}}>
        Immerse yourself in our journey,achiEvements,and client stories
      </p>
    
    </div>
  </CardMedia>
</Card>
  
    
    
    
    
  );
};