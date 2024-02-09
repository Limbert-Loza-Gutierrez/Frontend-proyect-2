import CustomInput from "../../customs/CustomInput/CustomInput"
import CustomButton from "../../customs/CustomButton/CustomButton"
import CustomTable from "../../customs/CustomTable/CustomTable"
// import "./ViewUser.styles.css";
import { soldierHeadersTable } from "../../utils/headersTable"


const ParteSemanalSoldados = () => {


    const data = [{
        "fecha": "2021-10-10",
        "dependiente": "DPTO. III - OPS",
        "unidad": "ESCOMBOL",
        "grado": "SLDO.",
        "elon": "2DO. ELON/23",
        "nombresApellidos": "EDWIN PEDRO MAMANI HUALLPA",
        "diagnosticoIngreso": "PIODERMITIS",
        "lugarInternacion": "SANIDAD OPERATIVA (ESCONBOL)",
        "fechaIngreso": "28-Oct-23",
        "situacionActual": "EN TRATAMIENTO",
        "especialidad": "DERMATOLÓGICO",
        "observaciones": "NINGUNO",
    },
    {
        "fecha": "2021-10-10",
        "dependiente": "DPTO. III - OPS",
        "unidad": "ESCOMBOL",
        "grado": "SLDO.",
        "elon": "2DO. ELON/23",
        "nombresApellidos": "EDWIN PEDRO MAMANI HUALLPA",
        "diagnosticoIngreso": "PIODERMITIS",
        "lugarInternacion": "SANIDAD OPERATIVA (ESCONBOL)",
        "fechaIngreso": "23-Oct-23",
        "situacionActual": "EN TRATAMIENTO",
        "especialidad": "DERMATOLÓGICO",
        "observaciones": "NINGUNO",
    },
    {
        "fecha": "2021-10-10",
        "dependiente": "DPTO. III - OPS",
        "unidad": "ESCOMBOL",
        "grado": "SLDO.",
        "elon": "2DO. ELON/23",
        "nombresApellidos": "EDWIN PEDRO MAMANI HUALLPA",
        "diagnosticoIngreso": "PIODERMITIS",
        "lugarInternacion": "SANIDAD OPERATIVA (ESCONBOL)",
        "fechaIngreso": "18-Oct-23",
        "situacionActual": "EN TRATAMIENTO",
        "especialidad": "DERMATOLÓGICO",
        "observaciones": "NINGUNO",
    },
    {
        "fecha": "2021-10-10",
        "dependiente": "DPTO. III - OPS",
        "unidad": "ESCOMBOL",
        "grado": "SLDO.",
        "elon": "2DO. ELON/23",
        "nombresApellidos": "EDWIN PEDRO MAMANI HUALLPA",
        "diagnosticoIngreso": "PIODERMITIS",
        "lugarInternacion": "SANIDAD OPERATIVA (ESCONBOL)",
        "fechaIngreso": "29-Oct-23",
        "situacionActual": "EN TRATAMIENTO",
        "especialidad": "DERMATOLÓGICO",
        "observaciones": "NINGUNO",
    }]
    return (
        <main className=" window-content user-create-box">
            <div className="search_elements">
                <CustomInput
                    placeholder="Inserte Numero de Identificacion"
                    type="number"
                />
                <CustomButton
                    content="Buscar"
                />
            </div>
            <CustomTable
                headerData={ soldierHeadersTable }
                bodyData={ data }
            />
        </main >
    )
}

export default ParteSemanalSoldados




