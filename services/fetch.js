import axiosFetch from "../libs/config/axiosFech";

export const getEmpresasParaEstadosFinancieros = async () => {
  try {
    const data  = await axiosFetch();
    console.log(data)
    return data;
  } catch (error) {
    console.log("error.message :>> ", error.message);
  }
};