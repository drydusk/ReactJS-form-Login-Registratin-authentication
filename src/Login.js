import { useRef, useState, useEffect, useRef } from "react";

const Login =()=>{
    const userRef=useRef();
    const errRef=useRef();


    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState('');
    const [errMsg,setErrMsg]=useState('');
    const [success,setSuccess]=useState(false);

    return(
        <section>
            <p ref={errRef} className={errMsg?"errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>

            <h1>Sign In</h1>
            <form>
                <label htmlFor="username">Username : </label>
                <input> </input>
            </form>
        </section>
    )
}