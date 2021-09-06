function pyramidSteps(n) {
  const stepLength = n * 2 - 1;
  const midPoint = Math.floor(stepLength / 2);
  for (let i = 0; i < n; i++) {
    let stair = "";
    for (let j = 0; j < stepLength; j++) {
      if (j >= midPoint - i && j <= midPoint + i) {
        stair += "#";
      } else stair += " ";
    }
    console.log(stair);
  }
}

function pyramidSteps2(n, row = 0, stair = "") {
  const stepLength = n * 2 - 1;
  const midPoint = Math.floor(stepLength / 2);

  if (n === row) return;

  if (stepLength === stair.length) {
    console.log(stair);
    stair = "";
    pyramidSteps2(n, row + 1, stair);
  } else {
    if (stair.length >= midPoint - row && stair.length <= midPoint + row)
      stair += "#";
    else stair += " ";
    pyramidSteps2(n, row, stair);
  }
}

pyramidSteps(5);
pyramidSteps2(10);
