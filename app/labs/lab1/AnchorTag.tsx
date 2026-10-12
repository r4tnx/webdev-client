export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/r4tnx" id="wd-github">
        GitHub
      </a>
      <br />
      <a href="https://www.youtube.com/" id="wd-your-link">
        Youtube
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/r4tnx/"
        id="wd-your-linkedin"
        target="_blank"
        rel="noreferrer"
      >
        My LinkedIn profile (new tab)
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}