import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Finnik723/fake-api/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);

    return (
        <div>
            <h1>Our news</h1>
            <Link to="/news/new">Add new post</Link>
            {
                news.map(singleNews => (
                    <Link key={singleNews.id} to={`/news/${singleNews.id}`}>
                        <li>
                            {singleNews.title}
                        </li>
                    </Link>
                ))
            }
        </div>
    )
}

export {News}