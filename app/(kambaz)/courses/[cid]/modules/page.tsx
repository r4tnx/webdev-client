import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>
        <select
          defaultValue="publish-all"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="publish-all">Publish All</option>
        </select>
        <button
          type="button"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + Module
        </button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
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
        <Module title="Week 4, Lecture 4 - Building the Kambaz Screens">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Reuse components with props and children
            </li>
            <li className="wd-content-item">
              Lay out screens with Tailwind utilities
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Styling with Tailwind
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Navigation and Layouts</li>
            <li className="wd-content-item">Dashboard and Course Cards</li>
          </Lesson>
        </Module>
        <Module title="Sample module (AI)">
          <Lesson title="Sample lesson (AI)">
            <li className="wd-content-item">
              Sample content item inside the sample lesson
            </li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}