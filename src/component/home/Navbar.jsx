import { NavLink } from "react-router-dom";


const Navbar = () => {
  const downloadPDF=()=>{
  const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1lnTXb5IqgjWDLWwkFP60uzuKvPwiHHwP/view?usp=sharing'; // Replace with your file path
    link.download = 'resume.pdf'; // Replace with your desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
 
    const navlinks=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About me</NavLink></li>
    <li> <button onClick={downloadPDF}>download</button></li>
    <li><NavLink to='/experience'>experinces</NavLink></li>
    <li><NavLink to='/contact'>contact</NavLink></li>
    </>
    return (
        <div>
            <div className=" flex justify-around navbar bg-base-100">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navlinks
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">My portfolio</a>
  </div>
  <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navlinks
      }
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;