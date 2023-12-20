import { useState } from "react";


const Contact = () => {
    




  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData); 
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
   <div className="py-10  mt-16">
   
    <h2 className="text-center text-4xl text-blue-700 mt-4">Contact with me</h2>
     <form className="md:w-[400px] sm:w-full px-5 mx-auto" onSubmit={handleSubmit}>
      <input className="w-full my-3 rounded-sm px-3"
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      /> <br />
      <input
        type="email"
        className="w-full rounded-sm px-3"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      /> <br />
      <textarea className="w-full my-3 rounded-sm px-3"
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea> <br />
      <button className="btn bg-blue-700  w-full my-2 rounded-sm" type="submit">Submit</button>
    </form>
   </div>
  );
};



export default Contact;