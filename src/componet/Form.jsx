import React, { useState } from "react";
function Form() {
    let [input,setinput] = useState("")
    let [email,setemail] = useState("")
    let [pass,setpass] = useState("")
    function Handle(e){
        setinput(e.target.value);

    }
    function Handler(e) {
        setemail(e.target.value);
        
    }
    function Handlerr(e) {
        setpass(e.target.value)
    }
    function Submite(e) {
        e.preventDefault()
        let data={
            name:input,
            mail:email,
            password:pass
        };
        console.log(data);
        setinput("")
        setemail("")
        setpass("")
    }
    return<>
    
    <input type="text" value={input} onChange={Handle} /><br/>
    <input type="email" value={email} onChange={Handler} /><br/>
    <input type="password" value={pass} onChange={Handlerr} /><br/>
    <button onClick={Submite}>submit</button>
    </>
}
export default Form