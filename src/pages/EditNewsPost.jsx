import { useParams } from 'react-router-dom'

const EditNewsPost = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Edit news post</h1>
            <p>ID: {id}</p>
        </div>
    )
}

export {EditNewsPost}