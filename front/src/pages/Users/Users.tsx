import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import User from "../../components/User/User";
import "../../App.css";
import "./style.css";

// Define the type for a user
type UserType = {
  id: number;
  firstName: string;
  lastName: string;
};

function Users() {
  const [users, setUsers] = useState<UserType[]>([]); // Store fetched users
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track any errors

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token"); // Retrieve the JWT token

      try {
        const response = await fetch("http://localhost:5289/api/Users", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Add the JWT token
          },
        });

        if (response.ok) {
          const data: UserType[] = await response.json();
          setUsers(data);
          setLoading(false); // Stop loading after data is fetched
        } else {
          setError("Failed to fetch users.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("An error occurred while fetching users.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle showing user details (placeholder)
  const handleShowDetails = (userId: number) => {
    console.log("Show details for user ID:", userId);
  };

  // Handle deleting a user (placeholder)
  const handleDelete = (userId: number) => {
    console.log("Delete user ID:", userId);
  };

  return (
    <div className="App">
      <Sidebar />

      <div className="Content animate__fadeInUp">
        <div className="HeaderBar">Users List</div>
        {/* Display a loading message */}
        {loading && <p>Loading users...</p>}

        {/* Display an error message if any */}
        {error && <p className="error">{error}</p>}

        {/* Render the list of users */}
        {!loading &&
          !error &&
          users.map((user) => (
            <User
              key={user.id}
              name={`${user.firstName} ${user.lastName}`}
              onShowDetails={() => handleShowDetails(user.id)}
              onDelete={() => handleDelete(user.id)}
            />
          ))}

        {/* Handle no users case */}
        {!loading && !error && users.length === 0 && <p>No users found.</p>}
      </div>
    </div>
  );
}

export default Users;