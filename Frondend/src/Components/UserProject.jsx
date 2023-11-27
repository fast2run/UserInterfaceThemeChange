import React, { useState } from 'react'
import './css/all.css'



function UserProject() {
    //const [formDataArr,setFromDataArr]=useState([])
    const [formData,setFromData] = useState(
        {
        projectName:'',
        workerName:'',
        startDate:'',
        dueDate:'',
        taskStatus:'',
    }
)
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFromData((prev)=>{
            return{...prev,[name]:value}
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
       
        console.log(formData);
     
}


  return (
    <>
    <section className='formSection'>
        <form onSubmit={handleSubmit}>
        <div className="inputField">
            <label>Project Name :</label>
            <input type="text" name='projectName' 
            
            placeholder='Project Name' onChange={handleChange} />
        </div>
        <div className="inputField">
            <label>Worker Name :</label>
            <input type="text" name='workerName' 
             value={formData.workerName}
            placeholder='Worker Name' onChange={handleChange} />
        </div>
        <div className="inputField">
            <label>Start Date:</label>
            <input type="text" name='startDate' 
             value={formData.startDate}
            placeholder='Start Date'  onChange={handleChange}/>
        </div>
        <div className="inputField">
            <label>Due Date :</label>
            <input type="text"  name='dueDate' 
             value={formData.dueDate}
            placeholder='Due Date' onChange={handleChange} />
        </div>
        <div className="inputField">
            <label>Task Status:</label>
            <input type="text" name = 'taskStatus'
             value={formData.taskStatus}
             placeholder='Task Status'  onChange={handleChange}/>
        </div>
        <div className='inputField'>
            <button type='submit'>ShowProjectAllowcate</button>
        </div>
        </form>
    </section>
   
    <section className='sameform'>


       <h1>Project Allowcatio</h1>      

         <p>{formData.projectName}</p>
        <p>{formData.workerName}</p>
        <p>{formData.startDate}</p>
        <p>{formData.dueDate}</p>
        <p>{formData.taskStatus}</p>
    
    </section>
    </>
  )
}

export default UserProject