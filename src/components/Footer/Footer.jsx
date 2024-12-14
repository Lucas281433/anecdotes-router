import GitHubIcon from "@mui/icons-material/GitHub";
import { Container, Stack } from "@mui/material";

import "./Footer.css"

/**
 * Footer component displays information about the Anecdote app.
 *
 * It includes a link to the Full Stack Open course and a GitHub link
 * to the source code for the application. The component is styled with
 * a footer-style class and contains a GitHub icon.
 *
 * @returns {JSX.Element} The Footer component.
 */
const Footer = () => (
  <Stack
    className="footer-style"
  >
    <footer>
      <Container>
      <p>
        Anecdote app for{" "}
        <a href="https://fullstackopen.com/">Full Stack Open</a>. See{" "}
        <GitHubIcon className="footer-icon" />
        <a href="https://github.com/fullstack-hy2020/routed-anecdotes">
          https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js
        </a>{" "}
        for the source code.
      </p>
      </Container>
    </footer>
  </Stack>
);

export default Footer;
