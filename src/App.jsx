import { useState } from 'react'

import './App.css'

function App() {
 
  const model={
   firstname:'',
   lastname:'',
   email:'',
   password:'',
   username:'',
   mobile:''
 
  }

  const errModel={
    firstname:null,
    lastname:null,
    email:null,
    password:null,
    username:null,
    mobile:null
  
   }

  const validator=(key,value)=>{
    if(!value.length)
    {

     setFormError({
       ...formError,
      [key] :  ` ${key} is required field`
     })
    }
     
    else{
      setFormError({
        ...formError,
       [key] : null
      })
    }

   }

  const getFormValue=(e)=>{
    
    const input= e.target
    // console.log(input.value);
    const value= input.value;
    const key= input.name;
    setForm({
      ...form,
    [key]: value
    })  

    // validator 
    validator(key , value)

  }

  const signUp = (e) =>{
     e.preventDefault()
    //  console.log(form);  
    const keys = Object.keys(form);
    // console.log(key);

    for(let key of keys){
  
      // console.log(key);
    let value= form[key]
    // console.log(value)  
    validator(key,value);    

  }
}

  const [form, setForm] = useState(model);
   const[formError,setFormError]= useState(errModel)

  return (
    <>
      <div className='bg-gray-100 min-h-screen flex justify-center items-center '>
        {/* <h1>{JSON.stringify(form)}</h1> */}
        <div className='bg-white px-8 py-6 w-[350px] shadow-lg rounded-lg '>
          <h1 className='text-2xl font-bold  px-3 mb-4 text-center'>Rohit Sign Up Form</h1>
          <form onSubmit={signUp}>

       <div className='flex flex-col gap-2'>
 
       <label className='text-lg font-bold' >Firstname</label>
       <input 
       name="firstname"
       type="text"
       placeholder="enter your first name"
       className="border-gray-400 p-2"
      onChange={getFormValue}
        />

        {formError.firstname && <small className='text-rose-600 text-semibold text-sm'>{formError.firstname} </small> }
        

       </div>



   <div className='flex flex-col gap-2'>
 
 <label className='text-lg font-bold' >Lastname</label>
 <input 
 name="lastname"
 type="text"
 placeholder="enter your Last name"
 className="border-gray-400 p-2"
 onChange={getFormValue}

  />
   {formError.lastname && <small className='text-rose-600 text-semibold text-sm'>{formError.lastname} </small> }

{/* <small className='text-rose-600 text-semibold text-sm'>This field is required </small> */}

 </div>

 <div className='flex flex-col gap-2'>
 
 <label className='text-lg font-bold' >Email</label>
 <input 
 name="email"
 type="email"
 placeholder="enter your email here "
 className="border-gray-400 p-2"
   onChange={getFormValue}

  />
          {formError.email && <small className='text-rose-600 text-semibold text-sm'>{formError.email} </small> }

{/* <small className='text-rose-600 text-semibold text-sm'>This field is required </small> */}

 </div>

 <div className='flex flex-col gap-2'>
 
 <label className='text-lg font-bold' >Password</label>
 <input 
 name="password"
 type="password"
 placeholder=" ********"
 className="border-gray-400 p-2"
      onChange={getFormValue}

  />
 {formError.password && <small className='text-rose-600 text-semibold text-sm'>{formError.password} </small> }

{/* <small className='text-rose-600 text-semibold text-sm'>This field is required </small> */}

 </div>


 <div className='flex flex-col gap-2'>
 
 <label className='text-lg font-bold' >username</label>
 <input 
 name="username"
 type="text"
 placeholder="enter username here "
 className="border-gray-400 p-2"
     onChange={getFormValue}

  />
 {formError.username  && <small className='text-rose-600 text-semibold text-sm'>{formError.username} </small> }

{/* <small className='text-rose-600 text-semibold text-sm'>This field is required </small> */}

 </div>

 <div className='flex flex-col gap-1'>
 
 <label className='text-lg font-bold' >Mobile No</label>
 <input 
 name="mobile"
 type="number"
 placeholder="8976542236 "
 className="border-gray-400 p-2"
     onChange={getFormValue}

  />
 {formError.mobile && <small className='text-rose-600 text-semibold text-sm'>{formError.mobile} </small> }

{/* <small className='text-rose-600 text-semibold text-sm'>This field is required </small> */}

 </div>
  
  <br />

 <button className=' border-0 bg-indigo-600 w-full rounded gap-4 px-0 text-white'>Submit</button>

          </form>

        </div>
      </div>
     
    </>
  )
}

export default App
