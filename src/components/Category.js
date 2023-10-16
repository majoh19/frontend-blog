import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { createCategory, getCategory, editCategory } from '../services/CategoryService'
import ModalCategory from './ui/ModalCategory'

export default function Category() {

    const title = 'Category'
    const [categories, setCategories] = useState([])
    const [query, setQuery] = useState(true)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [category, setCategory] = useState({ name: '' })
    const [loadingSave, setLoadingSave] = useState(false)
    const [id, setId] = useState('')

    const listCategories = async () => {
        try {
            setLoading(true)
            setError(false)
            const { data } = await getCategory(query)
            console.log(data)
            setCategories(data)
            setTimeout(() => {
                setLoading(false)
            }, 500)
        } catch (e) {
            console.log(e)
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => { listCategories() }, [query])

    const changeSwitch = () => { setQuery(!query) }

    const handleChange = (e) => { setCategory({ ...category, [e.target.name]: e.target.value }) }

    const saveCategory = async () => {
        try {
            setError(false)
            setLoadingSave(true)
            const response = await createCategory(category)
            console.log(response)
            setCategory({ name: '' })
            listCategories()
            setTimeout(() => {
                setLoadingSave(false)
            }, 500)
        } catch (e) {
            console.log(e)
            setError(true)
            setLoadingSave(false)
        }
    }

    const closeModal = () => {
        setCategory({ name: '' })
        if (id) setId('')
    }

    const selectCategory = (evt) => {
        evt.preventDefault()
        setId(evt.target.id)
        const category = categories.filter(category => category._id === evt.target.id)
        setCategory({ ...category[0] })
    }

    const editCategory = async () => {
        try {
            setError(false)
            setLoadingSave(true)
            const response = await editCategory(id, category)
            console.log(response)
            setCategory({ name: '' })
            listCategories()
            setTimeout(() => { setLoadingSave(false) }, 500)
        } catch (e) {
            console.log(e)
            setError(true)
            setLoadingSave(false)
        }
    }

    return (
        <>
            <ModalCategory title={title} closeModal={closeModal} handleChange={handleChange} category={category} loadingSave={loadingSave} saveCategory={saveCategory} />
            <div className='form-check form-switch'>
                <input className='form-check-input' type='checkbox' role='switch' id='flexSwitchCheckChecked' checked={query} onChange={changeSwitch} />
                <label className='form-check-label' htmlFor='flexSwitchCheckChecked'>Activos</label>
            </div>
            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add</button>
            {
                error && (<div className="alert alert-danger" role="alert">An error occured</div>)
            }
            <div className='table-responsive'>
                {
                    loading
                        ? (
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )
                        : (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.map((category, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{category.name}</td>
                                                    <td>{category.description}</td>
                                                    <td>{dayjs(category.creationDate).format('DD/MM/YYYY')}</td>
                                                    <td>{dayjs(category.updateDate).format('DD/MM/YYYY')}</td>
                                                    <td>
                                                        <button onClick={selectCategory} type="button" className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" id={categories._id}>Edit</button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        )
                }
            </div>
        </>
    )
}