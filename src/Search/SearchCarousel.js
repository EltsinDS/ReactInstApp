import React from "react";

export default function SearchCarousel({file}){
    return(
        <div id="carouselExampleFade" className="carousel slide carousel-fade"
             data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={file} className=" " alt="..."/>
                </div>
                {/*<div className="carousel-item">*/}
                {/*    <img src="kof2.jpg" className=" " alt="..."/>*/}
                {/*</div>*/}
                {/*<div className="carousel-item">*/}
                {/*    <img src="kof3.jpg" className=" " alt="..."/>*/}
                {/*</div>*/}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button"
               data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button"
               data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    )
}