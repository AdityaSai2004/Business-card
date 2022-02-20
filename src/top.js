import React from "react";
import "./index.css";
import dp from "./dp.jpg";
export default function Top() {
  return (
    <div className="top">
      <img src={dp} alt="dp" className="dp" />
      <h1 className="name">Aditya Sai</h1>
      <h3 className="dev">Frontend Developer</h3>
      <a href="https://adityasai2004.github.io/" className="website">
        adityasai2004.github.io
      </a>
      <br />
      <a
        href="mailto:2004sai@gmail.com?Subject=Hello%20Aditya"
        className="email"
      >
        <button type="button" role="button" className="email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="30"
            fill="currentColor"
            class="bi bi-envelope-fill"
            viewBox="0 0 30 10"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
          Email
        </button>
      </a>
    </div>
  );
}
