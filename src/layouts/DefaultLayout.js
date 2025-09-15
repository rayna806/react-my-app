import { NavLink, Outlet } from "react-router";

function DefaultLayout() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/done">Done List</NavLink></li>
                        <li><NavLink to="/aboutus">About Us</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export { DefaultLayout };

