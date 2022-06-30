import React, {useContext} from "react";
import {RenderContext} from "../App";

export default function SupportPage(){

    const cards = useContext(RenderContext)


    const auth = cards.find(card => (card.rendered === true && card.name === 'supportPage'))

    if (!auth) return null


    return(
        <div className="container">
            <div className="d-auth">
                <form>
                    <div className="row mb-3 ">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-8">
                            <input type="email" className="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputTextarea" className="col-sm-2 col-form-label">Massage</label>
                        <div className="col-sm-8">
                            <textarea className="form-control" id="inputTextarea"/>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <button type="submit" className="btn btn-outline-dark">Send</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    )
}