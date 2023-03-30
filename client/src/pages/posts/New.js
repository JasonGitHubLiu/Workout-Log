import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";

function New({ user }) {

    let exerciseRef = useRef()
    let weightRef = useRef()
    let sxrRef = useRef()
    let rpeRef = useRef()
    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let post = {
            exercise: exerciseRef.current.value,
            weight: weightRef.current.value,
            sxr: sxrRef.current.value,
            rpe: rpeRef.current.value,
            user
        }
        await createPost(post)
        navigate('/posts')
    }

    return ( 
        <div>
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ee">Exercise:</label><br />
                <input type="text" id="ee" ref={exerciseRef} /><br /><br />

                <label htmlFor="wt">Weight:</label><br />
                <textarea id="wt" cols="30" rows="10" ref={weightRef} /><br /><br />

                <label htmlFor="sr">Sets x Reps:</label><br />
                <textarea id="sr" cols="30" rows="10" ref={sxrRef} /><br /><br />

                <label htmlFor="rpe">RPE:</label><br />
                <textarea id="rpe" cols="30" rows="10" ref={rpeRef} /><br /><br />

                <button>Submit</button>
                <a href="/posts">
                <button className="btn btn-outline-light mx-3">Back</button>
              </a>
            </form>
        </div>
     );
}

export default New;