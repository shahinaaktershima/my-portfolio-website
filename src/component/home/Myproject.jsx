
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const Myproject = () => {
    return (
        <div className='md:h-[600px] lg:[400px] h-[650px] my-10 py-8'>
           <h2 className='text-center uppercase text-xl md:text-4xl font bold text-blue-600'> My three pinned project details</h2>
 
  <AwesomeSlider className='h-full  my-10'>
    
    <div className="hero h-full px-0 bg-base-200 md:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/QNJcSdR3/image.png" className="max-w-xs md:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="md:text-5xl text-xl  text-blue-600">My job project</h1>
      <p className="py-6 text-xl">In this project I explored and used react,tailwind,firebase,mongodb,express and nodejs</p>
     <div className='flex gap-3'> 
      <button className='btn bg-blue-600 text-neutral-100 font-bold'><a href="https://job-space-60860.web.app ">live link</a></button>
      <button className='btn bg-blue-600 text-neutral-100 font-bold'><a href="https://github.com/shahinaaktershima/assignment-11-client">Client code</a></button>
      <button className='btn bg-blue-600 text-neutral-100 font-bold'><a href="https://github.com/shahinaaktershima/assignment-11-server">Server code</a></button>
      
      </div>
    </div>
  </div>

       
    
    
    </div>
    <div className="hero h-full  bg-base-200 md:px-16">
  <div className="mx-auto hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/5NL1mPfD/image.png" className="max-w-xs md:max-w-sm  w-full rounded-lg shadow-2xl" />
    <div>
      <h1 className="md:text-5xl text-xl  text-blue-600">Tradeswift(TEAM PROJECTS)</h1>
      <p className="py-6 text-xl">Its an team project .In this project I explored and used next.js,mongodb,tailwind,vercel etc</p>
     <div className='flex gap-3'> 
     
      <button className='btn bg-blue-600 text-neutral-100 font-bold'><a href="https://tradeswift.vercel.app/">live link</a></button>
      <button className='btn bg-blue-600 text-neutral-100 font-bold'><a href="https://github.com/magiciansweb/Tradeswift">Client code</a></button>
      <button className='btn bg-blue-600 text-neutral-100 font-bold'><a href="https://github.com/magiciansweb/TRADESWIFT-SERVER">Server code</a></button>
      </div>
    </div>
  </div>
 </div>

    <div className="hero h-full  bg-base-200 md:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/x13JJZB4/6g-internet-connection-collage.jpg" className="max-w-xs md:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="md:text-5xl text-xl text-blue-600"> Hostel Management </h1>
      <p className="py-6 text-xl">In this project I explored and used react,tailwind,firebase,mongodb,express and nodejs</p>
     <div className='flex gap-3'> 
      <button className='btn bg-blue-600 text-neutral-100 font-bold'><a href="https://final-project-2-e4f67.web.app">live link</a></button>
      <button className='btn bg-blue-600 text-neutral-100 font-bold'><a href="https://github.com/shahinaaktershima/assignment-12-client">Client code</a></button>
      <button className='btn bg-blue-600 text-neutral-100 font-bold'><a href="https://github.com/shahinaaktershima/assignment-12">Server code</a></button>
      </div>
    </div>
  </div>  
    </div>
    
  </AwesomeSlider>

        </div>
    );
};

export default Myproject;