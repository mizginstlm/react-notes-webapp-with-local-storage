import React ,{useState} from 'react';
import { useNavigate,useLocation,Link, Navigate ,useHistory} from "react-router-dom"
import { useAuth } from '../contexts/AuthContext';


const Header = ({ handleToggleDarkMode }) => {
	const location = useLocation();
	const navigate= useNavigate()
const [error,setError] = useState('')
const {logout} = useAuth();
	async function handleLogOut(){
setError('');
try {
	await logout();
	navigate.push("/login")
} catch{
	setError("Failed to Log Out")
}
	}
	return (
		<>
		
		<div className='header'>
			<h1>Notes</h1>
			<div className='headerButtons'>
			<button onClick={() =>handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className='save'>
				Toggle Mode
			</button>
			
			
			
			
			{location.pathname == "/home"|| location.pathname == "/home/"?
			<div className='spanLogout'>
				<button  onClick={handleLogOut}  className='save'>
				Log Out
			</button>
			
			<button className='save'>
				<Link style= {{textDecoration: 'none',color:'black'}} to='/updateProfile' >Update Profile</Link>			
			</button>

			 {error && <span className="spanC">{error}</span>}
			 </div>:
			<div></div>
			}
			</div>
			
		</div>
		
		</>
	);
};

export default Header;