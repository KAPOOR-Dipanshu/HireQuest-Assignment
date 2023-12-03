import { useEffect, useState } from "react";
import "./App.css";
import UserData from "./components/UserData";

const API = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUser = async (url) => {
    try {
      const userData = await fetch(url);
      const data = await userData.json();
      if (data) {
        setUsers(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    fetchUser(API);
  }, []);

  return (
    <>
      <table className="border border-black border-collapse w-full">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th className="px-4">Name</th>
            <th className="px-4">Email</th>
            <th className="px-4">Role</th>
            <th className="px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" className="border-t border-black"></td>
          </tr>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
}

export default App;
