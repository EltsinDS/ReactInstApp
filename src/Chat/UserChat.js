import React, {useContext} from "react";
import {RenderContext} from "../App";
import ChatHref from "./ChatHref";
import ChatBody from "./ChatBody";

export default function UserChat(){

    const cards = useContext(RenderContext)

    const renderCard = cards.find(card => (card.rendered === true && card.name === 'userChat'))

    if (!renderCard) return null

    return(
        <div className="d-start">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <ChatHref />
                    </div>
                    <div className="col-8">
                        <ChatBody />
                    </div>
                </div>
            </div>
        </div>
    )
}