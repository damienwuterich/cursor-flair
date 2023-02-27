document.onmousemove = function (event) {
  const output = document.getElementById("cursor-pos");
  output.innerHTML = `${event.clientX},${event.clientY}`;
};
