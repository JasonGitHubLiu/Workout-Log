export default function About() {
  return (
    <>
      <div className="about bg-dark-subtle text-black  text-center">
        <br />
        <br />

        <h1>
          Log your sets, weight, reps, and RPE for your exercises in order to push
          yourself each time you visit the gym. Watch your lifts increase
          showing weight for each rep and total weight for the set.
        </h1>
        <br />
        <br />
        <h2>RPE= Rate of Percieved Exertion</h2>
        <br />
        <h2>
          The RPE scale is used to measure the intensity of your exercise. The
          RPE scale runs from 0 – 10. The numbers below relate to phrases used
          to rate how easy or difficult you find an activity. For example, 0
          (nothing at all) would be how you feel when sitting in a chair; 10
          (very, very heavy) is how you feel at the end of an exercise stress
          test or after a very difficult activity.
        </h2>
          <br />
          <img className='rpe' src={require('../images/rpe.png')}></img>
          <br />
          <br />
      </div>
    </>
  );
}
