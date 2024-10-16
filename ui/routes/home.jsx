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

  const matrixValues = hexToMatrixValues("#0000FF", "#FFA500");

  return (
    <>
      <svg class="defs-only">
        <filter
          id="color-shift"
          color-interpolation-filters="sRGB"
          x="0"
          y="0"
          height="100%"
          width="100%"
        >
          <feColorMatrix type="matrix" values={matrixValues} />
        </filter>
      </svg>

      <div style="filter: url(#color-shift);">
        <div style='background: url("data:image/webp;base64,UklGRjAAAABXRUJQVlA4TCQAAAAvA8AAAIVS27ahb3uzOUmSJoqqrOq6P47of8DQdcprYdP8/VY="); filter: contrast(20000)'>
          <div style="mix-blend-mode: soft-light; filter: grayscale(100%);">
            <img src="/beach.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
