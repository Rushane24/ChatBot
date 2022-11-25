import React from 'react';
import { useState } from 'react';

export default function(){
  const [name,setName]=useState(' ')
  const [age,setAge]=useState(' ')
  const [email,setEmail]=useState(' ')
  async function registerUser(event){
    event.preventDefault()
    const response= await fetch("http://localhost:1337//api/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      name,
      email,
      age,
    }),
  })
  const data=await response.json()
  console.log(data)
}
    return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
        value={name}
        onChange={(e)=> setName(e.target.value)}
        type="text"
        placeholder='Name '/>
        <input
        value={age}
        onChange={(e)=> setAge(e.target.value)}
        type="text"
        placeholder="Age"/>
        <input
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        type="email"
        placeholder='Email'/>
        <input type="submit" placeholder="Submit"/>
      </form>
    </div>
    )

}