export default function YourForm() {
  return (
    <div>
      <h4>Student Profile</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h5>Name and Login</h5>
        <label htmlFor="wd-your-first-name">First name: </label>
        <input
          type="text"
          placeholder="Ratnesh"
          defaultValue="Ratnesh"
          id="wd-your-first-name"
        />
        <br />
        <label htmlFor="wd-your-last-name">Last name: </label>
        <input
          type="text"
          placeholder="Kherudkar"
          defaultValue="Kherudkar"
          id="wd-your-last-name"
        />
        <br />
        <label htmlFor="wd-your-student-id">Student ID: </label>
        <input
          type="password"
          placeholder="NUID"
          defaultValue="002563936"
          id="wd-your-student-id"
        />

        <label htmlFor="wd-your-bio">Short bio: </label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={40}
          rows={6}
          defaultValue="I am a graduate student at Northeastern. I am eager to learn full-stack web development!"
        />

        <h5>Class Standing</h5>
        <label>What is your class standing?</label>
        <br />
        <input
          type="radio"
          name="wd-your-standing"
          id="wd-your-standing-freshman"
        />
        <label htmlFor="wd-your-standing-freshman">Freshman</label>
        <br />
        <input
          type="radio"
          name="wd-your-standing"
          id="wd-your-standing-sophomore"
        />
        <label htmlFor="wd-your-standing-sophomore">Sophomore</label>
        <br />
        <input
          type="radio"
          name="wd-your-standing"
          id="wd-your-standing-junior"
        />
        <label htmlFor="wd-your-standing-junior">Junior</label>
        <br />
        <input
          type="radio"
          name="wd-your-standing"
          id="wd-your-standing-senior"
        />
        <label htmlFor="wd-your-standing-senior">Senior</label>
        <br />
        <input
          type="radio"
          name="wd-your-standing"
          id="wd-your-standing-graduate"
          defaultChecked
        />
        <label htmlFor="wd-your-standing-graduate">Graduate</label>

        <h5>Enrollment</h5>
        <label>How are you enrolled this term?</label>
        <br />
        <input
          type="radio"
          name="wd-your-enrollment"
          id="wd-your-enrollment-full-time"
          defaultChecked
        />
        <label htmlFor="wd-your-enrollment-full-time">Full time</label>
        <br />
        <input
          type="radio"
          name="wd-your-enrollment"
          id="wd-your-enrollment-part-time"
        />
        <label htmlFor="wd-your-enrollment-part-time">Part time</label>

        <h5>Interests</h5>
        <label>What are you most interested in?</label>
        <br />
        <input
          type="checkbox"
          name="wd-your-interests"
          id="wd-your-interest-typescript"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-typescript">
          TypeScript and React
        </label>
        <br />
        <input
          type="checkbox"
          name="wd-your-interests"
          id="wd-your-interest-node"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-node">Node and Express APIs</label>
        <br />
        <input
          type="checkbox"
          name="wd-your-interests"
          id="wd-your-interest-databases"
        />
        <label htmlFor="wd-your-interest-databases">
          Databases and data modeling
        </label>
        <br />
        <input
          type="checkbox"
          name="wd-your-interests"
          id="wd-your-interest-cloud"
        />
        <label htmlFor="wd-your-interest-cloud">Cloud and deployment</label>

        <h5>Major</h5>
        <label htmlFor="wd-your-major">Select your major: </label>
        <br />
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="CYBER">Cybersecurity</option>
          <option value="EE">Electrical Engineering</option>
          <option value="IS">Information Systems</option>
        </select>

        <h5>Topics To Deepen This Term</h5>
        <label htmlFor="wd-your-topics">Select all that apply: </label>
        <br />
        <select
          multiple
          id="wd-your-topics"
          defaultValue={["REACT", "MONGODB"]}
        >
          <option value="HTML">HTML and CSS</option>
          <option value="REACT">React and Next.js</option>
          <option value="NODE">Node and Express</option>
          <option value="MONGODB">MongoDB</option>
          <option value="DEPLOY">Deployment and CI</option>
        </select>

        <h5>Other Details</h5>
        <label htmlFor="wd-your-email">School email: </label>
        <input
          type="email"
          placeholder="kherudkar.r@northeastern.edu"
          defaultValue="kherudkar.r@northeastern.edu"
          id="wd-your-email"
        />
        <br />
        <label htmlFor="wd-your-graduation-year">
          Expected graduation year:{" "}
        </label>
        <input
          type="number"
          defaultValue="2027"
          min={2026}
          max={2035}
          id="wd-your-graduation-year"
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date: </label>
        <input
          type="date"
          defaultValue="2025-09-08"
          min="2000-01-01"
          max="2035-12-31"
          id="wd-your-start-date"
        />
        <br />
        <label htmlFor="wd-your-excitement">
          How excited are you about this course? (0 to 10)
        </label>
        <br />
        <input
          type="range"
          defaultValue="10"
          min="0"
          max="10"
          id="wd-your-excitement"
        />

        <h5>Save Your Profile</h5>
        <button id="wd-your-form-save" type="submit">
          Save
        </button>
        <button id="wd-your-form-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
