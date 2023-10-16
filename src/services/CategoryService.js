import { axiosConfig } from "../configuration/axiosConfig"

const getCategory = () => {
    return axiosConfig.get('categories', {
        headers: { 'Content-Type': 'application/json' }
    })
}

const createCategory = (data = {}) => {
    return axiosConfig.post('categories', data, {
        headers: { 'Content-Type': 'application/json' }
    })
}

const editCategory = (categoryId, data) => {
    return axiosConfig.put(`categories/${categoryId}`, data, {
        headers: { 'Content-Type': 'application/json' }
    })
}

const deleteCategory = (categoryId) => {
    return axiosConfig.delete(`categories/${categoryId}`, {}, {
        headers: { 'Content-Type': 'application/json' }
    })
}

export { getCategory, createCategory, editCategory, deleteCategory }