import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
       
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
  <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About me</NavLink>
    
    <NavLink to='/experience'>Experiences</NavLink>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    
      
      <a href="https://www.facebook.com/jonakijui.jui/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      <a href="https://www.linkedin.com/in/shahina-akter-shima-5353052a3"><FaLinkedin className="text-2xl "></FaLinkedin></a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by Shahina Akter Shima</p>
  </aside>
</footer>  
       
    );
};

export default Footer;