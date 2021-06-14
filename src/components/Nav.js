import { useContext } from 'react'
import { ContextAPI } from '../ContextAPI';

function Nav() {

    const { usersList} = useContext(ContextAPI);
    return (
        <div >
            <h1>Data Table</h1>
            <h3>Total Number Of Data: {usersList.total}</h3>
            </div>
    )
}

export default Nav;