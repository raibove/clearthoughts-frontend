import logo from '../../clearthoughts-logo2bg.png';
import { useNavigate } from "react-router-dom";

const Header = ()=>{

    let navigate = useNavigate();
    return(
        <div className='header'>
            <img src={logo} className='logo' onClick={()=>{navigate('../')}}/>
            {localStorage.getItem('userName') && <p className='username'>{localStorage.getItem('userName')}</p>}
        </div>
    )
}

export default Header;