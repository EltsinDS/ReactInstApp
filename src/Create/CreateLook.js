import React, {useContext, useState} from "react";
import {RenderContext} from "../App";

export default function CreateLook({addLook}){
    const cards = useContext(RenderContext)




    const changeHandler = event => {
        setForm({...formCard, [event.target.name]: event.target.value})
    }
    const [formCard, setForm] = useState({title: '', info: '', date: '', file: '', id: 0})
    const [lookID, setLookId] = useState(1)
    function submitHandler(){
        const time = new Date()
        const form = formCard
        form.date = time.toLocaleTimeString()
        form.id = lookID
        form.file = formCard.file.replace(/^.*\\/, "")
        setForm(form)
        const newID =lookID + 1
        setLookId(newID)
        addLook(formCard)
        setForm({title: '', info: '', date: '', file: '', id: 0})
    }

    console.log(formCard)

    const renderCard = cards.find(card => (card.rendered === true && card.name === 'createLook'))

    if (!renderCard) return null

    return(
        <div>
            <div className="d-auth">
                <div className="row mb-3 ">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-8">
                        <input value={formCard.title} onChange={changeHandler}  name="title" type="text" className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Information</label>
                    <div className="col-sm-8">
                        <textarea value={formCard.info} onChange={changeHandler} type="text" name="info" className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <div className="example-2">
                            <div className="form-group">
                                <input value={formCard.file} onChange={changeHandler} type="file" name="file" id="file" className="input-file"/>
                                <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                                    <span className="js-fileName">Load file</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <button onClick={submitHandler} type="submit" className="btn btn-outline-dark">Add Look</button>
                    </div>
                </div>
            </div>
        </div>
    )
}