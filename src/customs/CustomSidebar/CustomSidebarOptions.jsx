import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
const CustomSidebarOptions = ({ data_user, opciones }) => {

    return (

        <div className="sidebar">
            <div className="perfil-usuario">
                <img src={ data_user.imgperfil } alt="" className="foto-usuario" />
                <div className="text-perfil nome-usuario">{
                    data_user.nombre + " " +
                    data_user.apellidoPaterno + " " +
                    data_user.apellidoMaterno
                }</div>
                <div className="text-perfil rol-usuario">{
                    data_user.tipoUsuario === "Sadministrador" ? "Super Administrador" :
                        data_user.tipoUsuario === "Administrador" ? "Medico" : "Soldado"
                }</div>
            </div>
            <div className="opciones-sidebar">
                {
                    opciones.map(
                        (opcion, index) => {
                            return (
                                <Link to={ opcion.to } key={ index }>
                                    <div className="opcion-sidebar">
                                        <div className="icon">
                                            { opcion.icon }
                                        </div>
                                        <div className="text-opcion">
                                            { opcion.text }
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

CustomSidebarOptions.propTypes = {
    data_user: PropTypes.object,
    opciones: PropTypes.array,
}

export default CustomSidebarOptions