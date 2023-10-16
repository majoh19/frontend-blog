import React from 'react'

export default function ModalCategory({
    title, closeModal, handleChange, category, loadingSave, saveCategory
}) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">New {title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label"> Name </label>
                                <input type="text" className="form-control" id="recipient-name" name="nombre" onChange={handleChange} value={category?.name} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label"> Description </label>
                                <input type="text" className="form-control" id="recipient-name" name="nombre" onChange={handleChange} value={category?.description} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                        {loadingSave ? (
                            <button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                Saving...
                            </button>
                        ) : (
                            <button type="button" className="btn btn-primary" onClick={saveCategory} disabled={category?.name?.length === 0}>Save</button>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}