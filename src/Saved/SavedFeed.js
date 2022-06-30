import React, {useContext} from "react";
import {RenderContext} from "../App";
import SavedCard from "./SavedCard";
import NewsCard from "../News/NewsCard";


export default function SavedFeed({save}){

    console.log(save)
    const cards = useContext(RenderContext)

    const renderCard = cards.find(card => (card.rendered === true && card.name === 'savedFeed'))
    console.log(save)
    if (!renderCard) return null
    else if (!save) return null

    return(
        <div className="d-start">
            <div className="container">
                {
                    save.map(card =>{
                        return <SavedCard save={card} key={card.id}/>
                    })
                }
            </div>
        </div>
    )
}