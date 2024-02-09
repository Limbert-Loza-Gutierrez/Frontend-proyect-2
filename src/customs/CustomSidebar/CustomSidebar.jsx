import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import CustomSidebarOptions from './CustomSidebarOptions';
import './CustomSidebar.styles.css'

const CustomSidebar = () => {
    const data = useContext(UserContext);
    const data_user = data[0]
    const opciones = data[1]
    return (
        <>
            <CustomSidebarOptions data_user={ data_user }
                opciones={ opciones } />
        </>
    )
}

export default CustomSidebar