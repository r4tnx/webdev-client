import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      <h5>Ratnesh Kherudkar</h5>
      <em>Learning to build it end to end.</em>
      <br />
      <a href="https://github.com/r4tnx" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/labs">Labs</Link></li>
      <li><Link href="/labs/lab1">Lab 1</Link></li>
      <li><Link href="/labs/lab2">Lab 2</Link></li>
      <li><Link href="/labs/lab3">Lab 3</Link></li>
      <li><Link href="/labs/lab4" id="wd-lab4-link">Lab 4</Link></li>
      <li><Link href="/labs/lab5">Lab 5</Link></li>
            <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      <li><Link href="/book/ch1" id="wd-toc-book-link">Chapter 1</Link></li>
      </ul>
    </div>
  );
}