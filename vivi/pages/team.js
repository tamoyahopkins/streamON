import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamMemberCard from '../components/Team/TeamMemberCard';
import Footer from '../components/_App/Footer';

const Team = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Meet our Actors" 
                homePageUrl="/index2" 
                homePageText="Home" 
                activePageText="Actors" 
                imgClass="bg-21" 
            />    
            <TeamMemberCard />
            <Footer />
        </React.Fragment>
    )
}

export default Team;