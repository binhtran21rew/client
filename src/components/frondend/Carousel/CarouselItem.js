import React from "react";
import { imageAPI } from "../../../constant/Constant";

function CarouselItem(props){
    return(
        <div className={"carousel-item " + ( props.id == 0 ? 'active': '' )}  style={{height: "410px"}}>
            <img className="img-fluid" src={`${imageAPI}${props.image}`} alt="Image"/>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidthdth: "700px"}}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">{props.name}</h4>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem