import { FaCss3Alt, FaDev, FaHtml5, FaLinkedin, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

const About = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-col gap-10 justify-between">
    <img src="https://i.postimg.cc/T2jdccy9/Whats-App-Image-2023-11-30-at-14-38-49-0c2d3860.jpg" className="md:max-w-sm w-full rounded-3xl shadow-2xl" />
    <div>
    <div>
        <h2 className="text-3xl font-bold">Introduction:</h2>
        <h2 className="text-red-600 text-4xl font-bold">I am Shahina Akter shima</h2>
        <p>I am a student.I am also a web developer.I like to explore something different.still I AM learning.I like to be honest cause it gives me happiness</p>
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
    <div>
        <h2 className="text-3xl font-bold"> Contact Info:</h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 my-3 gap-2">
            <div className="px-5 py-8 shadow-md shadow-slate-500">
           Facebook: <a className="text-red-600 font-bold" href="https://www.facebook.com/jonakijui.jui/">Shahina Akter Shima</a>
            </div>
            <div className="px-5 py-8  shadow-md shadow-slate-500">
            Email:<a href="" className="text-red-600">shima421914@gmail.com</a>
            </div>
                     
                     <div className="p-3  shadow-md shadow-slate-500">
                        
                        
                         <a href="https://www.linkedin.com/in/shahina-akter-shima-5353052a3">LinkedIn<FaLinkedin className="text-3xl text-blue-500"></FaLinkedin></a></div>
                     <div className="p-3  shadow-md shadow-slate-500"> <a href="https://dev.to/shahinaaktershima">Dev.to<FaDev className="text-3xl text-blue-500"></FaDev></a></div>
                  </div>
        </div>
       
   
    </div>
  </div>
</div>
        </div>
    );
};

export default About;