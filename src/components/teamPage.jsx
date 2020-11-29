import React,{useEffect,useState} from 'react';
import '../static/css/teamPage.css';
import Particles from 'react-particles-js';
import {FaGithub, FaLinkedinIn, FaEnvelope} from 'react-icons/fa';
import {GoTools} from "react-icons/go";
function Team(){
    const[team,setTeam] = useState([]);
    useEffect(() =>{
        function callTeamApi(){
            const xhr = new XMLHttpRequest();
            xhr.open('GET',"http://127.0.0.1:5000/api/team",true);
            xhr.responseType = 'json';
            xhr.addEventListener('load',() => {
                if(xhr.status === 200){
                    setTeam(xhr.response.result);
                }
            });
            xhr.send();
        }
        callTeamApi();
    },[])

    return(
        <React.Fragment>
            <div id="particles-js">
                <Particles 
                    params={{ 
                    particles: { 
                        number: { 
                        value: 80, 
                        density: { 
                            enable: true, 
                            value_area: 1000, 
                        } 
                        }, 
                        "shape": {
                            "type": "circle",
                            "stroke": {
                              "width": 4,
                              "color": "#01ff01",
                            }
                        },
                        "line_linked": {
                            "color": "#ffffff",
                            "opacity": 0,
                          },
                    }, 
                    }} 
                /> 
            </div>
            {team &&
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-3xl font-medium title-font mb-4 headline">
                            <span className="heading-section-a">MEET</span><br/>
                            <span className="heading-section-b">OUR </span> 
                            <span className="heading-section-c">TEAM</span>
                        </h1>
                    </div>
                    <div className="justify-evenly cards-outer-wrapper">
                    {team.map(member => (
                        <div className="cards-content flex flex-row justify-center">
                            <div className="bottom-layer">
                                <div className="bottom-block-inner">
                                    <FaEnvelope className="dev-icon" style={{fill: '#01ff01'}}/> {member.email}
                                </div>
                                <div className="bottom-block-inner">
                                    <GoTools className="dev-icon" style={{fill: '#01ff01'}} /> {member.dept}
                                </div>
                            </div>
                            <div className="h-full flex flex-col items-center mx-auto text-center cards">
                                <div className="rank-tag">777</div>
                                <img alt="team" 
                                className="flex-shrink-0 rounded-lg mb-4 team-member" 
                                src={member.avatar} />
                                <div className="w-full card-subsection">
                                    <p className="mb-4 text-2xl member-name">{member.name}</p>
                                    <div className="w-3/4 mt-3 mb-3 mx-auto member-about">{member.about}</div>
                                    <div className="col-xs-12 card-footer">
                                        <div className="col-xs-12 card-footer-content-wrapper">
                                            <ul className="col-xs-12 card-footer-content-inner">
                                                <li className="card-footer-item">
                                                    <a href={`${member.github}`}
                                                    rel="noreferrer"
                                                    className="card-footer-link" target="_blank">
                                                        <FaGithub className="dev-icons" />
                                                    </a>
                                                </li>
                                                <li className="card-footer-item">
                                                    <a href={`${member.linkedin}`} 
                                                    rel="noreferrer"
                                                    className="card-footer-link" target="_blank">
                                                        <FaLinkedinIn className="dev-icons" />
                                                    </a>
                                                </li>                                       
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        }
        </React.Fragment>
    );
}

export default Team;