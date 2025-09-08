function changeColor() {
  const colors = [
    '#ff6b6b',
    '#feca57',
    '#48dbfb',
    '#1dd1a1',
    '#00d2d3',
    '#54a0ff',
    '#5f27cd',
    '#ff9ff3',
  ];

  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
}
