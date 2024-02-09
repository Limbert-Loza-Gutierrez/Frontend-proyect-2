import { Outlet } from 'react-router-dom';
import CustomSidebar from '../customs/CustomSidebar/CustomSidebar';

const Layout = () => {
    return (
        <>
            <CustomSidebar />
            <Outlet />
        </>
    )
}

export default Layout