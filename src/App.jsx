import { useState } from "react";
import { Routes, Route, useMatch, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

import AnecdoteForm from "./components/AnecdoteForm/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList/AnecdoteList";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Anecdote from "./components/Anecdote/Anecdote";

/**
 * Main application component for the Anecdote app.
 *
 * Manages the state of anecdotes, notifications, and navigation. Provides
 * functionality to add new anecdotes, vote on existing anecdotes, and
 * navigate between different pages including list, detail, create, and 
 * about pages. Uses React Router for routing and Material-UI for styling.
 *
 * @returns {JSX.Element} The main application component.
 */
const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);

  const navigate = useNavigate();

  const [notification, setNotification] = useState("");

/**
 * Adds a new anecdote to the list of anecdotes.
 *
 * Assigns a unique ID to the anecdote, updates the anecdote list with the new anecdote,
 * and displays a notification indicating the addition of a new anecdote.
 * The notification is cleared after 5 seconds.
 *
 * @param {Object} anecdote - The anecdote object to be added.
 */
  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(`A new anecdote ${anecdote.content}`);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

/**
 * Votes for an anecdote and navigates to the anecdote page.
 *
 * Finds the corresponding anecdote by ID, increments its vote count, and
 * updates the list of anecdotes. Then navigates to the page of the voted
 * anecdote.
 *
 * @param {number} id - The ID of the anecdote to vote for.
 */
  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));

    navigate(`/anecdotes/${id}`);
  };

  const match = useMatch("/anecdotes/:id");
  const anecdote = match
    ? anecdotes.find((a) => a.id === Number(match.params.id))
    : null;

  return (
    <div className="app-container">
      <Menu />
      {notification ? (
        <Alert
          variant="filled"
          severity="success"
          className="notification-style"
        >
          {notification}
        </Alert>
      ) : null}

      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} vote={vote} />} />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdote} />}
        />
        <Route path="/create" element={<AnecdoteForm addNew={addNew} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
