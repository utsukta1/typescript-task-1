import { NavLink, Outlet } from "react-router-dom";
import "./index.css"

function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="links">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/toggle'}>Task 1</NavLink >
                    <NavLink to={'/tasktwo'}>Task 2</NavLink >
                    <NavLink to={'/taskthree'}>Task 3</NavLink >
                    <NavLink to={'/taskfour'}>Task 4</NavLink >
                    <NavLink to={'/taskfive'}>Task 5</NavLink >
                    <NavLink to={'/tasksix'}>Task 6</NavLink >

                </div>

                <main className="content">
                    <Outlet />
                </main>

            </div>



        </>
    )
}
export default Navbar;