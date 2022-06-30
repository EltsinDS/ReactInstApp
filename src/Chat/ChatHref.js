import React from "react";

export default function ChatHref(){
    return (
        <div className="list-group" id="list-tab" role="tablist">
            <a className="list-group-item list-group-item-action active" id="list-home-list"
               data-toggle="list" href="#list-home" role="tab" aria-controls="home">Sonya</a>
            {/*<a className="list-group-item list-group-item-action" id="list-profile-list"*/}
            {/*   data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">German</a>*/}
            {/*<a className="list-group-item list-group-item-action" id="list-messages-list"*/}
            {/*   data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Admin</a>*/}
        </div>


    )
}