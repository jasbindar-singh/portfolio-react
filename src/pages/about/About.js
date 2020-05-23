import React from 'react'

import DataMap from '../../DataMap'
import Showcase from './Showcase'
import SkillsOverview from './SkillsOverview'
import FeaturedProject from './FeaturedProject'
import BlogPost from './BlogPost'

export default function About() {
    return (
        <div>
            <Showcase />
            <SkillsOverview />
            <FeaturedProject />
            <BlogPost />
        </div>
    )
}
