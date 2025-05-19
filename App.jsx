
import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg  rounded"> 
          <button onClick={()=>setColor("red")} className="outline-none px-4 rounded text-[30px] " style={{backgroundColor:"red"}} >Red</button>
          <button onClick={()=>setColor("white")} className="outline-none px-4 rounded text-[30px] " style={{backgroundColor:"white"}}>White</button>
          <button onClick={()=>setColor("yellow")} className="outline-none px-4 rounded text-[30px] " style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setColor("pink")} className="outline-none px-4 rounded text-[30px] " style={{backgroundColor:"pink"}}>pink</button>
          <button onClick={()=>setColor("black")} className="outline-none px-4 rounded text-[30px] " style={{backgroundColor:"black", color:"white"}}>black</button>
          <button onClick={()=>setColor("orange")} className="outline-none px-4 rounded text-[30px] " style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=>setColor("gray")} className="outline-none px-4 rounded text-[30px] " style={{backgroundColor:"gray"}}>gray</button>
          <button onClick={()=>setColor("lavender")} className="outline-none px-4 rounded text-[30px] " style={{backgroundColor:"lavender"}}>lavender</button>
        </div>
      </div>
    </div>
  
  )
}

export default App

