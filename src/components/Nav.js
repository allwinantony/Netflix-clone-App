import React,{useState,useEffect} from 'react'
import "./Nav.css"

function Nav() {

    const [show,setShow] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>650){
                setShow(true);
            }
            else{
                setShow(false);
            }
        })
    },[])

  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img className='nav-img' src='https://cdn-icons-png.flaticon.com/512/5977/5977590.png'/>
    </div>
  )
}

export default Nav