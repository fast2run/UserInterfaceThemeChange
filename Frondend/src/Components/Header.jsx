import React,{useState,useEffect} from 'react'
import './css/all.css'
const Header = () => {

  const [theme,setTheme] = useState(false)
  
  const handleClick=()=>{
 setTheme(!theme)
}

  useEffect(()=>{
    if(theme==true){
    document.body.classList.add("dark");
      }else{
        document.body.classList.remove("dark");
      }
  })
  return (
    <>
    <section className='headerSection'>
        <h1>Project Allowcation Page</h1>
        <button onClick={handleClick}>{theme?"Light":"Dark"}</button>
        
    </section>
    <hr />
    </>
  )
}

export default Header