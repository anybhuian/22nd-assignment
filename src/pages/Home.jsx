
import { useRef, useState } from "react";

function Home() {
  // Task 2: useState দিয়ে background color পরিবর্তন
  const [bgColor, setBgColor] = useState("#f8fafc");

  // Task 3: useRef practice
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  // Task 4: Form handling
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [submittedUser, setSubmittedUser] = useState(null);

  // Task 5: Object state
  const [user, setUser] = useState({
    name: "Rahim",
    email: "rahim@example.com",
  });

  // Task 5: Array state
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
  ]);

  const [newSkill, setNewSkill] = useState("");

  function handleFormChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedUser({ ...form });
  }

  function resetForm() {
    setForm({ name: "", email: "", age: "" });
    setSubmittedUser(null);
  }

  function addSkill() {
    const skill = newSkill.trim();

    if (skill) {
      setSkills([...skills, skill]);
      setNewSkill("");
    }
  }

  return (
    <main className="home-page" style={{ backgroundColor: bgColor }}>
      <section className="hero">
        <p className="eyebrow">WELCOME TO</p>
        <h1>Simple User Directory</h1>
        <p>
          Manage users, explore React Hooks, and practice modern React.
        </p>

        <button
          onClick={() =>
            setBgColor(
              bgColor === "#f8fafc" ? "#dbeafe" : "#f8fafc"
            )
          }
        >
          Change Background
        </button>
      </section>

      <div className="practice-grid">
        <section className="panel">
          <h2>useRef Practice</h2>
          <input ref={inputRef} placeholder="Type something..." />
          <div className="button-row">
            <button onClick={() => setInputValue(inputRef.current.value)}>
              Show Input
            </button>
            <button onClick={() => inputRef.current.focus()}>
              Focus Input
            </button>
          </div>
          {inputValue && <p>Your input: {inputValue}</p>}
        </section>

        <section className="panel">
          <h2>User Form</h2>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleFormChange}
              placeholder="Enter your name"
              required
            />

            <label>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleFormChange}
              placeholder="Enter your email"
              required
            />

            <label>Age</label>
            <input
              name="age"
              type="number"
              min="1"
              value={form.age}
              onChange={handleFormChange}
              placeholder="Enter your age"
              required
            />

            <div className="button-row">
              <button type="submit">Submit</button>
              <button type="button" className="secondary" onClick={resetForm}>
                Reset
              </button>
            </div>
          </form>

          {submittedUser && (
            <div className="result">
              <h3>Submitted Information</h3>
              <p>Name: {submittedUser.name}</p>
              <p>Email: {submittedUser.email}</p>
              <p>Age: {submittedUser.age}</p>
            </div>
          )}
        </section>

        <section className="panel">
          <h2>Object State</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button
            onClick={() =>
              setUser({ ...user, name: "Karim" })
            }
          >
            Update Name
          </button>
        </section>

        <section className="panel">
          <h2>My Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={`${skill}-${index}`}>{skill}</li>
            ))}
          </ul>

          <input
            value={newSkill}
            onChange={(event) => setNewSkill(event.target.value)}
            placeholder="Enter a new skill"
          />
          <button onClick={addSkill}>Add Skill</button>
        </section>
      </div>
    </main>
  );
}

export default Home;
