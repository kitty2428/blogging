import { NavLink } from 'react-router-dom';
import './Post.css';
import Postimg from './music.jpg';

export default function Post() {
  return (
   <>
    <div className='post'>
    <NavLink to='/single' className='link'>
<img className='postimg' src={Postimg} alt='postImage'/>
</NavLink>
   <div className='postinfo'>
   <div className='postcats'>
    <span className='postcat'>Music</span>
    <span className='postcat'>Entertainment</span>
   </div>
   <span className='posttitle'>
   Amet lorem ipsum dolor sit 
   </span>
<hr/>
<span className='postdate'>Just Now</span>
    </div>
    </div>
   </>
  )
}
