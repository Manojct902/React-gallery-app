import React ,{useState,useEffect} from 'react'
import axios from'axios'



const App = () => {
  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(0)
  
  const getdata=async ()=> {
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=28`)
    setuserData(response.data)

    console.log(userData)
    console.log(response.data)
    
  }
useEffect(function(){
  getdata()
},[index])

  let printUserData=<h3 className='text-gray-400  text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Loading.......</h3>

  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
        
        <a href={elem.url} target='_blank'>
            <div className='h-40 w-44 bg-white overflow-hidden rounded-xl' >
           <img  className="h-full w-full object-cover"src={elem.download_url} alt=""/>
           </div>
            <h2>{elem.author}</h2>
        </a>
      
      </div>
    })
  }
  return (
    <div className='bg-black h-screen  p-4 text-white overflow-auto'>

     
      <div className='flex flex-wrap gap-10'>
        
        {printUserData}
      </div>
      <div className='flex justify-center items-center gap-4 p-5'>
        <button onClick={()=>{
          if(index>1){
             setindex(index-1)
             setuserData([])

          }
         

        }}
        className='bg-amber-400 text-black px-4 py2 font-semibold text-sm cursor-pointer active:scale-95'>Prev</button>
        <h2>Page{index}</h2>
         <button onClick={()=>{
          setindex(index+1)
          setuserData([])

         }}
          className='bg-amber-400 text-black px-4 py2 font-semibold text-sm cursor-pointer active:scale-95'>Next</button>
      </div>

    </div>
  )
}

export default App