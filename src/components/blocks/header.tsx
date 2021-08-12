import logo from '../../logo-steam.png'

const Header: React.FC = () => {
    return(
        <nav className="navbar-header navbar-fixed-top">
            <div className="content">
                <div className="logo">
                <img src={logo} height="50px" width="50px" alt=""/>
                <span className="logo-text">STEAM-INVENTORY</span>
                </div>
                <i className="fab fa-steam-square"></i>
            </div>
        </nav>
    )
        
}

export default Header
