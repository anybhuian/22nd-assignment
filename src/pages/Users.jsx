
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p className="status">Loading users...</p>;

  if (error) {
    return <p className="status error">{error}. Please try again.</p>;
  }

  return (
    <main className="page-container">
      <h1>Our Users</h1>
      <p className="page-description">
        Explore the users fetched from the API.
      </p>

      <div className="users-grid">
        {users.map((user) => (
          <article className="user-card" key={user.id}>
            <div className="avatar">
              {user.name.charAt(0)}
            </div>

            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <Link className="details-link" to={`/users/${user.id}`}>
              View Details →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Users;
