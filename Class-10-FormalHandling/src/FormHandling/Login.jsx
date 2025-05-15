import  React from 'react';

let login =()=>{
    let [user,setUser] =usestate({"email":"","password":""})
    let emailHandler=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        setUser({...User,email:event.target.value})  
        
    }
    let pwdHanler=(event)=>{
        setUser({...user,password:event.target.value})
    }
    let submitHandler=()=>{
        //send data to backend or api
        console.log(user)
        alert(JSON.stringify(user))
        
    }
    return <div>
        <pre>{JSON.stringify(user)}</pre>
        <h3>Login Details</h3>
        <from onsubmit={submitHandler}>
            Email:::<input type="text" onInput={emailHandler} /> <br/><br/>
            Password:<input type="password" onInput={pwdHanler} /> <br/> <br/>
            <input type="submit" value={"Login"}/>
        </from>
    </div>
}
export default login;