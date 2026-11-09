"use client";

const hello = () => {
  alert("Hello World!");
};

const greet = () => {
  alert("Hello, my name is Ratnesh Kherudkar!");
};

const goodbye = () => {
  alert("Goodbye World!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        onClick={greet}
        id="wd-onclick-ratnesh"
        className="me-2 rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Greeting
      </button>
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="rounded bg-neutral-700 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Goodbye
      </button>
      <hr />
    </div>
  );
}
