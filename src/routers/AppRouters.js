import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
import NotFound from '../components/ui/NotFound'
import Category from '../components/Category'
import Post from '../components/Post'

export default function AppRouters() {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Post />} />
                    <Route path='/categories' element={<Category />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}