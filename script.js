import Ball from "./ball.js";

const ball = new Ball(document.getElementById("ball"));

let lastTime;
let fpsDisplay = document.createElement("div");
fpsDisplay.style.position = "fixed";
fpsDisplay.style.top = "10px";
fpsDisplay.style.right = "10px";
fpsDisplay.style.color = "white";
fpsDisplay.style.background = "rgba(0,0,0,0.5)";
fpsDisplay.style.padding = "5px 10px";
fpsDisplay.style.fontFamily = "monospace";
fpsDisplay.style.zIndex = "1000";
document.body.appendChild(fpsDisplay);

function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;

    ball.update(delta);

    // 👇 Calculate and display FPS
    const fps = Math.round(1000 / delta);
    fpsDisplay.textContent = `FPS: ${fps}`;
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
