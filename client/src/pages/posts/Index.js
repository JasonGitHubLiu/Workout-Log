import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, deletePost, getPost } from '../../services/postService';
import { useNavigate, useParams } from "react-router-dom"



function Index({ user }) {
  const [workout, setWorkOut] = useState([]);
  
  const navigate = useNavigate()
  

  useEffect(() => {
    async function loadData() {
      const data = await getAllPosts();
      setWorkOut(data);
    }
    loadData();
  }, []);
  console.log(workout);

  let today = new Date(); // Get today's date and time

  let currentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    today.getHours() - 4,
    today.getMinutes(),
    today.getSeconds()
  );
  currentDate = currentDate.toISOString().slice(0, 16);
  console.log(currentDate);


  async function handleDeletePost() {
    await deletePost(posts._id)
    navigate('/posts')
}

  return (
    <div>
      <h1>Index View</h1>

      <div id="posts">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {user && (
            <Link to="/posts/new">
              <button>NEW POST</button>
            </Link>
          )}
          {/* <form action="/posts/clear?_method=DELETE" method="POST">
            <button className="btn btn-outline-danger">CLEAR</button>
          </form> */}
        </div>
        <br />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <table
            class="table table-primary table-striped text-center "
            style={{ width: '60vw' }}
          >
            <thead>
              <tr>
                <th scope="col">Exercise</th>
                <th scope="col">Weight</th>
                <th scope="col">Sets x Reps</th>
                <th scope="col">RPE</th>
                <th scope="col">Date</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {workout.map((x) => (
                <>
                  <tr>
                    <th scope="row">{x.exercise}</th>

                    <td>{x.weight}</td>
                    <td>{x.sxr}</td>
                    <td>{x.rpe}</td>
                    <td>{x.createdAt.slice(0,10)}</td>
                    <td>
                      <Link to={`/posts/${x._id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                    <td>
                      <form
                        action={`/posts/${x._id}?_method=DELETE`}
                        method="Delete"
                      >

                        <button className="btn btn-outline-danger mx-5" onClick={handleDeletePost}>Delete</button>
                      </form>

                      {/* <label for="arrival">
                        Choose a date/time for your flight:
                      </label>
                      <input
                        type="datetime-local"
                        id="arrival"
                        name="arrival"
                        value={currentDate}
                      ></input> */}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {user && (
            <Link to="/posts/new">
              <button>NEW POST</button>
            </Link>
          )}
          {/* <form action="/posts/clear?_method=DELETE" method="POST">
            <button className="btn btn-outline-danger">CLEAR</button>
          </form> */}
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Index;
