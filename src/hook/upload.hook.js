import {useCallback} from "react";

export const useUpload = () =>{

    const downloadFile = useCallback( () => {
        const downloadNews = localStorage.getItem('News')
        return JSON.parse(downloadNews) || []
    }, [])

    const downloadComment = useCallback( () => {
        const downloadComments = localStorage.getItem('NewsComments')
        return JSON.parse(downloadComments) || [{id: 0, card: [{id: 0, name: 'Name', message: 'Message'}]}]
    }, [])

    const downloadCurrentComment = useCallback( (id) => {
        const currentComments = downloadComment()
        const currentComment = currentComments.find(comments => comments.id === id) || [{id: 0, name: 'Name', message: 'Message'}]
        return currentComment.card
    }, [downloadComment])

    const uploadComment= useCallback(  (id, body = [{id: 0, name: 'Name', message: 'Message'}]) => {
        const comments = downloadComment()
        const commentTime = new Date()
        const newComments = comments.map(comment => {
            if (comment.id === id){
                comment.card.push({...body, id: comment.card.length, time: commentTime.toLocaleTimeString()})
            }
            return comment
        })
        localStorage.setItem('NewsComments', JSON.stringify(newComments))
        return downloadCurrentComment(id)
    }, [downloadComment, downloadCurrentComment])

    const createComment= useCallback(  (id) => {
        const comments = downloadComment()
        const commentDate = new Date()
        comments.push({id, card: [{id: 0, name: 'Name', message: 'Message', time: commentDate }]})
        localStorage.setItem('NewsComments', JSON.stringify(comments))
        return comments
    }, [downloadComment])

    const uploadFile = useCallback(  (body) => {
        const news = downloadFile()
        const id = localStorage.getItem('NewsID')
        const ID = JSON.parse(id) || 0
        const newsId = parseInt(ID, 10)
        createComment(newsId)
        const uploadDate = new Date()
        const link = body.file
        news.push({...body, file: link.replace(/^.*\\/, ""), id: newsId, date: uploadDate.toLocaleTimeString()})
        localStorage.setItem('News', JSON.stringify(news))
        localStorage.setItem('NewsID', JSON.stringify(newsId + 1))
        return news
    }, [downloadFile, createComment])


    const deleteNews = useCallback(  (id) => {
        const deleteNews = downloadFile()
        const newsId = deleteNews.findIndex(news => news.id === id)
        deleteNews.splice(newsId, 1)
        localStorage.setItem('News', JSON.stringify(deleteNews))
        return deleteNews
    }, [ downloadFile])



    return {uploadFile, downloadFile, deleteNews, uploadComment, downloadComment, downloadCurrentComment}
}