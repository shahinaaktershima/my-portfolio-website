
const Resume = () => {
  const downloadPDF=()=>{
   

    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1hkzXLDF2BwlDXjN7kOsPz3CD_xRWBMxN/view?usp=sharing'; // Replace with your file path
    link.download = 'resume.pdf'; // Replace with your desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
 
       return (
            <div>
              {/* <a download={''}>resume </a> */}
              {/* <button onClick={downloadPDF}>Download PDF</button> */}
             <button onClick={downloadPDF}>download</button>

              {/* <button id="downloadButton">Download PDF</button> */}


            </div>
          );
        };
        
      
        


export default Resume;