import { createContext } from "react"
import { userData } from "../data/UserData";
import PropTypes from "prop-types";
import { GrLogout, GrUserSettings, GrUserAdd, GrUser } from "react-icons/gr";


const UserContext = createContext(null);


const UserProvider = ({ children }) => {
    let sidebarOptions = [];
    const dataSidebarType = {
        // CREAR CUENTAS - MODIFICAR LA INFOR - VER LA INFOR
        // CREAR ADMIN - MEDICOS
        // SUPER ADMIN NO PUEDE MODIFICAR NADA
        "sidebar-superadmin": [
            {
                to: "/perfil",
                icon: <GrUser />,
                text: "Perfil"
            },
            {
                to: "/crear-usuarios",
                icon: <GrUserAdd />,
                text: "Nuevo Personal"
            },
            {
                to: "/administrar-usuarios",
                icon: <GrUserSettings />,
                text: "Administrar Personal"
            },
            {
                to: "/login",
                icon: <GrLogout />,
                text: "Cerrar sesión"
            }
        ],
        // AGREGAR SOLDADOS - PACIENTES 
        // SOLO DE SU UNIDAD -- FILTRO FALTA

        "sidebar-admin": [
            {
                to: "/perfil",
                icon: <GrUser />,
                text: "Perfil"
            },
            {
                to: "/parte-semanal-soldados",
                icon: <GrUserAdd />,
                text: "Parte Semanal Soldados"
            },

            {
                to: "/parte-semanal-cadetes",
                icon: <GrUserAdd />,
                text: "Parte Semanal Cadetes"
            }
            ,
            {
                to: "/reportes",
                icon: <GrUserSettings />,
                text: "Reportes"
            },
            {
                to: "/login",
                icon: <GrLogout />,
                text: "Cerrar sesión"
            }
        ],
        // SOLDADO PUEDA VER SU REPORTE.... 
        "sidebar-user": [
            {
                to: "/perfil",
                icon: <GrUser />,
                text: "Perfil"
            },

            {
                to: "/login",
                icon: <GrLogout />,
                text: "Cerrar sesión"
            }
        ]

    }
    if (userData.tipoUsuario === "Sadministrador") {
        sidebarOptions = dataSidebarType["sidebar-superadmin"];
    }
    if (userData.tipoUsuario === "Administrador") {
        sidebarOptions = dataSidebarType["sidebar-admin"];
    }
    if (userData.tipoUsuario === "Usuario") {
        sidebarOptions = dataSidebarType["sidebar-user"];
    }
    return (
        <UserContext.Provider value={ [userData, sidebarOptions] }>
            { children }
        </UserContext.Provider>
    )
}


UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export { UserProvider };
export default UserContext;
