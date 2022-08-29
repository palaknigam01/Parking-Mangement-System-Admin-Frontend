import React, { useState, useEffect } from "react";

function Pagination({ pages, setCurrentpage }) {
  const [button, setButton] = useState(1);
  //let reset = true;

  const numOfPage = [];
  for (let i = 1; i <= pages; i++) {
    numOfPage.push(i);
  }
  useEffect(() => {
    setCurrentpage(button);
  }, [button, setCurrentpage]);

  return (
    <div>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination ms-2">
          <li
            className={`${button === 1 ? "page-item disabled" : "page-item"}`}
          >
            <a
              className="page-link"
              href="#!"
              onClick={() =>
                setButton((prev) => (prev === 1 ? prev : prev - 1))
              }
            >
              Previous
            </a>
          </li>
          {numOfPage.map((pages, index) => {
            return (
              <li
                key={index}
                className={`${
                  button === pages ? "page-item active" : "page-item"
                }`}
              >
                <a
                  className="page-link"
                  href="#!"
                  onClick={() => setButton(pages)}
                >
                  {pages}
                </a>
              </li>
            );
          })}
          <li
            className={`${
              button === numOfPage.length ? "page-item disabled" : "page-item"
            }`}
          >
            <a
              className="page-link"
              href="#!"
              onClick={() =>
                setButton((next) =>
                  next === numOfPage.length ? next : next + 1
                )
              }
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pagination;
