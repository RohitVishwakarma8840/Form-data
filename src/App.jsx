import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-400 h-screen flex justify-center items-center '>
        <div className='bg-white p-12 w-[350px] shadow-lg rounded-lg '>
          <form >
       <div className='flex flex-col gap-2'>
 
       <label className='text-lg font-bold' >Firstname</label>
       <input 
       name="firstname"
       type="text"
       placeholder="enter your first name"
       className="border-gray-400 p-2"
        />
    {/* <small className='text-rose-600 text-semibold text-sm'>This field is required </small> */}

       </div>



   <div className='flex flex-col gap-2'>
 
 <label className='text-lg font-bold' >Lastname</label>
 <input 
 name="Lastname"
 type="text"
 placeholder="enter your Last name"
 className="border-gray-400 p-2"
  />
{/* <small className='text-rose-600 text-semibold text-sm'>This field is required </small> */}

 </div>

 <div className='flex flex-col gap-2'>
 
 <label className='text-lg font-bold' >Email</label>
 <input 
 name="email"
 type="email"
 placeholder="enter your email here "
 className="border-gray-400 p-2"
  />
{/* <small className='text-rose-600 text-semibold text-sm'>This field is required </small> */}

 </div>


          </form>

        </div>
      </div>
     
    </>
  )
}

export default App
