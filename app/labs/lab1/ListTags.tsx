export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      My Favourite Recipe:
      <ol id="wd-your-favorite-recipe">
        <li>Put water in the cup noodles.</li>
        <li>Microwave for 4 minutes.</li>
        <li>Leave for 1 minute and enjoy!</li>
      </ol>
      <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
        </ul>
        Your favorite books (in no particular order)
        <ul id="wd-your-books">
            <li>The Alchemist</li>
            <li>The Girl on the Train</li>
            <li>Sherlock Holmes</li>
        </ul>
        HTML tags covered in this chapter
        <ul id="wd-ai-html-tags">
            <li>h1 &ndash; the largest of the six heading levels</li>
            <li>p &ndash; wraps a block of text and adds vertical spacing</li>
            <li>ol &ndash; a numbered list for steps that happen in order</li>
            <li>ul &ndash; a bulleted list where the order does not matter</li>
            <li>li &ndash; one item inside an ordered or unordered list</li>
            <li>table &ndash; arranges data into rows and columns</li>
            <li>span &ndash; marks inline text without starting a new line</li>
        </ul>
    </div>
  );
}