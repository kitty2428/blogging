import './Header.css';
import Wallpaper from './wp2.jpg';

export default function Header() {
  return (
    <><br/>
    <div className='header'>
    <div className='headertitle'>
        <div className='titlesm'> Explore & Learn  </div>
        <div className='titlelg'>Blog World</div>
        </div>
    <img className='headerimg' src={Wallpaper} alt='wallpaper'/>
    </div>
    </>
  )
}
