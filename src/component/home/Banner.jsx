import { FaCss3Alt, FaDev, FaFigma, FaHtml5, FaLinkedin, FaReact } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.postimg.cc/T2jdccy9/Whats-App-Image-2023-11-30-at-14-38-49-0c2d3860.jpg" className="max-w-sm rounded-3xl shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Welcome TO My Portfolio</h1>
            <p className="py-6 text-3xl font-bold ">Hello!!I am <span className="text-red-600">Shahina Akter Shima</span></p>
            <p className="text-xl font-bold">Let's introduce myself</p>
            <p>I am a web developer. I am good in frontend . But I am also exploring backend now . And I am trying how can I improve myself as a web developer</p>
            <div className="flex justify-between">
                <div>
                 <h2 className="text-3xl font-bold my-3 text-red-600">Find me</h2>
                 <div className="flex my-3 gap-2">
                     
                    <div className="p-3  shadow-md shadow-slate-500"> <a href="https://www.linkedin.com/in/shahina-akter-shima-5353052a3"><FaLinkedin className="text-3xl text-blue-500"></FaLinkedin></a></div>
                    <div className="p-3  shadow-md shadow-slate-500"> <a href="https://dev.to/shahinaaktershima"><FaDev className="text-3xl text-blue-500"></FaDev></a></div>
                 </div>

                </div>
                <div>
                 <h2 className="text-3xl font-bold my-3 text-red-600">Best skills on</h2>
                 <div className="flex my-3 gap-2">
                 <div className="p-3  shadow-md shadow-slate-500"> <FaFigma className="text-3xl text-blue-500"></FaFigma></div>
                 <div className="p-3  shadow-md shadow-slate-500"> <FaHtml5 className="text-3xl text-blue-500"></FaHtml5></div>
                 <div className="p-3  shadow-md shadow-slate-500"> <FaCss3Alt className="text-3xl text-blue-500"></FaCss3Alt></div>
                 <div className="p-3  shadow-md shadow-slate-500">  <FaReact className="text-3xl text-blue-500"></FaReact></div>
                   
                 </div>
                   
                    
                 </div>

                </div>
            </div>
           
          </div>
         
        </div>
     
    );
};

export default Banner;