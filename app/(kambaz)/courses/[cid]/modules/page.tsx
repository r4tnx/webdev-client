import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <button>Collapse All</button> <button>View Progress</button>{" "}
      <select defaultValue="publish-all">
        <option value="publish-all">Publish All</option>
      </select>{" "}
      <button>+ Module</button>
      <ul id="wd-modules">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>
        <Module title="Week 2, Lecture 2 - Formatting User Interfaces with HTML">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Learn how to create web pages with HTML
            </li>
            <li className="wd-content-item">
              Format content with headings, paragraphs, and lists
            </li>
            <li className="wd-content-item">
              Build forms with the most common input types
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction to HTML
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Formatting Content
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to HTML</li>
            <li className="wd-content-item">Tables, Images, and Anchors</li>
            <li className="wd-content-item">Forms and Input Types</li>
          </Lesson>
        </Module>
        <Module title="Week 3, Lecture 3 - Styling User Interfaces with CSS">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Learn how to style web pages with CSS
            </li>
            <li className="wd-content-item">
              Select elements by ID, class, and document position
            </li>
            <li className="wd-content-item">
              Lay out pages with the box model, flexbox, and grid
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 3 - Introduction to CSS
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 4 - Responsive Design
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">CSS Selectors and the Cascade</li>
            <li className="wd-content-item">The Box Model and Positioning</li>
            <li className="wd-content-item">Flexbox, Grid, and Bootstrap</li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}