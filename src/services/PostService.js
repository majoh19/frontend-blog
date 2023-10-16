import { axiosConfig } from "../configuration/axiosConfig"

const getPost = () => {
    return axiosConfig.get('posts', {
        headers: { 'Content-Type': 'application/json' }
    })
}

const createPost = (data = {}) => {
    return axiosConfig.post('posts', data, {
        headers: { 'Content-Type': 'application/json' }
    })
}

const editPost = (postId, data) => {
    return axiosConfig.put(`posts/${postId}`, data, {
        headers: { 'Content-Type': 'application/json' }
    })
}

const deletePost = (postId) => {
    return axiosConfig.delete(`posts/${postId}`, {}, {
        headers: { 'Content-Type': 'application/json' }
    })
}

export { getPost, createPost, editPost, deletePost }