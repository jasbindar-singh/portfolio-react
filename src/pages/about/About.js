import React from 'react'

import DataMap from '../../DataMap'
import Showcase from './Showcase'
import SkillsOverview from './SkillsOverview'
import FeaturedProject from './FeaturedProject'
import BlogPost from './BlogPost'
import Footer from '../../components/Footer/Footer'

export default function About() {
    return (
        <div style={{ position: 'relative' }}>
            <Showcase />
            <SkillsOverview />
            <FeaturedProject />
            <BlogPost />
            <Footer />
        </div>
    )
}
