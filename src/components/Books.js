import React from "react";

const Books = ({ show, resultBooks, display }) => {
  console.log(resultBooks, "RESULTBOOKS");
  console.log(display, "display");
  if (!show) {
    return null;
  }

  const books = [];

  return (
    <div>
      <h2>Books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {resultBooks.data.allBooks.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
