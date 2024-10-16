import { h, Fragment } from "preact";

export default function Home() {
  const hexToMatrixValues = (blackHex, whiteHex) => {
    // Convert hex to RGB
    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;
      return [r, g, b];
    };

    const black = hexToRgb(blackHex);
    const white = hexToRgb(whiteHex);

    // Calculate the matrix values
    const matrix = [
      white[0] - black[0],
      0,
      0,
      0,
      black[0],
      0,
      white[1] - black[1],
      0,
      0,
      black[1],
      0,
      0,
      white[2] - black[2],
      0,
      black[2],
      0,
      0,
      0,
      1,
      0,
    ];

    // Round the values to 6 decimal places and join them
    return matrix.map((v) => v.toFixed(6)).join(" ");
  };

  const matrixValues = hexToMatrixValues("#052c65", "#cfe2ff");

  const svgFilter = `
    <svg xmlns="http://www.w3.org/2000/svg">
      <filter id="color-shift" color-interpolation-filters="sRGB">
        <feColorMatrix type="matrix" values="${matrixValues}" />
      </filter>
    </svg>
  `;

  const svgDataUrl = `data:image/svg+xml;base64,${btoa(svgFilter)}`;

  return (
    <>
      <div
        style={`filter: url(${svgDataUrl}#color-shift); position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;`}
      >
        <div style='background: url("data:image/webp;base64,UklGRjAAAABXRUJQVlA4TCQAAAAvA8AAAIVS27ahb3uzOUmSJoqqrOq6P47of8DQdcprYdP8/VY="); filter: contrast(20000)'>
          <div style="mix-blend-mode: soft-light; filter: grayscale(100%);">
            <div style="height: 100%; background-image: url(/beach.jpg); background-size: cover; background-position: center;" />
          </div>
        </div>
      </div>
      <div style="position: absolute; z-index: 1; height: 100%; width: 100%;">
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <h1 style="font-size: 5rem; color: #cfe2ff; padding: 0 1rem; background-color: #052c65;">
            Organize anything together
          </h1>
          <h2 style="font-size: 2rem; color: #cfe2ff; padding: 0 1rem; background-color: #052c65;">
            Peachtree is the simplest way to keep track of everything in your
            life
          </h2>
        </div>
      </div>
    </>
  );
}
