/* eslint-disable react/no-unescaped-entities */
import { Container, Stack } from "@mui/material";

import aboutImage from "../../assets/book-lover-25.png";
import "./About.css"

/**
 * About page of the anecdote app
 *
 * Contains a brief description of an anecdote and the purpose of the app.
 */
const About = () => (
  <div>
    <Stack direction="column" alignItems="center">
      <h2>About anecdote app</h2>
      <img src={aboutImage} className="about-image" />
    </Stack>
    <Container>
    <p>According to Wikipedia:</p>

    <em>
      An anecdote is a brief, revealing account of an individual person or an
      incident. Occasionally humorous, anecdotes differ from jokes because their
      primary purpose is not simply to provoke laughter but to reveal a truth
      more general than the brief tale itself, such as to characterize a person
      by delineating a specific quirk or trait, to communicate an abstract idea
      about a person, place, or thing through the concrete details of a short
      narrative. An anecdote is "a story with a point."
    </em>

    <p>
      Software engineering is full of excellent anecdotes, at this app you can
      find the best and add more.
    </p>
    </Container>
  </div>
);

export default About;
