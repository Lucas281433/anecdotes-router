import { Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import readingImage from "../../assets/reading-a-book-43.png";
import "./Anecdote.css";


/**
 * A single anecdote page
 *
 * @param {{content: string, votes: number, info: string}} anecdote
 * The anecdote object to be rendered
 *
 * @returns {JSX.Element} The element to be rendered
 */
const Anecdote = ({ anecdote }) => {
  return (
    <Container>
      <Stack direction="column" alignItems="center">
        <img src={readingImage} className="anecdote-image" />
        <h2>{anecdote.content}</h2>
        <p>Has {anecdote.votes}</p>
        <p>for more info see:</p>
        <div className="anecdote-container">
          <Link to={`${anecdote.info}`} className="anecdote-link">
            {anecdote.info}
          </Link>
        </div>
      </Stack>
    </Container>
  );
};

Anecdote.propTypes = {
  anecdote: PropTypes.object.isRequired,
};

export default Anecdote;
