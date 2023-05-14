import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const SingleNews = () => {
    const {id} = useParams();
    const [entity, setNews] = useState(null);
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Finnik723/fake-api/news/${id}`)
            .then(res => res.json())
            .then(data => setNews(data))
    }, [id]);

    return (
        <div>
            {entity && (
                <>
                    <h1>{entity.title}</h1>
                    <p>{entity.content}</p>
                    <Link to={`/news/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    )
}

export {SingleNews}