document.onmousemove = function (event) {
  const x = event.clientX;
  const y = event.clientY;

  const output = document.getElementById("cursor-pos");
  output.innerHTML = `${x},${y}`;

  const circle = document.getElementById("circle");
  circle.style.visibility = "visible";

  const circleBox = circle.getBoundingClientRect();
  const width = circleBox.width;
  const height = circleBox.height;

  circle.style.left = x - width / 2;
  circle.style.top = y - height / 2;
};
