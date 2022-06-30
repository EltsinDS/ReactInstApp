import React, {useContext, useState} from "react";
import {RenderContext} from "../App";
import {useHttp} from "../hook/http.hook";

export default function Authorization({userLevel}){
    const {loading, request} = useHttp()

    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () =>{
        try {
            await request( 'POST', {...form})
        } catch (e) {}
    }

    const loginHandler = async () =>{
        try {
            const data = await request( 'GET', {...form})
            console.log(data)
            userLevel(data.level)
        } catch (e) {}
    }

    const cards = useContext(RenderContext)
    const auth = cards.find(card => (card.rendered === true && card.name === 'authorization'))
    if (!auth) return null

    return(
        <div className="container">
            <div className="d-auth">
                <div className="row mb-3 ">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input onChange={changeHandler} name="email" type="email" className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-8">
                        <input onChange={changeHandler} name="password" type="password" className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <button onClick={loginHandler}  type="submit" className="btn btn-outline-dark" disabled={loading}>Log in</button>
                    </div>
                    <div className="col-md-auto">
                        <button onClick={registerHandler} type="submit" className="btn btn-outline-dark" disabled={loading}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>

    )
}