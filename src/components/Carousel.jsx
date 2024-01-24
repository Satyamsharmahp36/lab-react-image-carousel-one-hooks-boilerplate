import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    const length = images.length

    const [index,setIndex]= useState(0);
    const handleBack=()=>{
        setIndex(index<=0?index=length-1:index-1)
    }
    const handleForward=()=>{
        setIndex(index>=length-1?index=0:index+1)
    }



    return(
        <div id="mainDiv" style={{backgroundImage:`url(${images[index].img})`}}>
            <div className="ourButton" onClick={handleBack}><ArrowBackIosIcon/></div>
            <div id="Center">
                <h1>{images[index].title}</h1>
                <h2>{images[index].subtitle}</h2>
            </div>
            <div className="ourButton" onClick={handleForward}><ArrowForwardIosIcon/></div>
        </div>
    )
}

export default Carousel;