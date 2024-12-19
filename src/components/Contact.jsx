import React from 'react'

 const Contact = () => {
  return (
    <div>

       <div>
        <div>
            <h1>Contact</h1>
            <p>Submit the from to get in touch with me</p>
        </div>
<div>
    <form action="">
        <input type="text" name="name"
         placeholder="Enter your Name"
         className=' p-2 bg-transparent border-2 rounded-md
         text-white focus:outline-none' />

        <input type="email" name="email"
         placeholder="Enter your Email"
         className=' p-2 bg-transparent border-2 rounded-md
         text-white focus:outline-none' />

    </form>
</div>

        </div> 
    </div>
  )
}
export default Contact;
