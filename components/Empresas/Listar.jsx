import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import { alpha, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Link from "next/link";


import TreeItem from "@material-ui/lab/TreeItem";
import Collapse from "@material-ui/core/Collapse";
import { useSpring, animated } from "react-spring/web.cjs";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_EMPRESAS,
  MODIFICAR_COMENTARIO_IMPUESTO,
  MODIFICAR_CONTRASENIAS,
} from "../../graphql/queries";

import NoAutorizado from "../../components/NoAutorizado";
import { Button } from "@material-ui/core";



function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
}))((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
));

const Listar_Empresas = () => {
  const [abiertoComentario, setAbiertoComentario] = useState(false);
  const [modificarClavesComentario, setModificarClavesComentario] =
    useState("");
  const [modificarClavesUsuario, setModificarClavesUsuario] = useState("");
  const [modificarClavesClave, setModificarClavesClave] = useState("");
  const [idModificar, setIdModificar] = useState("");
  const [comentario, setComentario] = useState("");
  const [id_impComentario, setIdImpComentario] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [
    ModificarComentarioImpuesto,
    { dataComImp, loadingComImp, errorComImp },
  ] = useMutation(MODIFICAR_COMENTARIO_IMPUESTO);

  const [
    modificarClavesEmpresas,
    { dataModificarClaves, loadingModificarClaves, errorModificarClaves },
  ] = useMutation(MODIFICAR_CONTRASENIAS);

  const { loading, error, data } = useQuery(GET_EMPRESAS);

  if (loading) {
    return "loading";
  }
  if (error) {
    return <NoAutorizado />;
  }

  // console.log(data.empresas);

  // popover para modificar el impuesto y las claves
  // const handleClick = (event) => {
  //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  // modificar comentario en el impuesto
  // const modificarComentario = () => {
  //   // e.preventDefault();

  //   ModificarComentarioImpuesto({
  //     variables: { id: id_impComentario, comentario: comentario },
  //   });
  //   if (loadingComImp) {
  //     return "loading";
  //   }
  //   if (errorComImp) {
  //     return <NoAutorizado />;
  //   }
  //   // console.log(dataComImp);
  // };

  // const modificarClaves = () => {
  //   modificarClavesEmpresas({
  //     variables: {
  //       id: idModificar,
  //       usuario: modificarClavesUsuario,
  //       contrasenna: modificarClavesClave,
  //       comentario: modificarClavesComentario,
  //     },
  //   });

  //   if (loadingModificarClaves) {
  //     return "loading";
  //   }
  //   if (errorModificarClaves) {
  //     return <NoAutorizado />;
  //   }
  //   // console.log(dataComImp);
  // };

  return (
    <div>
      {data.empresas.map((empresa, keyMayor) => {
        var claves = [];
        var impuesto = [];
        impuesto = empresa.responsabilidad;
        claves = empresa.claves;

        return (
          <Link href={`/private/emp/[info]`} as={`/private/emp/${empresa.id}`} >
            <Typography key={keyMayor}>
              <>
                <nav aria-label="main mailbox folders">
                  <List sx={{
                    width: "100vw",
                  }} >
                    <ListItem disablePadding >
                      <ListItemButton id={empresa.id} >
                        <ListItemIcon>
                          <Stack direction="row" spacing={3}>
                            <Avatar
                              alt="Remy Sharp"
                              src="https://png.pngtree.com/template/20191014/ourlarge/pngtree-real-estate-business-logo-template-building-property-development-and-construction-logo-image_317796.jpg"
                              sx={{ width: 56, height: 56 }}
                            />
                          </Stack>
                        </ListItemIcon>
                        {empresa.razonSocial}
                        {empresa.nit}
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
                <Divider />
              </>
            </Typography>
          </Link>
        );
      })}
    </div>
  );
};

export default Listar_Empresas;
