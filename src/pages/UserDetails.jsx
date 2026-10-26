
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <main className="page-container">
      <section className="panel details-panel">
        <h1>User Details</h1>
        <p>Selected User ID: <strong>{id}</strong></p>
        <p>This is the dynamic route for user ID {id}.</p>
        <Link className="details-link" to="/users">
          ← Back to Users
        </Link>
      </section>
    </main>
  );
}

export default UserDetails;
