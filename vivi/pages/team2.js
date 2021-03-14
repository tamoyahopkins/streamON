import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamMemberCard2 from '../components/Team/TeamMemberCard2';
import Footer from '../components/_App/Footer';

const Team = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Meet Our Writers" 
                homePageUrl="/index2" 
                homePageText="Home" 
                activePageText="Writers" 
                imgClass="bg-21" 
            />    
            <TeamMemberCard2 />
            <Footer />
        </React.Fragment>
    )
}

export default Team;