import * as React from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import { useAuth } from "../../libs/auth";
import libs from "../../libs/util";
import axios from "axios";

 

export default function Header(props) {
  const { onDrawerToggle } = props;
  const router = useRouter();
  const { signOut, isSignedIn, getAuthHeaders } = useAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [imgUrl, setImgUrl] = React.useState("");

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
            <Button onClick={()=>router.push(`/private/user`)}>Perfil</Button>
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
              <Button onClick={() => {
                signOut();
                router.push(`/`);
                }}>Cerrar sesion</Button>,
            </>
          )}{" "}
        </>
      ),
    },
  ];

  React.useEffect(async () => {
    const result = await axios({
      method: 'get',
      url: libs.location() + 'api/user',
      headers: getAuthHeaders()
    });
    setImgUrl(result.data.foto);
    // console.log(result);
  },[]);

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
                    <Avatar src={imgUrl} alt="My Avatar" />
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
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
