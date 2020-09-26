import React from 'react'
import Content from '../components/Content/Content'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'

const container = () => {
    return (
        <div className="Container">
            <Header />
            <Navigation />
            <Content />
        </div>
    )
}

export default container
