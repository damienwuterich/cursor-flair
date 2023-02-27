document.onmousemove = function (event) {
  const x = event.clientX;
  const y = event.clientY;

  const output = document.getElementById("cursor-pos");
  output.innerHTML = `${x},${y}`;

  const circle = document.getElementById("circle");
  circle.style.left = x;
  circle.style.top = y;
};
