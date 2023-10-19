import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function TaskBoard() {

    const [todo,setTodo]=useState([])//all tasks will be stored inside this array and using map we will traverse through each task and display it.
    const [inputvalue,setInputvalue]=useState('')
    function addtodo(){
           //agar input field m kuch v nahi likhe and fir v add button par clcik kar diye to usko handle karne k liye below code hai
           if(inputvalue==='') return;
           //agar khali nahi h, usme kuch task likha hai,then below codes will execute
           setTodo([...todo,inputvalue])
           setInputvalue('')//don't give space into this. otherwise it will consider space as a input and execeute for this also considering as a input

    }

    function removetodo(index){
         const updatedTodo=todo.filter((item,i)=>{
             return i!==index;
         })
         setTodo(updatedTodo)
    }

  return (
    <div>
      <center><h1 style={{color:'white',marginTop:'5rem',marginBottom:'2rem',backgroundColor:"green",width:"90%"}}>TaskBoard</h1></center>
      <center><div>
      <input type='text' onClick={addtodo} onChange={(e)=>setInputvalue(e.target.value)}></input>
      <button onClick={(addtodo)}>Add+</button>
    
      </div></center>  <br></br>
  
      <center><div style={{backgroundColor:'white',color:"black",height:'10rem',width:"40%"}}>
        
        <div style={{height:"2rem",backgroundColor:'green',color:"white"}}><h5>ToDo</h5></div>
      <ol>
      {
        todo.map((elem,index)=>(

          <li>{elem}
          <button onClick={()=>removetodo(index)}>remove</button>
          {/*while passing argument to the function don't do it directly with onclick, do it inside arrow function, otherwise it will not work */}
          </li>
          
       ) )
      }
      </ol>

        </div></center>
        <br></br>
     <center><Link to='/chat'><button className="btn btn-primary">Go To Chat Room</button></Link></center> 
    </div>
  )
}
