import React, {useState} from "react";
import CommentTable from "./CommentTable";
import CommentUpload from "./CommentUpload";
import {useUpload} from "../hook/upload.hook";

export default function CommentCard({id}){
    const {downloadCurrentComment} = useUpload()
const [comments, setComments] = useState(downloadCurrentComment(id))

    function updateCommentCard(card){
        setComments(card)
    }

    return(
        <div className="modal fade d-start" id={`modal_` + id} tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close btn " data-dismiss="modal" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-x" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="modal-body">

                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Time</th>
                                <th scope="col">Name</th>
                                <th scope="col">Message</th>
                            </tr>
                            </thead>
                            <tbody>
                            { comments ?
                                comments.map(comment =>{
                                    return <CommentTable comment={comment} key={comment.id}/>
                                })
                                : null
                            }
                            </tbody>
                        </table>
                    </div>

                    <CommentUpload
                        id={id}
                        updateCommentCard={updateCommentCard}
                    />

                </div>
            </div>
        </div>
    )
}