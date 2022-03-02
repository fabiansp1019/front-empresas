import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Popper from "@mui/material/Popper";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import Grid from '@mui/material/Grid';


import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import { alpha, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
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

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

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
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}))((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
));

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Listar_Empresas = () => {


  const [abiertoComentario, setAbiertoComentario] = useState(false);
  const [modificarClavesComentario, setModificarClavesComentario] = useState("");
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

  const classes = useStyles();

  if (loading) {
    return "loading";
  }
  if (error) {
    return <NoAutorizado />;
  }

  // console.log(data.empresas);


// popover para modificar el impuesto y las claves
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

// modificar comentario en el impuesto
  const modificarComentario = () => {
    // e.preventDefault();

    ModificarComentarioImpuesto({
      variables: { id: id_impComentario, comentario: comentario },
    });
    if (loadingComImp) {
      return "loading";
    }
    if (errorComImp) {
      return <NoAutorizado />;
    }
    // console.log(dataComImp);
  };

  const modificarClaves = () =>{

    modificarClavesEmpresas({
      variables: {
        id: idModificar,
        usuario: modificarClavesUsuario,
        contrasenna: modificarClavesClave,
        comentario: modificarClavesComentario,
      },
    });

    if (loadingModificarClaves) {
      return "loading";
    }
    if (errorModificarClaves) {
      return <NoAutorizado />;
    }
    // console.log(dataComImp);
 
  };



  return (
      <>
        {data.empresas.map((empresa, keyMayor) => {
          var claves = [];
          var impuesto = [];
          impuesto = empresa.responsabilidad;
          claves = empresa.claves;

          return (
            <Accordion key={keyMayor}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {empresa.razonSocial +
                    " NIT: " +
                    empresa.nit +
                    " CIUDAD: " +
                    empresa.ciudad}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>

                  <TreeView
                    className={classes.root}
                    defaultExpanded={["1"]}
                    defaultCollapseIcon={<MinusSquare />}
                    defaultExpandIcon={<PlusSquare />}
                    defaultEndIcon={<CloseSquare />}
                  >
                    <StyledTreeItem nodeId="1" label="Impuestos">
                      {impuesto.map((imp, key) => {
                        //contrasenna setAbiertoComentario modificarComentario(imp.id)
                        return (
                          <div key={key}>
                            <StyledTreeItem
                              nodeId={"10" + key}
                              label={imp.impuesto}
                            >
                              {abiertoComentario ? (
                                <>
                                  <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Comentario..."
                                    style={{ width: 200 }}
                                    onChange={(e) =>
                                      setComentario(e.target.value)
                                    }
                                  />
                                  <Button
                                    onClick={() => {
                                      setAbiertoComentario(false);
                                    }}
                                  >
                                    Cancelar
                                  </Button>
                                  <Button
                                    onClick={() => {
                                      modificarComentario();
                                      setAbiertoComentario(false);
                                    }}
                                  >
                                    Modificar
                                  </Button>
                                </>
                              ) : (
                                <Button
                                  onClick={() => {
                                    setIdImpComentario(imp.id);
                                    setAbiertoComentario(true);
                                  }}
                                >
                                  <CreateOutlinedIcon />
                                </Button>
                              )}
                              <StyledTreeItem
                                nodeId={"1" + key}
                                label={imp.comentario}
                              />
                            </StyledTreeItem>
                          </div>
                        );
                      })}
                    </StyledTreeItem>
                  </TreeView>

                  <TreeView
                    className={classes.root}
                    defaultExpanded={["1"]}
                    defaultCollapseIcon={<MinusSquare />}
                    defaultExpandIcon={<PlusSquare />}
                    defaultEndIcon={<CloseSquare />}
                  >
                    <StyledTreeItem nodeId="1" label="Claves">
                      {claves.map((clave, key) => {
                        //contrasenna comentario
                        return (
                          <div key={key}>
                            <StyledTreeItem
                              nodeId={"10" + key}
                              label={clave.entidad}
                            >
                              <Button onClick={(e)=>{
                                handleClick(e);
                                setIdModificar(clave.id);
                                setModificarClavesComentario(clave.comentario);
                                setModificarClavesClave(clave.contrasenna);
                                setModificarClavesUsuario(clave.usuario);
                              }}><CreateOutlinedIcon /> </Button>
                                <Popper id={id} open={open} anchorEl={anchorEl}>
                                  <Box
                                     sx={{
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      '& > :not(style)': {
                                        m: 1,
                                        width: 200,
                                        height: 300,
                                      },
                                    }}
                                  >
                                    <Paper elevation={24} >
                                      <FormGroup
                                      sx={{
                                        p: 3,
                                      }}
                                      >
                                      <Grid container spacing={1}>
                                        <Grid item xs={12} sm={12}>
                                        <TextField id="standard-basic" 
                                        value={modificarClavesUsuario}
                                        onChange={(e) =>{
                                          e.preventDefault();
                                          setModificarClavesUsuario(e.target.value);
                                        }
                                        }
                                        variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                        <TextField id="standard-basic" 
                                        value={modificarClavesClave}
                                        onChange={(e) =>{
                                          e.preventDefault();
                                          setModificarClavesClave(e.target.value)
                                        }
                                        }
                                        variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                        <TextField
                                          id="outlined-textarea"
                                          label="Comentario"
                                          value={modificarClavesComentario}
                                          onChange={(e) =>{
                                            e.preventDefault();
                                            setModificarClavesComentario(e.target.value)
                                          }
                                          }
                                          maxRows={5}
                                          multiline
                                        />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <Button onClick={()=> {
                                          modificarClaves()
                                          handleClick()
                                        }
                                          }><ThumbUpOutlinedIcon /></Button>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <Button onClick={handleClick}><ThumbDownAltOutlinedIcon/></Button>
                                        </Grid>
                                        </Grid>
                                      </FormGroup>
                                    </Paper>
                                  </Box>
                                </Popper>


                              <StyledTreeItem
                                nodeId={"1" + key}
                                label={"USUARIO: " + clave.usuario}
                                key={clave._id}
                              >
                              </StyledTreeItem>
                              <StyledTreeItem
                                nodeId={"2" + key}
                                label={"CONTRASEÑA: " + clave.contrasenna}
                                key={clave._id}
                              />
                              <StyledTreeItem
                                nodeId={"3" + key}
                                label={"comentario: " + clave.comentario}
                                key={clave._id}
                              />
                            </StyledTreeItem>
                          </div>
                        );
                      })}
                    </StyledTreeItem>
                  </TreeView>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </>
    
  );
};

export default Listar_Empresas;