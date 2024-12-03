import { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Jenish Koladiya", email: "jenish@gmail.com", city: "Amreli" },
    { id: 2, name: "Aditya Joshi", email: "aditya@gmail.com", city: "Porbandar" },
    { id: 3, name: "Vishw Faldu", email: "vishw@gmail.com", city: "Junagadh" },
    { id: 4, name: "Hetvi Patel", email: "hetvi@gmail.com", city: "Navsari" },
    { id: 5, name: "Himanshi Dudhat", email: "himanshi@gmail.com", city: "Amreli" },
    { id: 6, name: "Tisha Rabadiya", email: "tisha@gmail.com", city: "Amreli" },
  ]);

  const [sortOrder, setSortOrder] = useState("asc");

  // sort data based on a column
  const sortData = (key) => {
    const sortedUsers = [...users].sort((x, y) => {
      if (x[key] < y[key]) return sortOrder === "asc" ? -1 : 1;
      if (x[key] > y[key]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    setUsers(sortedUsers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Extract headers dynamically from the first object
  const headers = users.length > 0 ? Object.keys(users[0]) : [];

  return (
    <div className="App">
      {users.length === 0 ? (
        <p className="no-data">No data available</p>
      ) : (
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} onClick={() => sortData(header)}>
                  {header.toUpperCase()} {sortOrder === "asc" ? "↑" : "↓"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td key={header}>{user[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
