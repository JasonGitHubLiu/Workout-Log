import { useEffect, useState, Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, deletePost } from '../../services/postService';

function Index({ user }) {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const editButtonRef = useRef(null);
  const deleteButtonRef = useRef(null);
  const [showButtons, setShowButtons] = useState(true);


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllPosts();
        setWorkouts(data);
      } catch (error) {
        console.error('Error fetching workout data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  async function handleDeletePost(id) {
    try {
      await deletePost(id);
      setWorkouts((prevWorkouts) =>
        prevWorkouts.filter((exercise) => exercise._id !== id)
      );
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (editButtonRef.current) {
        editButtonRef.current.style.display = isMobile ? 'none' : 'block';
      }
      if (deleteButtonRef.current) {
        deleteButtonRef.current.style.display = isMobile ? 'none' : 'block';
      }
    };
    

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Index View</h1>

      <div id="posts">
        {user && (
          <div className="button-container">
            <Link to="/posts/new">
              <button>NEW POST</button>
            </Link>
          </div>
        )}

        <div className="table-container">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <table className="table">
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
              <tbody>
  {workouts.map((workout, index) => (
    <Fragment key={workout._id}>
      <tr className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
        <th scope="row">{workout.exercise}</th>
        <td>{workout.weight}</td>
        <td>{workout.sxr}</td>
        <td>{workout.rpe}</td>
        <td>{workout.createdAt.slice(0, 10)}</td>
        <td>
          {showButtons && (
            <Link to={`/posts/${workout._id}`}>
              <button>Edit</button>
            </Link>
          )}
        </td>
        <td>
          {showButtons && (
            <button
              className="btn btn-outline-danger"
              onClick={() => handleDeletePost(workout._id)}
            >
              Delete
            </button>
          )}
        </td>
      </tr>
    </Fragment>
  ))}
</tbody>

            </table>
          )}
        </div>

        {user && (
          <div className="
button-container">
            <Link to="/posts/new">
              <button>NEW POST</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
