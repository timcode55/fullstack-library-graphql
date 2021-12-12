import React from "react";
import "./Authors.css";

const Authors = ({ result, show }) => {
  console.log(result, "RESULT");
  if (!show) {
    return null;
  }
  const authors = [];

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr className="main-row">
            <th>Author</th>
            <th>born</th>
            <th>books</th>
          </tr>
          {result.data.allAuthors.map((a) => (
            <tr key={a.name}>
              {/* <th>Author</th> */}
              <td>{a.name}</td>
              {/* <th>born</th> */}
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Authors;
