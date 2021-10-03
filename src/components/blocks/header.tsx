import { usedTypedSelector } from '../../hooks/useTypedSelector';
import Profile from '../Profile'
import logo from '../../logo-steam.png';

const Header: React.FC = () => {
    const { isFetching } = usedTypedSelector(state => state.item);
    return (
        <nav className="header">
            <div className="content">
                <div className="header-wrap">
                    <div className="header-logo">
                        <img src={logo} height="50px" width="50px" alt="" />
                        <span className="header-logo-text">STEAM-INVENTORY</span>
                    </div>
                    <div className="header-profile">
                        {isFetching ? <Profile /> : []}
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Header
