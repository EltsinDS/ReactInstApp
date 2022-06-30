import React, {useState} from "react";

export default function SearchPanel({findLook}){
    const [form, setForm] = useState('')

     function submitHandler(event){
        event.preventDefault()
             findLook(form)
             setForm('')
     }

    return(
        <div className="d-search">
            <form onSubmit={submitHandler}>
                <div className="row mb-3 ">
                    <div className="col-md-10">
                        <input onChange={event => setForm(event.target.value)} value={form} type="text" className="form-control" id="inputEmail3"/>
                    </div>
                    <div className="col-md-auto">
                        <button type="submit" className="btn btn-outline-dark">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}