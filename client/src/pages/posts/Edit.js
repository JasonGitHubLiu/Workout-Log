import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getPost, updatePost } from '../../services/postService'

function Edit() {

    const [post, setPost] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    const exerciseRef = useRef()
    const weightRef = useRef()
    const sxrRef = useRef()
    const rpeRef = useRef()

    useEffect(() => {
        getPost(params.id).then(data => setPost(data))
    }, [params.id])

    async function handleSubmit(e) {
        e.preventDefault()
        let updatedPost = {
            exercise: exerciseRef.current.value,
            weight: weightRef.current.value,
            sxr: sxrRef.current.value,
            rpe: rpeRef.current.value,
        }
        await updatePost(post._id, updatedPost)
        navigate(`/posts/${post._id}`)
    }
    console.log(post)
    return ( 
        <div>
            <h1>Edit Post</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="ee">Exercise:</label>
                    <input type="text" id="ee" ref={exerciseRef} defaultValue={post.exercise} />

                    <label htmlFor="clr">Weight:</label>
                    <input ref={weightRef} id="clr" cols="30" rows="10" defaultValue={post.weight} />
                    
                    <label htmlFor="sxr">Sets x Reps:</label>
                    <input id="sxr" ref={sxrRef} defaultValue={post.sxr} />

                    <label htmlFor="rpe">RPE:</label>
                    <input ref={rpeRef} id="rpe" cols="30" rows="10" defaultValue={post.rpe} />

                    <button>Submit</button>
                </form>
                <Link to={`/posts/${post._id}`}>
                    <button>Back</button>
                </Link>
                
            </div>
        </div>
    );
}

export default Edit;