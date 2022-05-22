import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../libs/auth";
import { List, ListItem } from "@material-ui/core";

 

export default function Header(props) {
  const { onDrawerToggle } = props;
  const { user, signOut, isSignedIn } = useAuth();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    {
      but: (
        <>
          {" "}
          {isSignedIn && (
            <>
              <Link href={`/private/user/621ef0bb044c35a8c1a2f91d`}>
                <a>Perfil</a>
              </Link>{" "}
            </>
          )}{" "}
        </>
      ),
    },
    {
      but: (
        <>
          {" "}
          {isSignedIn && (
            <>
              <Button onClick={() => signOut()}>Cerrar sesion</Button>,
            </>
          )}{" "}
        </>
      ),
    },
  ];

  return (
    <React.Fragment>
      <AppBar  position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton>
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>

            <Grid item>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.5 }}>
                    <Avatar src={user?.foto} alt="My Avatar" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, key) => (
                    <MenuItem key={key + 1} onClick={handleCloseUserMenu}>
                      {setting.but}
                    </MenuItem>
                  ))}{" "}
                  {/* {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting.but}</Typography>
                    </MenuItem>
                  ))} */}
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
