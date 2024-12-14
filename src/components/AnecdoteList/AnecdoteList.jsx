import { Stack, List, ListItem, Button } from "@mui/material";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import bookListImage from "../../assets/conversation-29.png";
import "./AnecdoteList.css";

/**
 * A list of anecdotes with vote button
 *
 * @param {Array} anecdotes
 * The array of anecdotes to be rendered
 *
 * @param {Function} vote
 * The function to be called when the vote button is clicked
 *
 * @returns {JSX.Element} The element to be rendered
 */
const AnecdoteList = ({ anecdotes, vote }) => (
  <div className="content">
    <Stack direction="column" alignItems="center">
      <h2>Anecdotes</h2>
      <img src={bookListImage} className="list-image" />
    </Stack>
    <List>
      {anecdotes.map((anecdote) => (
        <ListItem key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
          <Button variant="contained" className="button-list" onClick={() => vote(anecdote.id)}>
            Vote
          </Button>
        </ListItem>
      ))}
    </List>
  </div>
);

AnecdoteList.propTypes = {
  anecdotes: PropTypes.array.isRequired,
  vote: PropTypes.func.isRequired,
};

export default AnecdoteList;
