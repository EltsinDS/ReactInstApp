import React, {useContext, useState} from "react";
import {RenderContext} from "../App";

export default function UserSettings(){

    const cards = useContext(RenderContext)

    const renderCard = cards.find(card => (card.rendered === true && card.name === 'userSettings'))
    const auth = cards.find(card => (card.level === 1 && card.name === 'user'))


    const [profile, setProfile] = useState({
        name: 'Admin', surname: 'Admin', email: 'a@mail.ru', height: '175', chest: '88', waist: '58', hip: '92'
    })
    const [user, setUser] = useState({ name: 'Olga', surname: 'Kozyreva', email: 'b@mail.ru'})

    const [form, setForm] = useState({
        name: '', surname: '', email: '', height: '', chest: '', waist: '', hip: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const uploadHandler = () =>{
        if (auth) setProfile({...form})
        else setUser({...form})


        setForm({
            name: '', surname: '', email: '', height: '', chest: '', waist: '', hip: ''
        })

    }

    if (!renderCard) return null



    return(
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px"
                             src={ auth ? 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
                        : 'cFzRbDmq67pwJk15ngbCJMfsFjQ2TX9D6nJYEwK7mBv2npah1MR8x98VJa44eqwq1GXmiKfRfTKOakzlGOOzhods.jpg'}
                             alt="Something else"/>
                        <span className="font-weight-bold">{ auth ? profile.name : user.name}</span>
                        <span className="text-black-50">{auth ? profile.email : user.email}</span>
                        <span> </span>
                    </div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label className="labels">Name</label>
                                <input value={form.name} onChange={changeHandler} name="name" type="text" className="form-control" placeholder={auth ? profile.name : user.name} />
                            </div>
                            <div className="col-md-6">
                                <label className="labels">Surname</label>
                                <input value={form.surname} onChange={changeHandler} name="surname" type="text" className="form-control" placeholder={auth ? profile.surname : user.surname}/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <label className="labels">Email ID</label>
                                <input value={form.email} onChange={changeHandler} name="email" type="text" className="form-control" placeholder={auth ? profile.email : user.email} />
                            </div>

                        </div>

                        <div className="mt-5 text-center">
                            <button onClick={uploadHandler} className="btn btn-primary profile-button" type="button">Save Profile</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center experience">
                            <br/>
                        </div>
                        <br/>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label className="labels">Height</label>
                                <input value={form.height} onChange={changeHandler} name="height" type="text" className="form-control" placeholder={profile.height} />
                            </div>
                            <div className="col-md-6">
                                <label className="labels">Chest-girth</label>
                                <input value={form.chest} onChange={changeHandler} name="chest" type="text" className="form-control" placeholder={profile.chest}/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label className="labels">Waist circumference</label>
                                <input value={form.waist} onChange={changeHandler} name="waist" type="text" className="form-control" placeholder={profile.waist} />
                            </div>
                            <div className="col-md-6">
                                <label className="labels">Hip girth</label>
                                <input value={form.hip} onChange={changeHandler} name="hip" type="text" className="form-control" placeholder={profile.hip}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}