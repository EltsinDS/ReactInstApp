import React, {useState} from "react";
import {useUpload} from "../hook/upload.hook";

export default function CommentUpload({id, updateCommentCard}){
    const {uploadComment} = useUpload()
    const [form, setForm] = useState({
        name: 'Admin', message: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    function commentHandler(){
        const newCommentList = uploadComment(id, form)
        console.log(newCommentList)
        updateCommentCard(newCommentList)
        setForm({
            name: 'Admin', message: ''
        })
    }

    return(
        <div className="modal-footer">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <textarea
                        onChange={changeHandler}
                        name="message" className="form-control"
                        id="message-text" cols="42"
                        rows="1" value={form.message}
                    />
                </div>
                <div className="col-sm-auto">
                    <button
                        onClick={commentHandler}
                        type="submit" className="btn btn-outline-dark">Send</button>
                </div>
            </div>
        </div>
    )
}