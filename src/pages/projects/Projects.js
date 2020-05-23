import React, { useState } from 'react'

import Showcase from './Showcase'
import ProjectSelector from './ProjectSelector'
import ProjectGrid from './ProjectGrid'
import Footer from '../../components/Footer/Footer'

export default function Projects() {
    const [selected, setSelected] = useState(0)
    return (
        <div>
            <Showcase />
            <ProjectSelector selected={selected} setSelected={setSelected} />
            <ProjectGrid selected={selected} />
            <Footer />
        </div>

    )
}
