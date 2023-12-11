import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="max-w-xl mx-auto my-20">
           <h2 className="text-3xl font-bold text-red-600">OPPPSSSSSSSSSS!!!!!!!!!!!!!there is nothing to show</h2>
           <img className="w-full h-[400px]" src="https://i.postimg.cc/fWCwLJB1/image.png" alt="" /> 

           <button className="btn text-red-500 my-4 border-red-500"><Link to='/'>GO BACK TO HOME</Link></button>
        </div>
    );
};

export default Error;