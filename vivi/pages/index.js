import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/_App/Navbar'
import HeroSlider from '../components/DefaultHome/HeroSlider'
import About from '../components/DefaultHome/About'
import VideoCreated from '../components/DefaultHome/VideoCreated'
import WhatWeDo from '../components/DefaultHome/WhatWeDo'
import Testimonials from '../components/Common/Testimonials'
import AwardWinningMovies from '../components/Common/AwardWinningMovies'
import GetInTouch from '../components/Common/GetInTouch'
import UpcomingMovies from '../components/DefaultHome/UpcomingMovies'
import ExclusiveShop from '../components/DefaultHome/ExclusiveShop'
import TeamStyleOne from '../components/Common/TeamStyleOne'
import LatestNews from '../components/DefaultHome/LatestNews'
import Partners from '../components/Common/Partners'
import Footer from '../components/_App/Footer'

const Index = () => {
    const products = useSelector((state) => state.products)
    return (
        <React.Fragment>
            <Navbar />
            <HeroSlider />
            <About />
            <VideoCreated />
            <WhatWeDo />
            <Testimonials />
            <AwardWinningMovies />
            <GetInTouch />
            <UpcomingMovies />
            <ExclusiveShop products={products.slice(0, 4)} />
            <TeamStyleOne />
            <Partners />
            <LatestNews /> 
            <Footer />
        </React.Fragment>
    )
}

export default Index;