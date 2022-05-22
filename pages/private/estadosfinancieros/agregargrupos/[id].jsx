import React from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import LayoutPrivate from "../../../../components/Layoutprivate";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import Nav_Estados_Financieros from "../../../../components/Empresas/Nav_Estados_Financieros";

export const AgregarGrupos = () => {
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
      console.log(x);
    });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "post",
      url: "http://localhost:4000/api/crearmasivogrupos",
      headers: {
        authorization: window.localStorage.getItem("loggedApp"),
      },
      data: {
        grupos,
      },
    });

    console.log(res.data);
  };
  return (
    <div className="container">
      <div>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
        <input type="submit" onClick={sendData} />
      </div>
      AGREGAR GRUPOS
      <div>
        <table id="wrapper" className="t-unica-scroll">
          <thead>
            <tr>
              <th>clase</th>
              <th>grupo</th>
              <th>nombre</th>
            </tr>
          </thead>
          <tbody>
            {grupos.map((d, key) => (
              <tr key={key}>
                {/* <td>{key + 1}</td> */}
                <td>{d.clase}</td>
                <td>{d.grupo}</td>
                <td>{d.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const AgregarCuentas = () => {
  const [cuentass, setCuentass] = React.useState([]);

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
      console.log(x);
    });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "post",
      url: "http://localhost:4000/api/crearcuentamasivo",
      headers: {
        authorization: window.localStorage.getItem("loggedApp"),
      },
      data: {
        cuentass,
      },
    });

    console.log(res);
  };
  return (
    <div className="container">
      <div>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
        <input type="submit" onClick={sendData} />
      </div>
      AGREGAR CUENTAS
      <div>
        <table id="wrapper" className="t-unica-scroll">
          <thead>
            <tr>
              <th>grupo</th>
              <th>cuenta</th>
              <th>nombre</th>
            </tr>
          </thead>
          <tbody>
            {cuentass.map((d, key) => (
              <tr key={key}>
                {/* <td>{key + 1}</td> */}
                <td>{d.grupo}</td>
                <td>{d.cuentas}</td>
                <td>{d.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const AgregarSubCuentas = () => {
  const [subCuentas, setSubCuentas] = React.useState([]);

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
      console.log(x);
    });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "post",
      url: "http://localhost:4000/api/crearsubcuentamasivo",
      headers: {
        authorization: window.localStorage.getItem("loggedApp"),
      },
      data: {
        subCuentas,
      },
    });
  };
  return (
    <div className="container">
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      AGREGAR SUBCUENTA
      <input type="submit" onClick={sendData} />
      <table id="wrapper" className="t-unica-scroll">
        <thead>
          <tr>
            <th>cuenta</th>
            <th>subcuenta</th>
            <th>nombre</th>
          </tr>
        </thead>
        <tbody>
          {subCuentas.map((d, key) => (
            <tr key={key}>
              {/* <td>{key + 1}</td> */}
              <td>{d.cuenta}</td>
              <td>{d.subcuenta}</td>
              <td>{d.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const AgregarAuxiliares = () => {
  const [auxiliar, setAuxiliar] = React.useState([]);

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

  const sendData = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "post",
      url: "http://localhost:4000/api/crearauxiliarmasivo",
      headers: {
        authorization: window.localStorage.getItem("loggedApp"),
      },
      data: {
        auxiliar,
      },
    });
  };
  return (
    <div className="container">
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      <input type="submit" onClick={sendData} />
      AUXILIARES
      <table id="wrapper" className="t-unica-scroll">
        <thead>
          <tr>
            <th>clase</th>
            <th>grupo</th>
            <th>cuenta</th>
            <th>subcuenta</th>
            <th>auiliar</th>
            <th>nombre</th>
            <th>tercero</th>
            <th>saldo</th>
          </tr>
        </thead>
        <tbody>
          {auxiliar.map((d, key) => (
            <tr key={key}>
              {/* <td>{key + 1}</td> */}
              <td>{d.clase}</td>
              <td>{d.grupo}</td>
              <td>{d.cuenta}</td>
              <td>{d.subcuenta}</td>
              <td>{d.auxiliares}</td>
              <td>{d.nombre}</td>
              <td>{d.tercero}</td>
              <td>{d.saldo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const agregar = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

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
          {selectedValue === "a" && <AgregarGrupos />}
          {selectedValue === "b" && <AgregarCuentas />}
          {selectedValue === "c" && <AgregarSubCuentas />}
          {selectedValue === "d" && <AgregarAuxiliares />}
        </div>
      </div>
    </LayoutPrivate>
  );
};

export default agregar;
