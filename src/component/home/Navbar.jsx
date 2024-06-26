import { NavLink } from "react-router-dom";
import resume from "../../assets/Resume (36) (1).pdf"


const Navbar = () => {
  const downloadPDF=()=>{
  const link = document.createElement('a');
    link.href = resume; // Replace with your file path
    link.download = 'resume.pdf'; // Replace with your desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
 
    const navlinks=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About me</NavLink></li>
   
    <li><NavLink to='/experience'>Projects</NavLink></li>
    
    </>
    return (
        <div>
            <div className=" flex justify-around navbar ">
  <div className="navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="bg-slate-500 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white md:text-blue-600 font-bold text-3xl  rounded-box w-32">
        {
            navlinks
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">My portfolio</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-white md:text-blue-600 px-1">
      {
        navlinks
      }
    </ul>
  </div>
 
  <div className="navbar-end">
  <button className="btn text-blue-600 " onClick={downloadPDF}>Resume</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;