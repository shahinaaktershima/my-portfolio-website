import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

const About = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-col gap-10 justify-between">
    <img src="src/assets/WhatsApp Image 2023-11-30 at 14.38.49_0c2d3860.jpg" className="max-w-sm rounded-3xl shadow-2xl" />
    <div>
    <div>
        <h2 className="text-3xl font-bold">Introduction:</h2>
        <h2 className="text-red-600 text-4xl font-bold">I am Shahina Akter shima</h2>
        <h2>I am a student.I am also a web developer.I like to explore something different.still I AM learning.I like to be honest cause it gives me happiness</h2>
    </div>
    <div>
        <h2 className="text-3xl font-bold">Education:</h2>
        <h2>Current: <span className="text-red-600">BSc. Honors </span></h2>
        <p>Course: <span className="text-red-600">Computer Science and Engineering</span></p>
           <p>Start-date: <span className="text-red-600" >01-02-2022</span></p>
           <p>Expected end date: <span className="text-red-600">01-01-2025</span></p>
    </div>
    <div>
        <h2 className="text-3xl font-bold"> Skills:</h2>
        <p>I know about :
        <div className="flex my-3 gap-2">
                 
                 <div className="p-3  shadow-md shadow-slate-500"> 
                 <h2>Html:5</h2>
                 <FaHtml5 className="text-3xl text-blue-500"></FaHtml5></div>
                 <div className="p-3  shadow-md shadow-slate-500"> 
                 <h2>Css</h2>
                 
                 <FaCss3Alt className="text-3xl text-blue-500"></FaCss3Alt></div>
                 <div className="p-3  shadow-md shadow-slate-500">  
                 <h2>React</h2>
                 <FaReact className="text-3xl text-blue-500"></FaReact></div>
                 <div className="p-3  shadow-md shadow-slate-500">  
                 <h2>Tailwind</h2>
                <BiLogoTailwindCss className="text-3xl text-blue-500"></BiLogoTailwindCss></div>
                   
                 </div>
                   
        </p>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;