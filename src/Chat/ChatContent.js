import React, {useState} from "react";
import ChatMassage from "./ChatMassage";

export default function ChatContent(){

    const [message, setMessage] = useState([
        {id: 0, message: 'Hello Sonya'}
    ])
    console.log(message)
    const [form, setForm] = useState({
        id: '', message: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const uploadHandler = () =>{
        const newMessage = message
        const messageID = newMessage.length
        newMessage.push({...form, id: messageID})
        setMessage(newMessage)
        setForm({id: '', message: ''})
    }

    return (
        <div className='chat'>
            <div className='chat-messages'>
                <div className="chat-message-left">
                    <p>Hello Olya</p>
                </div>
                {
                    message.map(str =>{
                        return <ChatMassage str={str.message} key={str.id}/>
                    })
                }
            </div>

            <div className='chat-input'>
                    <input  value={form.message} onChange={changeHandler}  name="message" type='text' id='message-text' className='chat-form-input' placeholder='Введите сообщение' />
                    <input onClick={uploadHandler} type='submit' className='chat-form-submit' value='Send' />
            </div>
        </div>
    )
}