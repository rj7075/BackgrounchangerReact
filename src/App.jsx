import { useState } from 'react'
import './App.css'

function App() {
  // Ranjeet Yadav Background changer
  
  const [color,setColor]=useState("green");
  return (
    <>
     <div className="w-full h-screen duration-200" 
     style={{ backgroundColor:color}}>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-3 rounded-3xl">
          {/* Red button */}

          <button 
          onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"red"}}>Red</button>

          {/* green button */}
          <button onClick={()=>setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"green"}}>Green</button>

          {/* yellow */}
          <button 
          onClick={()=>setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"yellow"}}>Yellow</button>

          {/* white */}
          <button 
          onClick={()=>setColor("white")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
          style={{backgroundColor:"white"}}>White</button>

          {/* black button */}
          <button 
          onClick={()=>setColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"black"}}>Black</button>

          {/* blue */}
          <button 
          onClick={()=>setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"blue"}}>Blue</button>
          {/* pink */}

          <button 
          onClick={()=>setColor("Pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"pink"}}>Pink</button>

          {/* purple */}

          <button 
          onClick={()=>setColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"purple"}}>Purple</button>

          {/* grey */}

          <button 
          onClick={()=>setColor("gray")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"gray"}}>Gray</button>

          {/*  olive*/}

          <button 
          onClick={()=>setColor("#a88732")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"#a88732"}}>Olive</button>

          {/* Aasmani color */}

          
          <button 
          onClick={()=>setColor("#32a8a4")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"#32a8a4"}}>Aqua</button>

          {/* parrot colr*/}
          <button 
          onClick={()=>setColor("#42a832")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"#42a832"}}>Parrat</button>

          {/* Halka black */}

          <button 
          onClick={()=>setColor("#6d7877")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"#6d7877"}}>L-Black</button>

        {/* grreenish */}
         <button 
          onClick={()=>setColor("#497a4f")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"#497a4f"}}>L-Green</button>
       
          </div>
         </div>
      </>
  )
}

export default App
