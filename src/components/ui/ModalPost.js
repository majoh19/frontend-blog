import React from 'react'

export default function ModalPost({
    title, closeModal, handleChange, post, loadingSave, savePost
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
                                <input type="text" className="form-control" id="recipient-name" name="serial" onChange={handleChange} value={post?.name} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label"> Description </label>
                                <input type="text" className="form-control" id="recipient-name" name="modelo" onChange={handleChange} value={post?.description} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label"> Category </label>
                                <input type="text" className="form-control" id="recipient-name" name="descripcion" onChange={handleChange} value={post?.category?.name} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label"> Author </label>
                                <input type="text" className="form-control" id="recipient-name" name="foto" onChange={handleChange} value={post?.author?.name} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label"> State </label>
                                <input type="text" className="form-control" id="recipient-name" name="color" onChange={handleChange} value={post?.state} />
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
                            <button type="button" className="btn btn-primary" onClick={savePost} disabled={post?.name?.length === 0}>Save</button>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}