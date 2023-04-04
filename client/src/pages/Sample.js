import { useState } from 'react';

export default function Sample() {
  let [show, setShow] = useState(false);
  return (
    <>
      <div>
        <br />
        <button className="w12" onClick={() => setShow(true)}>
          Week 1 & 2
        </button>
        {/* <div className="bg-white text-black opacity-50 text-center">
          <h1>Week 1 & 2 </h1>
        </div> */}
          {/* week 1 & 2 */}
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOneTwo"
                aria-expanded="true"
                aria-controls="collapseOneTwo"
              >
                Week 1 & 2
              </button>
            </h2>
            <div
              id="collapseOneTwo"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body bg-dark text-white text-center">
                <div className="text-danger">
                  <h2>Day 1 (Monday)</h2>
                </div>
                <h3>Pause Squat: 4x5 @6</h3>
                <h3>Competition Bench: 2x4 @6; 2x6 @7</h3>
                <div className="text-warning">
                  <h5>Incline Dumbbell Press: 3x10</h5>
                  <h5>Pull Down: 3x10</h5>
                  <h5>Side Plank: 3x30 seconds</h5>
                </div>
                <br />
                <br />

                <div className="text-danger">
                  <h2>Day 2 (Tuesday)</h2>
                </div>
                <h3>Pause Deadlift: 3x5 @6</h3>
                <h3>Competition Deadlift: 2x7 @6</h3>
                <div className="text-warning">
                  <h5>Plank: 3x45 seconds</h5>
                  <h5>Row: 4x10</h5>
                </div>
                <br />
                <br />

                <div className="text-danger">
                  <h2>Day 3 (Wednesday)</h2>
                </div>
                <h3>Squat: 4x7 @6</h3>
                <div className="text-warning">
                  <h5>Goblet Squat: 3x12</h5>
                  <h5>Dumbbell/Kettlebell Split Squat: 3x10</h5>
                  <h5>Side Plank: 3x30 Seconds</h5>
                </div>
                <br />
                <br />

                <div className="text-danger">
                  <h2>Day 4 (Thursday)</h2>
                </div>
                <h3>Competition Bench: 2x8 @7</h3>
                <div className="text-warning">
                  <h5>Larsen Press: 2x8 @6</h5>
                  <h5>Dumbbell Romanian Deadlift: 3x10</h5>
                  <h5>Row: 3x10</h5>
                </div>
              </div>
            </div>
          </div>
          {/* week 3 */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Week 3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body  bg-dark text-white text-center">
                <div className="text-danger">
                  <h2>Day 1 (Monday)</h2>
                </div>
                <h3>Pause Squat: 4x5 @7</h3>
                <h3>Competition Bench: 2x4 @7; 2x6 @7</h3>
                <div className="text-warning">
                  <h5>Incline Dumbbell Press: 3x10</h5>
                  <h5>Pull Down: 3x10</h5>
                  <h5>Side Plank: 3x30 seconds</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 2 (Tuesday)</h2>
                </div>
                <h3>Pause Deadlift: 3x5 @6</h3>
                <h3>Competition Deadlift: 2x7 @7</h3>
                <div className="text-warning">
                  <h5>Plank: 3x45 seconds</h5>
                  <h5>Row: 4x10</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 3 (Wednesday)</h2>
                </div>
                <h3>Squat: 4x7 @7</h3>
                <div className="text-warning">
                  <h5>Goblet Squat: 3x12</h5>
                  <h5>Dumbbell/Kettlebell Split Squat: 3x10</h5>
                  <h5>Side Plank: 3x30 Seconds</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 4 (Thursday)</h2>
                </div>
                <h3>Competition Bench: 2x7 @7</h3>
                <div className="text-warning">
                  <h5>Larsen Press: 2x8 @6</h5>
                  <h5>Dumbbell Romanian Deadlift: 3x10</h5>
                  <h5>Row: 3x10</h5>
                </div>{' '}
              </div>
            </div>
          </div>
          {/* week 4 */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Week 4
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body  bg-dark text-white text-center">
                <div className="text-danger">
                  <h2>Day 1 (Monday)</h2>
                </div>
                <h3>Pause Squat: 4x5 @7</h3>
                <h3>Competition Bench: 2x4 @7 @8; 2x6 @7</h3>
                <div className="text-warning">
                  <h5>Incline Dumbbell Press: 3x10</h5>
                  <h5>Pull Down: 3x10</h5>
                  <h5>Side Plank: 3x30 seconds</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 2 (Tuesday)</h2>
                </div>
                <h3>Pause Deadlift: 2x4 @7</h3>
                <h3>Competition Deadlift: 3x7 @7</h3>
                <div className="text-warning">
                  <h5>Plank: 3x45 seconds</h5>
                  <h5>Row: 4x10</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 3 (Wednesday)</h2>
                </div>
                <h3>Squat: 4x7 @7</h3>
                <div className="text-warning">
                  <h5>Goblet Squat: 3x12</h5>
                  <h5>Dumbbell/Kettlebell Split Squat: 3x10</h5>
                  <h5>Side Plank: 3x30 Seconds</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 4 (Thursday)</h2>
                </div>
                <h3>Competition Bench: 2x7 @7</h3>
                <div className="text-warning">
                  <h5>Larsen Press: 2x8 @6</h5>
                  <h5>Dumbbell Romanian Deadlift: 3x10</h5>
                  <h5>Row: 3x10</h5>
                </div>{' '}
              </div>
            </div>
          </div>
          {/* week 5 */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Week 5
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body  bg-dark text-white text-center">
                <div className="text-danger">
                  <h2>Day 1 (Monday)</h2>
                </div>
                <h3>Pause Squat: 4x5 @7</h3>
                <h3>Competition Bench: 2x3 @7 @7.5/8; 2x6 @7</h3>
                <div className="text-warning">
                  <h5>Incline Dumbbell Press: 3x10</h5>
                  <h5>Pull Down: 3x10</h5>
                  <h5>Side Plank: 3x30 seconds</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 2 (Tuesday)</h2>
                </div>
                <h3>Pause Deadlift: 2x3 @7 @8</h3>
                <h3>Competition Deadlift: 3x7 @7</h3>
                <div className="text-warning">
                  <h5>Plank: 3x45 seconds</h5>
                  <h5>Row: 4x10</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 3 (Wednesday)</h2>
                </div>
                <h3>Squat: 4x7 @7</h3>
                <div className="text-warning">
                  <h5>Goblet Squat: 3x12</h5>
                  <h5>Dumbbell/Kettlebell Split Squat: 3x10</h5>
                  <h5>Side Plank: 3x30 Seconds</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 4 (Thursday)</h2>
                </div>
                <h3>Competition Bench: 2x6 @7</h3>
                <div className="text-warning">
                  <h5>Larsen Press: 2x8 @7</h5>
                  <h5>Dumbbell Romanian Deadlift: 3x10</h5>
                  <h5>Row: 3x10</h5>
                </div>{' '}
              </div>
            </div>
          </div>
          {/* week 6 */}
          <div class="accordion-item">
            <h2 class="accordion-header ">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Week 6
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body  bg-dark text-white text-center">
                <div className="text-danger">
                  <h2>Day 1 (Monday)</h2>
                </div>
                <h3>Pause Squat: 4x5 @7 @8 @8 @7</h3>
                <h3>Competition Bench: 2x3 @8 @9; 2x6 @7</h3>
                <div className="text-warning">
                  <h5>Incline Dumbbell Press: 3x10</h5>
                  <h5>Pull Down: 3x10</h5>
                  <h5>Side Plank: 3x30 seconds</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 2 (Tuesday)</h2>
                </div>
                <h3>Pause Deadlift: 2x2 @7 @8</h3>
                <h3>Competition Deadlift: 3x7 @7</h3>
                <div className="text-warning">
                  <h5>Plank: 3x45 seconds</h5>
                  <h5>Row: 4x10</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 3 (Wednesday)</h2>
                </div>
                <h3>Squat: 4x7 @7</h3>
                <div className="text-warning">
                  <h5>Goblet Squat: 3x12</h5>
                  <h5>Dumbbell/Kettlebell Split Squat: 3x10</h5>
                  <h5>Side Plank: 3x30 Seconds</h5>
                </div>
                <br />
                <br />
                <div className="text-danger">
                  <h2>Day 4 (Thursday)</h2>
                </div>
                <h3>Competition Bench: 2x6 @7</h3>
                <div className="text-warning">
                  <h5>Larsen Press: 2x8 @7</h5>
                  <h5>Dumbbell Romanian Deadlift: 3x10</h5>
                  <h5>Row: 3x10</h5>
                </div>{' '}
              </div>
            </div>
          </div>
        </div>
{/* 
        <br />
        <div className="text-danger">
          <h2>Day 1 (Monday)</h2>
        </div>
        <h3>Pause Squat: 4x5 @6</h3>
        <h3>Competition Bench: 2x4 @6; 2x6 @7</h3>
        <div className="text-warning">
          <h5>Incline Dumbbell Press: 3x10</h5>
          <h5>Pull Down: 3x10</h5>
          <h5>Side Plank: 3x30 seconds</h5>
        </div>
        <br />
        <br />

        <div className="text-danger">
          <h2>Day 2 (Tuesday)</h2>
        </div>
        <h3>Pause Deadlift: 3x5 @6</h3>
        <h3>Competition Deadlift: 2x7 @6</h3>
        <div className="text-warning">
          <h5>Plank: 3x45 seconds</h5>
          <h5>Row: 4x10</h5>
        </div>
        <br />
        <br />

        <div className="text-danger">
          <h2>Day 3 (Wednesday)</h2>
        </div>
        <h3>Squat: 4x7 @6</h3>
        <div className="text-warning">
          <h5>Goblet Squat: 3x12</h5>
          <h5>Dumbbell/Kettlebell Split Squat: 3x10</h5>
          <h5>Side Plank: 3x30 Seconds</h5>
        </div>
        <br />
        <br />

        <div className="text-danger">
          <h2>Day 4 (Thursday)</h2>
        </div>
        <h3>Competition Bench: 2x8 @7</h3>
        <div className="text-warning">
          <h5>Larsen Press: 2x8 @6</h5>
          <h5>Dumbbell Romanian Deadlift: 3x10</h5>
          <h5>Row: 3x10</h5>
        </div>
        <br />
        <br /> */}
      </div>
    </>
  );
}
