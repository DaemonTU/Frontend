import React from 'react';
import Navbar from './navbar';
import '../static/css/banner.css';
import bannerImage from '../static/assets/motherboard.png';
import {FaChevronRight} from 'react-icons/fa';
function Banner(){
    return(
        <React.Fragment>
        <Navbar />
        <div className="banner-wrapper">
            <div className="banner-left">
                <img  className="banner-image" alt="daemon-motherboard" src={bannerImage} />
            </div>
            <div className="banner-right">
                <div className="banner-content">
                    <div className="banner-title">
                        DAEMON
                    </div>
                    <div className="banner-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Repellendus commodi aut quo provclassNameent, neque voluptatem 
                        qui maiores nemo rerum amet laboriosam a corrupti eligendi 
                        voluptatibus, necessitatibus doloribus, quasi nisi magni!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Repellendus commodi aut quo provclassNameent, neque voluptatem 
                        qui maiores nemo rerum amet laboriosam a corrupti eligendi 
                        voluptatibus, necessitatibus doloribus, quasi nisi magni!
                    </div>
                    <div className="banner-buttons">
                        <FaChevronRight className="icon-1"/>
                        <FaChevronRight className="icon-2"/>
                        <FaChevronRight className="icon-3"/>
                    </div>
                    <div className="banner-social-links">

                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Banner;