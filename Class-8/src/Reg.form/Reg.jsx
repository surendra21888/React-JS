import React,{useState} from 'react'
let Reg = ()=>{
    let [user,setUser] = useState({uname:"",mobile:"",email:""});
    let updateFormHandler = (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    let submitHandler = (event)=>{
        event.preventDefault();
        console.log(user)
    }
return <div>
    <pre>{JSON.stringify(user)}</pre>
    <h4>Registration Form</h4>
    <form onSubmit={submitHandler}>
    User Name:<input type="text"    name="uname" onChange={updateFormHandler}/> <br/><br/>
    Mobile:::<input type="number"  name="mobile" onChange={updateFormHandler}/> <br/><br/>
    Email:::<input type="email" name="email" onChange={updateFormHandler}/> <br/><br/>
    <input type="submit" value={"Reg"} />
    </form>
    </div>
}
export default Reg;