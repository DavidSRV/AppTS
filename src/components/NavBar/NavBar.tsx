import { AppBar, Toolbar, Typography } from "@mui/material";

export interface NavBarInterface {}

function NavBar<NavBarInterface>() {
  return (
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default NavBar;
