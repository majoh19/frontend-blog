import React from 'react'

export default function ModalDelete(props) {
    const { title, closeModal, deleteData, loadingDelete } = props

    return (
        <div className="modal fade" id="exampleModalDelete" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete {title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete {title}?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Cancel</button>
                        {loadingDelete ? (
                            <button className="btn btn-danger" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                Deleting...
                            </button>
                        ) : (
                            <button type="button" className="btn btn-danger" onClick={deleteData}>Delete</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
