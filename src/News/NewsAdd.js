import React, {useState} from "react";
import {useUpload} from "../hook/upload.hook";

export default function NewsAdd({updateNewsFeed}){
    const {uploadFile} = useUpload()

    const [form, setForm] = useState({
        title: '', information: '', file: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const uploadHandler = async () =>{
        try {
            const newsCard =  await uploadFile(form)
            updateNewsFeed(newsCard)
            setForm({title: '', information: '', file: ''})
        } catch (e) {}
    }


    return(
        <div className="d-start">
            <div className="container">
                <div className="d-auth">
                    <div className="row mb-3 ">
                        <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-8">
                            <input value={form.title} onChange={changeHandler}  name="title" type="text" className="form-control" id="inputTitle"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputInformation" className="col-sm-2 col-form-label">Information</label>
                        <div className="col-sm-8">
                            <textarea value={form.information} onChange={changeHandler} name="information" className="form-control" id="inputInformation"/>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <div className="example-2">
                                <div className="form-group">
                                    <input value={form.file} onChange={changeHandler} type="file" name="file" id="file" className="input-file"/>
                                        <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                                            <span className="js-fileName">Load file</span>
                                        </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <button onClick={uploadHandler} type="submit" className="btn btn-outline-dark">News Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}