import Header from "../Header";
import  Posts from "../Posts.js";
import  Sidebar from "../Sidebar.js";
import './home.css';


export default function Home() {
  return (
    <>
      <Header />
      <div className='home'>
      <Sidebar/>
        <Posts/>
        
        </div>
     
    </>
  );
}
