function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

export default function LegacyFunctions() {
  const twoPlusFour = add(2, 4);
  const nineMinusThree = subtract(9, 3);
  console.log(twoPlusFour);
  return (
    <div id="wd-legacy-functions">
      <h4>Functions</h4>
      <h5>Legacy ES5 functions</h5>
      twoPlusFour = {twoPlusFour} <br />
      add(2, 4) = {add(2, 4)} <br />
      nineMinusThree = {nineMinusThree} <br />
      subtract(9, 3) = {subtract(9, 3)}
      <hr />
    </div>
  );
}