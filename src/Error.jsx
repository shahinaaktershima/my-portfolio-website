import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="max-w-xl mx-auto my-20">
           <h2 className="text-3xl font-bold text-red-600">OPPPSSSSSSSSSS!!!!!!!!!!!!!there is nothing to show</h2>
           <img className="w-full h-[400px]" src="https://i.postimg.cc/fWCwLJB1/image.png" alt="" /> 

           <Link to='/'><button className="btn text-red-500 my-4 border-red-500">GO BACK TO HOME</button></Link>
        </div>
    );
};

export default Error;