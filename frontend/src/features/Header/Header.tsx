import Nav from "../Nav/Nav.tsx";

import lady from "../../assets/lady-of-the-lake.png";

function Header() {
    return <header>
        <div>
            <img src={lady} className="w-3xs"/>
            <div>
                <h1>Man's Search for Reading</h1>
            <p>Take up and read.</p>
            </div>
        </div>

        <Nav />
        
    </header>
}

export default Header;