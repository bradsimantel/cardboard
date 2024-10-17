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
        className="w-full h-full"
        style={{ filter: `url(${svgDataUrl}#color-shift)` }}
      >
        <div className="bg-[url('data:image/webp;base64,UklGRjAAAABXRUJQVlA4TCQAAAAvA8AAAIVS27ahb3uzOUmSJoqqrOq6P47of8DQdcprYdP8/VY=')] contrast-[20000%]">
          <div className="mix-blend-soft-light grayscale h-full bg-[url(/beach.jpg)] bg-cover bg-center flex flex-col items-center justify-center">
            <h1 className="text-5xl text-[#cfe2ff] mix-blend-difference font-serif">
              Organize anything together
            </h1>
            <h2 className="text-2xl text-[#cfe2ff] mix-blend-difference">
              Manage your projects, hiring processes, sales pipelines, and more
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
