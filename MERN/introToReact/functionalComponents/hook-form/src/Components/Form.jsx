
import React, { useState } from  'react';

const Form = props => {
    const [inputs, setInputs] = useState({
        userName: "",
        email: ""
    });
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {userName, email, password, confirm};
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirm("");
        console.log("welcome", newUser);
    }

    let handleChange =(e)=> {
        //change the state
        //copy whats in your state
        //change only the property for the NAME of the input
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        
    }



    const lengthValidator = (input, num) =>{
        if(input.length>=num){
            return true;
        }else{
            return false;
        }
    }
    const matchymatchy = (input1, input2) =>{
        if(input1 == input2){
            return true;
        }else{
            return false;
        }
    }
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>Username: </label> 
                    <input value={userName} type="text" name='userName' onChange={ (e) => setUsername(e.target.value) } />
                    { lengthValidator(userName, 2) || userName.length == 0? "" : <p>UserName must be atleast 2 charecters</p>}
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input value={email} type="text" onChange={ (e) => setEmail(e.target.value) } />
                    { lengthValidator(email, 5) || email.length == 0? "" : <p>Email must be atleast 5 charecters</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input value={password} type="text" onChange={ (e) => setPassword(e.target.value) } />
                    { lengthValidator(password, 8) || password.length == 0? "" : <p>password must be atleast 8 charecters</p>}
                    { matchymatchy(password, confirm) || password.length == 0? "": <p>Passwords must match</p>}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input value={confirm} type="text" onChange={ (e) => setConfirm(e.target.value) } />
                    { lengthValidator(confirm, 8) || confirm.length == 0? "" : <p>password must be atleast 8 charecters</p>}
                    { matchymatchy(password, confirm) || confirm.length == 0? "": <p>Passwords must match</p>}
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>{userName}</p>
                <p>{email}</p>
                <p>{password}</p>
            </div>
        </div>
       
    )
}
export default Form;