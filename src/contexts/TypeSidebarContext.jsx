import { createContext } from "react";
import PropTypes from "prop-types";

const TypeSidebarContext = createContext(null);


const TypeSidebarProvider = ({ children }) => {




    



    return (
        <TypeSidebarContext.Provider value={ dataSidebarType }>
            { children }
        </TypeSidebarContext.Provider>
    )
}

TypeSidebarProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { TypeSidebarProvider };
export default TypeSidebarContext;