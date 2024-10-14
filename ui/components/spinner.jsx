import { h } from "preact";

export default function Spinner() {
  return (
    <svg
      className="spinner"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="20" r="2"></circle>
      <circle cx="12" cy="4" r="2"></circle>
      <circle cx="6.343" cy="17.657" r="2"></circle>
      <circle cx="17.657" cy="6.343" r="2"></circle>
      <circle cx="4" cy="12" r="2.001"></circle>
      <circle cx="20" cy="12" r="2"></circle>
      <circle cx="6.343" cy="6.344" r="2"></circle>
      <circle cx="17.657" cy="17.658" r="2"></circle>
      <style>
        {`
          .spinner {
            animation: spin 2.5s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </svg>
  );
}
