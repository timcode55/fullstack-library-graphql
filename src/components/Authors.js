import React, { useState, useEffect } from "react";
import "./Authors.css";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../queries";
import { useQuery, useMutation } from "@apollo/client";
import Select from "react-select";

const Authors = ({ show }) => {
  const [authors, setAuthors] = useState(null);
  const [birthYear, setBirthYear] = useState(null);
  const [select, setSelect] = useState("chocolate");
  const [options, setOptions] = useState({});

  const result = useQuery(ALL_AUTHORS);

  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }]
  });

  // setTimeout(() => {
  //   console.log(result.data, "RESULT.DATA");
  // }, 5000);
  useEffect(() => {
    if (result.data) {
      setAuthors(result.data.allAuthors);
      setOptions(
        result.data.allAuthors.map((author) => {
          return {
            value: author.name,
            label: author.name
          };
        })
      );
    }
  }, [result.data]);

  const handleSelectChange = (e) => {
    console.log(e, "e");
    setSelect(e.value);
  };

  const submit = async (event) => {
    event.preventDefault();
    editAuthor({ variables: { select, birthYear } });
    console.log("edit author...");
    // addGenre();
    setBirthYear("");
  };

  console.log(authors, "AUTHORS IN STATE");
  console.log(birthYear, "birthYear");
  console.log(select, "select");
  console.log(options, "OPTIONS");
  return (
    <div>
      {show && (
        <div>
          <h2>authors</h2>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>author</th>
                <th>published</th>
              </tr>
              {authors &&
                authors.map((a) => (
                  <tr key={a.name}>
                    <td>{a.name}</td>
                    <td>{a.born}</td>
                    <td>{a.bookCount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      <h1>Set Birthyear</h1>
      <form onSubmit={submit}>
        <Select
          value={select}
          onChange={handleSelectChange}
          options={options}
        />
        <p>Born</p>
        <input
          type="number"
          value={birthYear}
          onChange={({ target }) => setBirthYear(Number(target.value))}
        />
        <button type="submit">Set BirthYear</button>
      </form>
    </div>
  );
};

export default Authors;
