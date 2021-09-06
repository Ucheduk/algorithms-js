function steps(n) {
  for (let i = 1; i <= n; i++) {
    let stair = "";
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        stair += "#";
      } else stair += " ";
    }
    console.log(stair);
  }
}

function steps2(n, row = 0, stair = "") {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    stair = "";
    steps2(n, row + 1, stair);
  } else {
    if (stair.length <= row) stair += "#";
    else stair += " ";
    steps2(n, row, stair);
  }
}

steps(5);
steps2(10);
