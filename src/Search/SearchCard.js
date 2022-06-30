import React from "react";
import SearchCarousel from "./SearchCarousel";
import CommentWindow from "../Comments/CommentWindow";
import SearchTrash from "./SearchTrash";
import SearchSave from "./SearchSave";

export default function SearchCard({card, removeLook, addToSave}){

    if (!card) return null
    else if (!card.id) return null

    return(
        <div className="row justify-content-md-center">
            <div className="col-md-auto">
                <div className="card mb-3 n-card">
                    <div className="row g-0">
                        <div className="col-md-4">

                            <SearchCarousel file={card.file}/>

                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.info}</p>
                                <p className="card-text"><small className="text-muted">{card.date}</small></p>
                            </div>
                            <div className="d-dis">
                                <button type="button" className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path
                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </button>
                                <SearchSave id={card.id} addToSave={addToSave}/>
                                <CommentWindow id={card.id}/>
                                <SearchTrash id={card.id} removeLook={removeLook}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}