import React, {useContext, useState} from "react";
import NewsCard from "./NewsCard";
import {RenderContext} from "../App";
import NewsAdd from "./NewsAdd";
import {useUpload} from "../hook/upload.hook";

export default function NewsFeed(){
    const cards = useContext(RenderContext)
    const {downloadFile} = useUpload()
    const [newsFeed, setNewsFeed] = useState(downloadFile)
    console.log(newsFeed)

    function updateNewsFeed(card){
        setNewsFeed(card)
    }

    const renderCard = cards.find(card => (card.rendered === true && card.name === 'newsFeed'))
    const auth = cards.find(card => (card.level === 1 && card.name === 'user'))

    if (!renderCard) return null

    return(
        <div className="d-start">
            <div className="container">
                {auth ? <NewsAdd updateNewsFeed={updateNewsFeed}/> : null}
                {
                    newsFeed.map(card =>{
                    return <NewsCard card={card} key={card.id} updateNewsFeed={updateNewsFeed}/>
                })
                }
            </div>
        </div>
    )
}