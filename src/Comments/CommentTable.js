import React from "react";

export default function CommentTable({comment}){
    if (!comment.id) return null
    return(
        <tr>
            <td>{comment.time}</td>
            <td>{comment.name}</td>
            <td>{comment.message}</td>
        </tr>
    )
}