import React from 'react'

import Showcase from './Showcase'
import RecentPost from './RecentPost'
import PostGrid from './PostGrid'
import Footer from '../../components/Footer/Footer'

export default function Publications() {
    return (
        <div>
            <Showcase />
            <RecentPost />
            <PostGrid />
            <Footer />
        </div>
    )
}
