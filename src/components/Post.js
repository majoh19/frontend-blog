import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { createPost, getPost, editPost } from '../services/PostService'
import ModalPost from './ui/ModalPost'

export default function Post() {

  const title = 'Post'
  const [posts, setPosts] = useState([])
  const [query, setQuery] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [post, setPost] = useState({ _id:'', name: '' })
  const [loadingSave, setLoadingSave] = useState(false)
  const [id, setId] = useState('')

  const listPosts = async () => {
    try {
      setLoading(true)
      setError(false)
      const { data } = await getPost(query)
      console.log(data)
      setPosts(data)
      setTimeout(() => { setLoading(false) }, 500)
    } catch (e) {
      console.log(e)
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => { listPosts() }, [query])

  const changeSwitch = () => { setQuery(!query) }

  const handleChange = (e) => { setPost({ ...post, [e.target.name]: e.target.value }) }

  const savePost = async () => {
    try {
      setError(false)
      setLoadingSave(true)
      const response = await createPost(post)
      console.log(response)
      setPosts({ _id:'', name: '' })
      listPosts()
      setTimeout(() => { setLoadingSave(false) }, 500)
    } catch (e) {
      console.log(e)
      setError(true)
      setLoadingSave(false)
    }
  }

  const closeModal = () => { setPost({ _id:'', name: '' }) }

  const selectPost = (evt) => {
    evt.preventDefault()
    setId(evt.target.id)
    const post = posts.filter(post => post._id === evt.target.id)
    setPost({ ...post, ...post[0] })
  }

  const editPost = async () => {
    try {
      setError(false)
      setLoadingSave(true)
      const response = await editPost(id, post)
      console.log(response)
      setPost({ _id:'', name: '' })
      listPosts()
      setTimeout(() => { setLoadingSave(false) }, 500)
    } catch (e) {
      console.log(e)
      setError(true)
      setLoadingSave(false)
    }
  }

  return (
    <>
      <ModalPost title={title} closeModal={closeModal} handleChange={handleChange} name={post.name} loadingSave={loadingSave} savePost={savePost} />
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
                    <th scope='col'>Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Author</th>
                    <th scope="col">State</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, index) => (
                    <tr key={post._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{post.name}</td>
                      <td>{post.description}</td>
                      <td>{post.category.name}</td>
                      <td>{post.author.name}</td>
                      <td>{post.state}</td>
                      <td>
                        <button onClick={selectPost} type="button" className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" id={post._id}>Edit</button>
                      </td>
                    </tr>
                  )
                  )
                  }
                </tbody>

              </table>
            )
        }
      </div>
    </>
  )
}
