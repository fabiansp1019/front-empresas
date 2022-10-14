import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import * as XLSX from "xlsx";
import LayoutPrivate from "../../../../components/Layoutprivate";
import Radio from "@material-ui/core/Radio";
import Alert from "@mui/material/Alert";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import libs from "../../../../libs/util";
import { useAuth } from "../../../../libs/auth";
import Nav_Estados_Financieros from "../../../../components/Empresas/estadosFinancieros/Nav_Estados_Financieros";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import cookie from "js-cookie";

export const AgregarGrupos = ({ empresaId }) => {
  const router = useRouter();
  const [datasend, setDatasend] = React.useState(false);
  const [grupos, setGrupos] = React.useState([]);


  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: "array" });

        /* DO SOMETHING WITH workbook HERE */
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];
        const datos = XLSX.utils.sheet_to_json(ws);
        // console.log(datos);
        resolve(datos);
      };
    });

    promise.then((x) => {
      setGrupos(x);
      // console.log(x);
    });
  };

  const sendData = async (e) => {
    e.preventDefault();

    if (
      grupos[0]?.clase?.toString().length == 1 &&
      grupos[0]?.grupo?.toString().length == 2
    ) {
      const token = cookie.get("__session");
      await axios({
        method: "post",
        url: libs.location() + "api/crearmasivogrupos",
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          grupos,
          empresaId,
        },
      });
    } else {
      document.getElementById("addGrupos").innerText =
        "Los datos no son validos, verifique que los datos sean correctos";
      setTimeout(() => {
        document.getElementById("addGrupos").innerText = "";
      }, 3000);
    }

    setDatasend(true);
  };

  function createData(clase, grupo, nombre) {
    return { clase, grupo, nombre };
  }

  const rows = grupos.map((d) => createData(d.clase, d.grupo, d.nombre));

  // console.log(rows)

  return (
    <div className="container">
      <div>
        <Input
          type="file"
          onChange={(e) => {
            const isNameOfOneImageRegEx = /.(xlsx)$/i;
            const extencionValida = isNameOfOneImageRegEx.test(
              e.target.files[0]?.name
            );
            if (extencionValida) {
              const file = e.target.files[0];
              readExcel(file);
            } else {
              document.getElementById("addGrupos").innerText =
                "Error documento no valido";
              setTimeout(() => {
                document.getElementById("addGrupos").innerText = "";
              }, 3000);
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          type="submit"
          onClick={sendData}
        >
          Send
        </Button>
      </div>
      AGREGAR GRUPOS
      <div id="addGrupos"></div>
      <div>
        <>
          {!datasend && (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">CLASE</TableCell>
                      <TableCell align="center">GRUPO</TableCell>
                      <TableCell align="center">NOMBRE</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.nombre}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="lefth">{row.clase}</TableCell>
                        <TableCell align="lefth">{row.grupo}</TableCell>
                        <TableCell align="lefth">{row.nombre}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </>

        {datasend && (
          <>
            <Alert severity="success">
              Los Grupos se han creado Exitosamente!.
            </Alert>
          </>
        )}
      </div>
    </div>
  );
};

export const AgregarCuentas = ({ empresaId }) => {
  const [cuentass, setCuentass] = React.useState([]);
  const [datasend, setDatasend] = React.useState(false);
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: "array" });

        /* DO SOMETHING WITH workbook HERE */
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];
        const datos = XLSX.utils.sheet_to_json(ws);
        // console.log(datos);
        resolve(datos);
      };
    });

    promise.then((x) => {
      setCuentass(x);
      // console.log(x);
    });
  };

  function createData(grupo, cuentas, nombre) {
    return { grupo, cuentas, nombre };
  }

  const rows = cuentass.map((d) => createData(d.grupo, d.cuentas, d.nombre));


  const sendData = async (e) => {
    e.preventDefault();

    if (
      cuentass[0]?.cuentas?.toString().length == 4 &&
      cuentass[0]?.grupo?.toString().length == 2
    ) {
      const token = cookie.get("__session");
      const res = await axios({
        method: "post",
        url: libs.location() + "api/crearcuentamasivo",
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          cuentass,
          empresaId,
        },
      });
    } else {
      document.getElementById("addGrupos").innerText =
        "Los datos no son validos, verifique que los datos sean correctos";
      setTimeout(() => {
        document.getElementById("addCuentas").innerText = "";
      }, 2000);
    }

    setDatasend(true);
    // console.log(res);
  };
  return (
    <div className="container">
      <div>
        <Input
          type="file"
          onChange={(e) => {
            const isNameOfOneImageRegEx = /.(xlsx)$/i;
            const extencionValida = isNameOfOneImageRegEx.test(
              e.target.files[0]?.name
            );
            if (extencionValida) {
              const file = e.target.files[0];
              readExcel(file);
            } else {
              document.getElementById("addCuentas").innerText =
                "Error documento no valido";
              setTimeout(() => {
                document.getElementById("addCuentas").innerText = "";
              }, 2000);
            }
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          onClick={sendData}
        >
          Send
        </Button>
        {/* <button onClick={testing} >testing</button> */}
      </div>
      AGREGAR CUENTAS
      <div id="addCuentas"></div>
      <div>
     
      <>
          {!datasend && (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">GRUPOS</TableCell>
                      <TableCell align="center">CUENTAS</TableCell>
                      <TableCell align="center">NOMBRE</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.nombre}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">{row.grupo}</TableCell>
                        <TableCell align="center">{row.cuentas}</TableCell>
                        <TableCell align="lefth">{row.nombre}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </>

        {datasend && (
          <>
            <Alert severity="success">
              Los Grupos se han creado Exitosamente!.
            </Alert>
          </>
        )}

      </div>
    </div>
  );
};

export const AgregarSubCuentas = ({ empresaId }) => {
  const [subCuentas, setSubCuentas] = React.useState([]);
  const [datasend, setDatasend] = React.useState(false);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: "array" });

        /* DO SOMETHING WITH workbook HERE */
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];
        const datos = XLSX.utils.sheet_to_json(ws);
        // console.log(datos);
        resolve(datos);
      };
    });

    promise.then((x) => {
      setSubCuentas(x);
      // console.log(x);
    });
  };


  function createData(cuenta, subcuenta, nombre) {
    return { cuenta, subcuenta, nombre };
  }

  const rows = subCuentas.map((d) => createData(d.cuenta, d.subcuenta, d.nombre));

  const sendData = async (e) => {
    e.preventDefault();

    if (
      subCuentas[0]?.cuenta?.toString().length == 4 &&
      subCuentas[0]?.subcuenta?.toString().length == 6
    ) {
      const token = cookie.get("__session");
      const res = await axios({
        method: "post",
        url: libs.location() + "api/crearsubcuentamasivo",
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          subCuentas,
          empresaId,
        },
      });
    } else {
      document.getElementById("addSubCuentas").innerText =
        "Los datos no son validos, verifique que los datos sean correctos";
      setTimeout(() => {
        document.getElementById("addSubCuentas").innerText = "";
      }, 3000);
    }
    setDatasend(true);
  };
  return (
    <div className="container">
      <div>
        <Input
          type="file"
          onChange={(e) => {
            const isNameOfOneImageRegEx = /.(xlsx)$/i;
            const extencionValida = isNameOfOneImageRegEx.test(
              e.target.files[0]?.name
            );
            if (extencionValida) {
              const file = e.target.files[0];
              readExcel(file);
            } else {
              document.getElementById("addSubCuentas").innerText =
                "Error documento no valido";
              setTimeout(() => {
                document.getElementById("addSubCuentas").innerText = "";
              }, 2000);
            }
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          onClick={sendData}
        >
          Send
        </Button>
        {/* <button onClick={testing} >test</button> */}
      </div>
      AGREGAR SUBCUENTA
      <div id="addSubCuentas"></div>
      
      <div>
      <>
          {!datasend && (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">CUENTA</TableCell>
                      <TableCell align="center">SUBCUENTA</TableCell>
                      <TableCell align="center">NOMBRE</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.nombre}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">{row.cuenta}</TableCell>
                        <TableCell align="center">{row.subcuenta}</TableCell>
                        <TableCell align="lefth">{row.nombre}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </>

        {datasend && (
          <>
            <Alert severity="success">
              Los Grupos se han creado Exitosamente!.
            </Alert>
          </>
        )}
      </div>
      
    </div>
  );
};

export const AgregarAuxiliares = ({ empresaId }) => {
  const [auxiliar, setAuxiliar] = React.useState([]);
  const [datasend, setDatasend] = React.useState(false);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: "array" });

        /* DO SOMETHING WITH workbook HERE */
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];
        const datos = XLSX.utils.sheet_to_json(ws);
        // console.log(datos);
        resolve(datos);
      };
    });

    promise.then((x) => {
      setAuxiliar(x);
      // console.log(x);
    });
  };

  function createData(clase, grupo, cuenta, subcuenta, auxiliares, tercero, nombre, saldo) {
    return { clase, grupo, cuenta, subcuenta, auxiliares, tercero, nombre, saldo };
  }

  const rows = auxiliar.map((d) => createData(d.clase, d.grupo, d.cuenta, d.subcuenta, d.auxiliares, d.tercero, d.nombre, d.saldo));

  const sendData = async (e) => {
    e.preventDefault();

    if (
      auxiliar[0]?.cuenta?.toString().length == 4 &&
      auxiliar[0]?.subcuenta?.toString().length == 6 &&
      auxiliar[0]?.auxiliares?.toString().length == 9 &&
      auxiliar[0]?.clase?.toString().length == 1 &&
      auxiliar[0]?.grupo?.toString().length == 2
    ) {
      const token = cookie.get("__session");
      const res = await axios({
        method: "post",
        url: libs.location() + "api/crearauxiliarmasivo",
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          auxiliar,
          empresaId,
        },
      });
    } else {
      document.getElementById("addSubCuentas").innerText =
        "Los datos no son validos, verifique que los datos sean correctos";
      setTimeout(() => {
        document.getElementById("addSubCuentas").innerText = "";
      }, 3000);
    }
    setDatasend(true);
  };
  return (
    <div className="container">
      <div>
        <Input
          type="file"
          onChange={(e) => {
            const isNameOfOneImageRegEx = /.(xlsx)$/i;
            const extencionValida = isNameOfOneImageRegEx.test(
              e.target.files[0]?.name
            );
            if (extencionValida) {
              const file = e.target.files[0];
              readExcel(file);
            } else {
              document.getElementById("addGrupos").innerText =
                "Error documento no valido";
              setTimeout(() => {
                document.getElementById("addGrupos").innerText = "";
              }, 2000);
            }
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          onClick={sendData}
        >
          Send
        </Button>
        {/* <button onClick={testing} >test </button> */}
      </div>
      AUXILIARES
      <div id="addSubCuentas"></div>
      <div>
      <>
          {!datasend && (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">CLASE</TableCell>
                      <TableCell align="center">GRUPO</TableCell>
                      <TableCell align="center">CUENTA</TableCell>
                      <TableCell align="center">SUBCUENTA</TableCell>
                      <TableCell align="center">AUXILIARES</TableCell>
                      <TableCell align="center">TERCERO</TableCell>
                      <TableCell align="center">NOMBRE</TableCell>
                      <TableCell align="center">SALDO</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.nombre}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">{row.clase}</TableCell>
                        <TableCell align="center">{row.grupo}</TableCell>
                        <TableCell align="lefth">{row.cuenta}</TableCell>
                        <TableCell align="lefth">{row.subcuenta}</TableCell>
                        <TableCell align="lefth">{row.auxiliares}</TableCell>
                        <TableCell align="lefth">{row.tercero}</TableCell>
                        <TableCell align="lefth">{row.nombre}</TableCell>
                        <TableCell align="right">{row.saldo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </>

        {datasend && (
          <>
            <Alert severity="success">
              Los Grupos se han creado Exitosamente!.
            </Alert>
          </>
        )}
      </div>
    </div>
  );
};

const agregar = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  // const { getAuthHeaders } = useAuth();
  const { query } = useRouter();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <LayoutPrivate nav={<Nav_Estados_Financieros />}>
      <div>
        <div>
          <Radio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
          />
          <Radio
            checked={selectedValue === "b"}
            onChange={handleChange}
            value="b"
          />
          <Radio
            checked={selectedValue === "c"}
            onChange={handleChange}
            value="c"
            color="default"
          />
          <Radio
            checked={selectedValue === "d"}
            onChange={handleChange}
            value="d"
            color="default"
          />
        </div>
        <div>
          {selectedValue === "a" && <AgregarGrupos empresaId={query.id} />}
          {selectedValue === "b" && <AgregarCuentas empresaId={query.id} />}
          {selectedValue === "c" && <AgregarSubCuentas empresaId={query.id} />}
          {selectedValue === "d" && <AgregarAuxiliares empresaId={query.id} />}
        </div>
      </div>
    </LayoutPrivate>
  );
};

export default agregar;
