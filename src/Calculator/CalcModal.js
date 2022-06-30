import React from "react";

export default function CalcModal(){
    return (
        <div className="col-md-auto">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Calculate
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        </div>
                        <div className="modal-body">
                            <p>Your size - М(44)</p>
                            <p>Your pants size - S(36)</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}