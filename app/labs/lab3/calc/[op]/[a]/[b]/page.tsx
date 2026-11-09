"use client";

import { useParams } from "next/navigation";

export default function Calculator() {
  const { op, a, b } = useParams<{
    op: string;
    a: string;
    b: string;
  }>();

  const numA = Number(a);
  const numB = Number(b);

  let result: number;
  let symbol: string;

  switch (op) {
    case "add":
      result = numA + numB;
      symbol = "+";
      break;

    case "sub":
      result = numA - numB;
      symbol = "-";
      break;

    case "mul":
      result = numA * numB;
      symbol = "*";
      break;

    case "div":
      result = numA / numB;
      symbol = "/";
      break;

    default:
      result = NaN;
      symbol = "?";
  }

  return (
    <h3 id="wd-calc-result">
      {a} {symbol} {b} = {result}
    </h3>
  );
}