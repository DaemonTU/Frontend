import React,{useEffect,useState} from 'react';

function Team(){
    const[team,setTeam] = useState([]);
    useEffect(() =>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',"127.0.0.1:5000/api/team",true);
        xhr.responseType='json';
        xhr.load(() => {
            if(xhr.status === 200){
                setTeam(xhr.response.result);
            }
        })
        xhr.send();
    },[])

    return(
        <React.Fragment>
            {team &&
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-3xl font-medium title-font mb-4 headline">
                            MEET OUR TEAM
                        </h1>
                        <div className="headline-underline"></div>
                    </div>
                    {team.map(member => (
                        <div class="col-xs-12 col-md-4 cards-content">
                            <div class="h-full flex flex-col items-center text-center cards col-xs-10">
                                <img alt="team" 
                                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 team-member" 
                                src="../../static/assets/compress/rd-min.png" />
                                <div class="w-full card-subsection">
                                    <p class="mb-4 text-2xl member-name">{member.name}</p>
                                    <h3 class="mt-3 mb-3 member-role">{member.about}</h3>
                                    <div class="col-xs-12 card-footer">
                                        <div class="col-xs-10 card-footer-content-wrapper">
                                            <ul class="col-xs-12 card-footer-content-inner">
                                                <li class="card-footer-item">
                                                    <a href={`${member.github}`}
                                                    class="card-footer-link" target="_blank">
                                                        <i class="fab fa-github-f">
                                                        </i>
                                                    </a>
                                                </li>
                                                <li class="card-footer-item">
                                                    <a href={`${member.linkedin}`} 
                                                    class="card-footer-link" target="_blank">
                                                        <i class="fab fa-linkedin-in">
                                                        </i>
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
            </section>
        }
        </React.Fragment>
    );
}

export default Team;