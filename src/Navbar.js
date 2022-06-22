import trollface from "./images/Troll Face.png";

function Navbar(){
    return(
        <div className="navbar">
            <img src = {trollface} className="navbar-logo" alt=""/>
            <h2> MemeGenerator </h2>
        </div>
    )
}


export default Navbar;