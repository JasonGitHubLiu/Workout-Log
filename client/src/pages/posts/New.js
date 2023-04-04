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
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="ee">Exercise:</label> */}
          <br />
          <strong><label className='label' htmlFor="ee">Exercise:</label></strong>
          <select
            type="text"
            id="ee"
            ref={exerciseRef}
            class="form-select"
            aria-label="Default select example"
            // name="airport"
          >
            <option selected disabled>
              Select an Exercise
            </option> 
            <option value="----" disabled>
              ----
            </option>
            <option value="Squat">Squat</option>
            <option value="Bench">Bench</option>
            <option value="Deadlift">Deadlift</option>
            <option value="Pause Squat">Pause Squat</option>
            <option value="Pause Bench">Pause Bench</option>
            <option value="Pause Deadlift">Pause Deadlift</option>
            <option value="----" disabled>
              ----
            </option>
            <option value="Accessories" disabled>
              Accessories
            </option>
            <option value="----" disabled>
              ----
            </option>
            <option value="Curls">Curls</option>
            <option value="Leg Extension">Leg Extension</option>
            <option value="Goblet Squats">Goblet Squats</option>
            <option value="Hamstring Curls">Hamstring Curls</option>
            <option value="Plank">Plank</option>
            <option value="Side Plank">Side Plank</option>
            <option value="----" disabled>
              ----
            </option>
            <option value="Cardio" disabled>
              Cardio
            </option>
            <option value="----" disabled>
              ----
            </option>
            <option value="Bike">Bike</option>
            <option value="Treadmill">Treadmill</option>
            <option value="Elliptical">Elliptical</option>
          </select>
          <br />

          <strong><label className='label' htmlFor="wt">Weight:</label></strong>

          <input
            placeholder="Enter Weight lbs"
            id="wt"
            cols="30"
            rows="10"
            ref={weightRef}
          />
          <br />

           <strong><label className='label' htmlFor="sr">Sets x Reps:</label></strong>

          <input
            placeholder="Sets x Reps"
            id="sr"
            cols="30"
            rows="10"
            ref={sxrRef}
          />
          <br />

           <strong><label className='label' htmlFor="rpe">RPE:</label></strong>
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
            <option selected disabled>RPE</option>
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

          <Link to="/posts">
            <button className="btn btn-outline-light">Back</button>
          </Link>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default New;
