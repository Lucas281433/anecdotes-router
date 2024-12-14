import { Stack, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useField } from "../../hooks";

import PropTypes from "prop-types";
import noteImage from "../../assets/note-taking-1-88.png";
import "./AnecdoteForm.css";

/**
 * AnecdoteForm component allows the user to create a new anecdote.
 *
 * Utilizes custom hooks to manage form fields for content, author, and info,
 * and provides functionality to submit or reset the form.
 * 
 * @param {Object} props - Component props.
 * @param {function} props.addNew - Function to add a new anecdote.
 *
 * @returns {JSX.Element} The AnecdoteForm component.
 */
const AnecdoteForm = ({ addNew }) => {
  const content = useField();
  const author = useField();
  const info = useField();
  const navigate = useNavigate();

/**
 * Handles the form submission to create a new anecdote.
 *
 * Prevents the default form submission behavior, adds a new anecdote
 * using the provided content, author, and info from the form fields,
 * initializes the votes to 0, and navigates to the home page.
 *
 * @param {Event} e - The form submission event.
 */
  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    navigate("/");
  };

  /**
   * Resets the form fields to their initial state.
   *
   * Invokes the onChangeReset functions for content, author, and info to reset
   * the corresponding form fields to an empty string.
   */
  const handleReset = () => {
    content.onChangeReset();
    author.onChangeReset();
    info.onChangeReset();
  };

  const inputStyle = {
    marginBottom: "1rem",
  };

  return (
    <div>
      <h2 className="form-title">Create a new anecdote</h2>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
      >
        <img src={noteImage} className="form-image" />
        <Stack direction="column" spacing={2}>
          <form onSubmit={handleSubmit}>
            <div style={inputStyle}>
              <TextField
                size="small"
                label="Content"
                value={content.value}
                onChange={content.onChange}
                onReset={content.onChangeReset}
              />
            </div>
            <div style={inputStyle}>
              <TextField
                size="small"
                label="Author"
                value={author.value}
                onChange={author.onChange}
                onReset={author.onChangeReset}
              />
            </div>
            <div style={inputStyle}>
              <TextField
                size="small"
                label="Url for more info"
                value={info.value}
                onChange={info.onChange}
                onReset={info.onChangeReset}
              />
            </div>

            <Stack
              direction="row"
              justifyContent="space-between"
              style={inputStyle}
            >
              <Button variant="contained" type="submit">
                create
              </Button>
              <Button variant="contained" type="button" onClick={handleReset}>
                reset
              </Button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </div>
  );
};

AnecdoteForm.propTypes = {
  addNew: PropTypes.func.isRequired,
};

export default AnecdoteForm;
