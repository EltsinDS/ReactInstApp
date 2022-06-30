import React, { useContext, useState} from "react";
import SearchPanel from "./SearchPanel";
import SearchCard from "./SearchCard";
import {RenderContext} from "../App";

export default function SearchLook({removeLook, lookCards, addToSave}){

    const cards = useContext(RenderContext)
    const renderCard = cards.find(card => (card.rendered === true && card.name === 'searchLook'))

    const [currentLook, setCurrentLook] = useState('')
    console.log(currentLook)

    function findLook(str){
        setCurrentLook(str)
    }


    if (!renderCard) return null

    return(
            <div className="d-start">
                <div className="container">

                    <SearchPanel findLook={findLook}/>
                    { currentLook === '' ?
                        lookCards.map(card =>{
                            return <SearchCard card={card} key={card.id} removeLook={removeLook} addToSave={addToSave}/>
                        })
                        :
                        <SearchCard card={lookCards.find(card => card.title === currentLook)} removeLook={removeLook} addToSave={addToSave}/>
                    }
                </div>
            </div>
    )
}