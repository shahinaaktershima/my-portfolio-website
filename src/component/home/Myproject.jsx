
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const Myproject = () => {
    return (
        <div className='max-h-[500px] my-10'>
           <h2 className='text-center uppercase text-4xl font bold text-red-600'> My three pinned project details</h2>
 
  <AwesomeSlider className='h-[400px] my-3'>
    
    <div className="hero h-full  bg-base-200 md:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/QNJcSdR3/image.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-red-600">My job project</h1>
      <p className="py-6 text-xl">In this project I explored and used react,tailwind,firebase,mongodb,express and nodejs</p>
     <div className='flex gap-3'> <button className='btn text-black font-bold bg-red-600'><a href="https://github.com/shahinaaktershima/assignment-11-client">Github Code link</a></button>
      <button className='btn bg-red-600 text-black font-bold'><a href="https://job-space-60860.web.app ">live link</a></button></div>
    </div>
  </div>

       
    
    
    </div>
    <div className="hero h-full  bg-base-200 md:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/DKH5bCV/smiley-female-volunteer-friends-holding-food-donations.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-red-600">Donation Campaign</h1>
      <p className="py-6 text-xl">In this project I explored and used react,tailwind,js</p>
     <div className='flex gap-3'> <button className='btn text-black font-bold bg-red-600'><a href="https://github.com/shahinaaktershima/assignment-8">Github Code link</a></button>
      <button className='btn bg-red-600 text-black font-bold'><a href="https://65147389998c23245ae7ee78--extraordinary-pithivier-5035a7.netlify.app">live link</a></button></div>
    </div>
  </div>
 </div>

    <div className="hero h-full  bg-base-200 md:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/x13JJZB4/6g-internet-connection-collage.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-red-600"> Brand shop project</h1>
      <p className="py-6 text-xl">In this project I explored and used react,tailwind,firebase,mongodb,express and nodejs</p>
     <div className='flex gap-3'> <button className='btn text-black font-bold bg-red-600'><a href="https://github.com/shahinaaktershima/assignment-10-client">Github Code link</a></button>
      <button className='btn bg-red-600 text-black font-bold'><a href="https://brand-shop-21630.web.app">live link</a></button></div>
    </div>
  </div>  
    </div>
    
  </AwesomeSlider>

        </div>
    );
};

export default Myproject;