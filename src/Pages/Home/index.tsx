import React from 'react'
import { Footer, Hero, Popular, Subscribe, TopHeadlines } from '../../Components'

export const Home = () => {
    return (
        <>
            <Hero />
            <TopHeadlines />
            <Popular />
            <Subscribe />
            <Footer />
        </>
    )
}
