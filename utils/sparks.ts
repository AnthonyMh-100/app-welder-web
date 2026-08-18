const spawnSpark = (path: SVGPathElement, container: HTMLElement): void => {
  const length = path.getTotalLength();
  const point = path.getPointAtLength(length);
  const svg = path.closest("svg");
  if (!svg) return;

  const rect = svg.getBoundingClientRect();
  const viewBox = svg.viewBox.baseVal;
  const scaleX = rect.width / viewBox.width;
  const scaleY = rect.height / viewBox.height;

  const spark = document.createElement("span");
  spark.className = "spark";
  spark.style.left = `${point.x * scaleX}px`;
  spark.style.top = `${point.y * scaleY}px`;

  const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.6;
  const distance = 18 + Math.random() * 36;
  spark.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
  spark.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
  spark.style.animationDelay = `${Math.random() * 0.12}s`;

  container.appendChild(spark);
  window.setTimeout(() => spark.remove(), 850);
}

export const spawnSparks = (path: SVGPathElement, container: HTMLElement): void => {
  for (let index = 0; index < 9; index += 1) {
    spawnSpark(path, container);
  }
}