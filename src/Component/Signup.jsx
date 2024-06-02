import React, { useState } from 'react'

const Signup = () => {

    const [values,setValues]=useState({
        name:"",
        email:"",
        password:"",
        conformPassword:"",
    })

    const [errors,setErrors]=useState({})

    function handleInput(event){

        const newObj={...values,[event.target.name]:event.target.value}
        setValues(newObj)

    }

    function handleValadtion(event){

        event.preventDefault();
        const validationError={};

        if(!values.name.trim()){
            validationError.name="this field is empty";    
        }

        if(!values.email.trim()){
            validationError.email="this field is empty"
        }

        setErrors(validationError)


        if(Object.key(validationError)===0){
            alert("Form successfully submitted")
        }

    }



  return (
    <div className='d-flex align-item-center justify-content-center' >

        <div className="form mt-4">

        <form action="" className='border p-3' onSubmit={handleValadtion}>
            <div className='input-group mb-3 m-2'>    
            <label htmlFor="" className='input-group-text '> First name:</label>
            <input type="text"  className='form-control-lg' onChange={handleInput}  name='name' />
            {errors.name && <span>{errors.name}    </span> }
            </div>

            <div className='input-group mb-3 m-2'>    
            <label htmlFor="" className='input-group-text'>Mobile:</label>
            <input type="text" className='form-control-lg' />
            </div>

            <div className='input-group mb-3 m-2'>    
            <label htmlFor=""className='input-group-text' >Email:</label>
            <input type="email"  className='form-control-lg' onChange={handleInput} name='email' />
            {errors.name && <span>{errors.email}    </span> }


            </div>

            <div className='input-group mb-3 m-2'>    
            <label htmlFor="" className='input-group-text'>Password:</label>
            <input type="password" className='form-control-lg'  onChange={handleInput} />
            </div>

            <div className='input-group mb-3 m-2'>    
            <label htmlFor="" className='input-group-text'> Conform Password:</label>
            <input type="password"  className='form-control-lg'  />
            </div>

            <button className='btn btn-success'>Submit</button>


        </form>
        </div>



      
    </div>
  )
}

export default Signup
