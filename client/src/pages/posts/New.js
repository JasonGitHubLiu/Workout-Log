import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../services/postService';
import { Link } from 'react-router-dom';

function New({ user }) {
  let exerciseRef = useRef();
  let weightRef = useRef();
  let sxrRef = useRef();
  let rpeRef = useRef();
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let post = {
      exercise: exerciseRef.current.value,
      weight: weightRef.current.value,
      sxr: sxrRef.current.value,
      rpe: rpeRef.current.value,
      user,
    };
    await createPost(post);
    navigate('/posts');
  }

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="ee">Exercise:</label> */}
        <br />

        <select
          type="text"
          id="ee"
          ref={exerciseRef}
          class="form-select"
          aria-label="Default select example"
          // name="airport"
          
        >
          <option selected disabled>Select a Main Exercise</option>
          <option value="----" disabled>----</option>
          <option value="Squat">Squat</option>
          <option value="Bench">Bench</option>
          <option value="Deadlift">Deadlift</option>
          <option value="----" disabled>----</option>
          <option value="Accessories" disabled>Accessories</option>
          <option value="----" disabled>----</option>
          <option value="Curls">Curls</option>
          <option value="Leg Extension">Leg Extension</option>
          <option value="Hamstring Curls">Hamstring Curls</option>
          <option value="Goblet Squats">Goblet Squats</option>

        </select>
        <br />
        <br />

        <label htmlFor="wt">Weight:</label>

        <input id="wt" cols="30" rows="10" ref={weightRef} />
        <br />
        <br />

        <label htmlFor="sr">Sets x Reps:</label>

        <input id="sr" cols="30" rows="10" ref={sxrRef} />
        <br />
        <br />

        <label htmlFor="rpe">RPE:</label>
        {/* <input id="rpe" cols="30" rows="10" ref={rpeRef} /> */}
        <select
          type="text"
          id="rpe"
          ref={rpeRef}
          class="form-select"
          aria-label="Default select example"
          name="airport"
        >
          {/* <option selected>Select Exercise</option> */}
          <option value="1">@1</option>
          <option value="2">@2</option>
          <option value="@3">@3</option>
          <option value="@4">@4</option>
          <option value="@5">@5</option>
          <option value="@6">@6</option>
          <option value="@7">@7</option>
          <option value="@8">@8</option>
          <option value="@9">@9</option>
          <option value="@10">@10</option>
        </select>
        <br />
        <br />

        <Link to="/posts" style= {{width: '10px'}}>
          <button className="btn btn-outline-light">Back</button>
        </Link>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default New;
