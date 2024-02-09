import PropTypes from 'prop-types';
import CustomTableRow from "./CustomTableRow";
import "./CustomTable.styles.css";
const CustomTable = ({ headerData, bodyData }) => {
    const header = Object.keys(headerData)
    return (
        <>
            <table>
                <thead className='table-head'>
                    <tr>
                        {
                            header.map((prop) => (
                                <th key={ prop }>{ prop }</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className='table-body'>
                    <CustomTableRow
                        data={ bodyData }
                    />
                </tbody>
            </table>
        </>
    )

}

CustomTable.propTypes = {
    headerData: PropTypes.object,
    bodyData: PropTypes.array
}


export default CustomTable;