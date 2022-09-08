import './topbar.css';
import Profile from './mangr.jpg'
import { NavLink } from 'react-router-dom';
import Logo1 from './b1.jpg'
import Logo2 from './c1.png'


export default function Topbar() {
  return (
    <div className='top'>
       <div className='topleft'>
       <img  className='topleftimg' src={Logo1} alt='Logo2'/>
       <img  className='topleftimg1' src={Logo2} alt='Logo2'/>
       </div>
       <div className='topcenter'>
        <ul>
            <li className='topitem'><NavLink className='link' to='/'>HOME</NavLink></li>
            <li className='topitem'><NavLink className='link' to='about'>ABOUT</NavLink></li>
            <li className='topitem'><NavLink className='link' to='write'>WRITE</NavLink></li>
            <li className='topitem'><NavLink className='link' to='contact'>CONTACT</NavLink></li>
        </ul>
       </div>
       <div className='topright'>
        <img className='topimg' src={Profile} alt='profile' width='30px' height='30px'/>
        <ul>
        <li className='rightitem'>Login</li>
        <li className='rightitem'>Register</li>
        </ul>
       </div>
    </div>
  )
}
