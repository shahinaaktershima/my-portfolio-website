import { FaCss3Alt, FaDev, FaFigma, FaHtml5, FaLinkedin, FaReact } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.postimg.cc/T2jdccy9/Whats-App-Image-2023-11-30-at-14-38-49-0c2d3860.jpg" className="md:max-w-sm max-w-xs w-full rounded-3xl shadow-2xl" />
          <div>
            <h1 className="md:text-5xl text-xl font-bold">Welcome To My Portfolio</h1>
            <p className="py-6 md:text-3xl text-xl font-bold ">Hello!!I am <span className="text-blue-600">Shahina Akter Shima</span></p>
            <p className="text-xl font-bold">Lets introduce myself</p>
            <p>I am a web developer. I am good in frontend . But I am also exploring backend now . And I am trying how can I improve myself as a web developer</p>
            <div className="flex justify-between">
                <div>
                 <h2 className="md:text-3xl text-xl font-bold my-3 text-blue-600">Find me</h2>
                 <div className="flex flex-row my-3 gap-2">
                     
                    <div className="p-3  shadow-md shadow-slate-500"> <a href="https://www.linkedin.com/in/shahina-akter-shima-5353052a3"><FaLinkedin className="text-3xl text-blue-500"></FaLinkedin></a></div>
                    <div className="p-3  shadow-md shadow-slate-500"> <a href="https://dev.to/shahinaaktershima"><FaDev className="text-3xl text-blue-500"></FaDev></a></div>
                 </div>

                </div>
                <div>
                 <h2 className="md:text-3xl text-xl font-bold my-3 text-blue-600">Best skills on</h2>
                 <div className="grid grid-cols-4 my-3 gap-2">
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