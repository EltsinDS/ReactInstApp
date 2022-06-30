import React from "react";
import ChatContent from "./ChatContent";

export default function ChatBody(){
    return (
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="list-home" role="tabpanel"
                 aria-labelledby="list-home-list"> <ChatContent />
            </div>
            <div className="tab-pane fade" id="list-profile" role="tabpanel"
                 aria-labelledby="list-profile-list"><ChatContent />
            </div>
            <div className="tab-pane fade" id="list-messages" role="tabpanel"
                 aria-labelledby="list-messages-list"><ChatContent />
            </div>
            <div className="tab-pane fade" id="list-settings" role="tabpanel"
                 aria-labelledby="list-settings-list"><ChatContent />
            </div>
        </div>
    )
}