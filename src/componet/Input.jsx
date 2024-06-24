import React,{useState} from 'react'

const Input = () => {
    const [input, setinput] = useState({
        name:"",
        email:"",
        password:""

    })
    const handle = (e)=> {
        const{name,value}=e.target;
        setinput((prev)=>{
            return{...prev,[name]:value}
        })
        // setinput(e.target.value);
        
    };
    function submit(e) {
        // setinput("");
        
        console.log(input);
        e.preventDefault();
    }

  return (
    <>
    <form>
        <h3>Name:</h3>
        <input type='text' name="name" onChange={handle} value={input}/><br/>
        <h3>Email:</h3>
        <input type='email' name="email" onChange={handle} value={input}/><br/>
        <h3>Password:</h3>
        <input type='text' name="password" onChange={handle} value={input}/><br/>
        <button onClick={submit}>Submit</button>
    </form>
    </>
  )
}

export default Input
