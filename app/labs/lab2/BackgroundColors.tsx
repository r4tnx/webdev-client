export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        This sample paragraph pairs a yellow background class with a black
        foreground class so the text stays legible.
      </p>
      <p className="wd-bg-color-yellow wd-fg-color-black">
        This is my block this has yellow bg, and{" "}
        <span className="wd-bg-color-gray wd-fg-color-black">
          this has grey bg
        </span>
      </p>
    </div>
  );
}