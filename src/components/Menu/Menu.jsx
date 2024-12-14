import { AppBar, Stack, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import PhonelinkIcon from "@mui/icons-material/Phonelink";
import "./Menu.css";

/**
 * Menu component renders the top navigation bar for the application.
 * 
 * It includes links to different sections of the app: Anecdotes, Create New, 
 * and About. The component is styled with a custom CSS class and utilizes 
 * Material-UI components for layout and design.
 *
 * @returns {JSX.Element} The Menu component.
 */
const Menu = () => {
  return (
    <AppBar position="static">
      <Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap">
        <>
          <PhonelinkIcon className="munu-icon" />
          <Typography variant="h5" className="menu-title">
            Software Anecdotes
          </Typography>
        </>
        <Button>
          <Link to={"/"} className="menu-style">
            Anecdotes
          </Link>
        </Button>
        <Button>
          <Link to={"/create"} className="menu-style">
            create new
          </Link>
        </Button>
        <Button>
          <Link to={"/about"} className="menu-style">
            about
          </Link>
        </Button>
      </Stack>
    </AppBar>
  );
};

export default Menu;
