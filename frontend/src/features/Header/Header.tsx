import Nav from "../Nav/Nav.tsx";

import lady from "../../assets/lady-of-the-lake.png";

function Header() {
    return <header className="flex flex-row">
        <div className="flex flex-row mr-auto gap-3">
            <img src={lady} className="size-20 object-contain"/>
            <div>
                <h1>Man's Search for Reading</h1>
            <p>Take up and read.</p>
            </div>
        </div>

        <Nav />
        
    </header>
}

export default Header;