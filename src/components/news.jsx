import React,{useState,useEffect} from 'react';
import '../static/css/news.css';
import {Link} from 'react-router-dom';
import Navbar from './navbar';
function News(){
    const[news,setNews] = useState([])
    useEffect(() => {
        function fetchNewsArticles(){
            const xhr = new XMLHttpRequest();
            xhr.open('GET',"http://daemon.abbhutto.com/api/news",true);
            xhr.responseType='json';
            xhr.addEventListener('load',() => {
                if(xhr.status === 200){
                    setNews(xhr.response.result);
                }
            })
            xhr.send();
        }
        fetchNewsArticles()
    },[])

    function descriptionShortener(value, n) {
        return value?.length > n ? value.substr(0, n - 1) + "..." : value;
    }

    return(
        <React.Fragment>
            <Navbar/>
            <div className="top-news-headlines">
                TOP NEWS HEADLINES
            </div>
            <div className="news-wrapper">
                {news && 
                <React.Fragment>
                    {news.map(item => (
                    <Link to={item.original_link}>
                    <div className="news-block">
                        <div className="news-poster">
                            <img src={item.poster} alt="news-poster" className="news-image" />
                        </div>
                        <div className="news-content">
                            <div className="news-headline">
                                {item.title}
                            </div>
                            <div className="news-description">
                                {descriptionShortener(item.description,200)}
                            </div>
                        </div>
                    </div>
                    </Link>        
                    ))}
                </React.Fragment>
                }
            </div>
        </React.Fragment>
    );
}

export default News;