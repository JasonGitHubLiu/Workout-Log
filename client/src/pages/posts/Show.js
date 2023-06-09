import { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { createCommentForPost, deleteCommentFromPost } from "../../services/commentService"
import { deletePost, getPost } from "../../services/postService"

function Show({ user }) {

    const [post, setPost] = useState({})

    const navigate = useNavigate()
    const params = useParams()
    const bodyRef = useRef()
    const detailsRef = useRef()

    useEffect(() => {
        async function loadData() {
            const data = await getPost(params.id)
            if (!data) navigate('/posts')
            setPost(data)
        }
        loadData()
    }, [params.id])

    async function handleDeleteComment(comment) {
        await deleteCommentFromPost(comment._id, post._id)
        let updatedPost = { ...post }
        updatedPost.comments = updatedPost.comments.filter(c => c._id !== comment._id)
        setPost(updatedPost)
    }

    async function handleDeletePost() {
        await deletePost(post._id)
        navigate('/posts')
    }

    async function handleSubmit(e) {
        e.preventDefault()

        let comment = {
            body: bodyRef.current.value,
            user
        }

        const newComment = await createCommentForPost(comment, post._id)
        let updatedPost = { ...post }
        updatedPost.comments.push(newComment)
        setPost(updatedPost)
        bodyRef.current.value = ''
        detailsRef.current.open = false
    }

    return (
            <div>
                <br></br>
                <h1>Show View</h1>
                <div className="a-post">
                    <h3>Exercise: {post.exercise}</h3>
                    <h3>Weight: {post.weight}</h3>
                    <h3>Sets x Reps: {post.sxr}</h3>
                    <h3>RPE: {post.rpe}</h3>
                     <h5  className="postedby">Posted by {post.user} on {new Date(post.createdAt).toLocaleDateString()} at {new Date(post.createdAt).toLocaleTimeString()}</h5>
                    <div className='p-body'>{post.body}</div><br /><br />

                    {
                        post.comments?.length ?
                        <>
                            <div className="comments">Comments:</div>
                            <div>{post.comments.map((comment, i) => 
                                <div key={i} className="comm">
                                    <div className="commname">{comment.user}</div>
                                    <div>{comment.body}</div>
                                    {comment.user === user &&
                                        <>
                                            <button className="x" onClick={() => handleDeleteComment(comment)}>❌</button>
                                            <Link to={`/posts/${post._id}/comments/${comment._id}`}><span>📝</span></Link>
                                        </>
                                    }
                                </div>
                            )}</div>
                            <br/><br/>
                        </>
                        : ''
                    }
                    {user && 
                        <details ref={detailsRef}>
                            <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                            <form onSubmit={handleSubmit}>
                                <textarea ref={bodyRef} id="lc" cols="1" rows="1" />
                                <button>Comment</button>
                            </form>
                        </details>
                    }
                    
                    <div className="buttons">
                        {post.user === user &&
                            <>
                                <button onClick={handleDeletePost}>Delete</button>
                                <Link to={`/posts/${post._id}/edit`}>
                                    <button>Edit</button>
                                </Link>
                            </>
                        }
                        <Link to='/posts'>
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Show