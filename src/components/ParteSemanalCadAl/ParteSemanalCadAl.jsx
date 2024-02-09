import CustomInput from "../../customs/CustomInput/CustomInput"
import CustomButton from "../../customs/CustomButton/CustomButton"
import CustomTable from "../../customs/CustomTable/CustomTable"
// import "./ViewUser.styles.css";
import { soldierHeadersTable } from "../../utils/headersTable"


const ParteSemanalCadAl = () => {

    const data = [
        {
            "fecha": "03-NOV-23",
            "dependiente": "DPTO. VI - EDUCACIÓN",
            "unidad": "COL. MIL.",
            "grado": "CDTE.",
            "elon": "4TO. AM.",
            "nombresApellidos": "ALAN YACID CONDE GUTIÉRREZ",
            "diagnosticoIngreso": "VARICELA",
            "lugarInternacion": "REPOSO EN DOMICILIO",
            "fechaIngreso": "20-Oct-23",
            "situacionActual": "EN TRATAMIENTO",
            "especialidad": "VIRALES",
            "observaciones": "ACTUALMENTE CONTINÚA CON AISLAMIENTO DOMICILIARIO."
        },
        {
            "fecha": "03-NOV-23",
            "dependiente": "DPTO. VI - EDUCACIÓN",
            "unidad": "COL. MIL.",
            "grado": "CDTE.",
            "elon": "4TO. AM.",
            "nombresApellidos": "JORGE LUIS APAZA QUISPE",
            "diagnosticoIngreso": "VARICELA",
            "lugarInternacion": "REPOSO EN DOMICILIO",
            "fechaIngreso": "20-Oct-23",
            "situacionActual": "EN TRATAMIENTO",
            "especialidad": "VIRALES",
            "observaciones": "ACTUALMENTE CONTINÚA CON AISLAMIENTO DOMICILIARIO."
        },
    ]


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

export default ParteSemanalCadAl




