import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 bg-white p-2 text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-description" className="mb-1 block text-sm font-medium">
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
          className="w-full rounded border border-neutral-300 bg-white p-2 text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-points" className="mb-1 block text-sm font-medium">
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={100}
          className="w-full rounded border border-neutral-300 bg-white p-2 text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-group" className="mb-1 block text-sm font-medium">
          Assignment Group
        </label>
        <select
          id="wd-group"
          className="w-full rounded border border-neutral-300 bg-white p-2 text-sm"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="wd-display-grade-as" className="mb-1 block text-sm font-medium">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          className="w-full rounded border border-neutral-300 bg-white p-2 text-sm"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="wd-submission-type" className="mb-1 block text-sm font-medium">
          Submission Type
        </label>
        <select
          id="wd-submission-type"
          className="w-full rounded border border-neutral-300 bg-white p-2 text-sm"
        >
          <option value="ONLINE">Online</option>
          <option value="ON_PAPER">On Paper</option>
        </select>
        <div className="mt-3 rounded border border-neutral-300 p-3">
          <span className="mb-1 block text-sm font-medium">Online Entry Options</span>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry" className="text-sm">Text Entry</label>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url" className="text-sm">Website URL</label>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings" className="text-sm">Media Recordings</label>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation" className="text-sm">Student Annotation</label>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload" className="text-sm">File Uploads</label>
          </div>
        </div>
      </div>
      <div className="mb-4 rounded border border-neutral-300 p-3">
        <div className="mb-4">
          <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-medium">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            className="w-full rounded border border-neutral-300 bg-white p-2 text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="wd-due-date" className="mb-1 block text-sm font-medium">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            className="w-full rounded border border-neutral-300 bg-white p-2 text-sm"
          />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <label htmlFor="wd-available-from" className="mb-1 block text-sm font-medium">
              Available from
            </label>
            <input
              type="date"
              id="wd-available-from"
              className="w-full rounded border border-neutral-300 bg-white p-2 text-sm"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="wd-available-until" className="mb-1 block text-sm font-medium">
              Until
            </label>
            <input
              type="date"
              id="wd-available-until"
              className="w-full rounded border border-neutral-300 bg-white p-2 text-sm"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm font-medium">
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={5}
          className="w-full rounded border border-neutral-300 bg-white p-2 text-sm"
        />
      </div>
      <div className="flex justify-end gap-2 border-t border-neutral-300 pt-4">
        <Link
          href="/courses/1234/assignments"
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm no-underline"
        >
          Cancel
        </Link>
        <Link
          href="/courses/1234/assignments"
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
