import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ALL_BOOKS } from "../queries";

const Books = ({ show }) => {
  const [books, setBooks] = useState(null);
  const result = useQuery(ALL_BOOKS);
  console.log(result.data, "RESULT.DATA");

  useEffect(() => {
    if (result.data) {
      console.log(result.data.allBooks, "result.data.allBooks");
      setBooks(result.data.allBooks);
    }
  }, [result.data]);

  return (
    <div>
      {show && (
        <div>
          <h2>Books</h2>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>author</th>
                <th>published</th>
              </tr>
              {books &&
                books.map((a) => (
                  <tr key={a.title}>
                    <td>{a.title}</td>
                    <td>{a.author.name}</td>
                    <td>{a.published}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Books;
