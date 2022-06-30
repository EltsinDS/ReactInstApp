import React, {useContext} from "react";
import {RenderContext} from "../App";
import CalcModal from "./CalcModal";


export default function CalcSize(){

    const cards = useContext(RenderContext)

    const renderCard = cards.find(card => (card.rendered === true && card.name === 'calcSize'))

    if (!renderCard) return null

    return(
        <div className="container">
            <div className="d-auth">
                    <div className="row mb-3 ">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioMale"
                                       id="flexRadioDefault1" checked />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioMale"
                                       id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3 ">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioAge"
                                       id="flexRadioDefault3" checked />
                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                        Adult
                                    </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioAge"
                                       id="flexRadioDefault4"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault4">
                                    Kid
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 ">
                        <div className="col">
                            <label htmlFor="Height" className="">Height</label>
                        </div>
                        <div className="col">
                            <label htmlFor="chestGirth" className="">Chest-girth</label>
                        </div>
                    </div>
                    <div className="row mb-3 ">
                        <div className="col">
                            <input type="number" className="form-control" placeholder="(in cm)" id="Height"/>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control" placeholder="(in cm)" id="chestGirth"/>
                        </div>
                    </div>
                    <div className="row mb-3 ">
                        <div className="col">
                            <label htmlFor="waistCircumference" className="">Waist circumference</label>
                        </div>
                        <div className="col">
                            <label htmlFor="hipGirth" className="">Hip girth</label>
                        </div>
                    </div>
                    <div className="row mb-3 ">
                        <div className="col">
                            <input type="number" className="form-control" placeholder="(in cm)" id="waistCircumference"/>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control" placeholder="(in cm)" id="hipGirth"/>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                            <CalcModal />
                    </div>
            </div>
        </div>
    )
}