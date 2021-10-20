"use strict";

import { square } from "./square";
import { sum } from "./sum";

export function sumOfSquares(x, y) {
  return sum(square(x), square(y));
}
