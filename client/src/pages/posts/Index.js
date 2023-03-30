import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../services/postService';

function Index({ user }) {
  const [workout, setWorkOut] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getAllPosts();
      setWorkOut(data);
    }
    loadData();
  }, []);
  console.log(workout);
  return (
    <div>
      <h1>Index View</h1>
      <div id="posts">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                  <td>
                    <form
                      action={`/flights/${workout._id}/destinations/${x._id}?_method=DELETE`}
                      method="POST"
                    >
                      <button className="btn btn-outline-danger mx-5">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {user && (
          <Link to="/posts/new">
            <button>NEW POST</button>
          </Link>
        )}
        </div>
      </div>
    </div>
  );
}

export default Index;
