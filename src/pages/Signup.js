import React, { useRef, useState} from "react"
import { useAuth } from "../contexts/AuthContext"
import "./signup.css" 
import Header from "../components/Header"
import { Link,useNavigate } from "react-router-dom"
const  Signup = ()=> {
    const emailRef = useRef()
    const [darkMode, setDarkMode] = useState(false);
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate= useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")//we use return to go out of function when this happen.
        }
        try {
          setError("")
          setLoading(true)
          await  signup(emailRef.current.value, passwordRef.current.value)
          navigate("/home");
        }catch {
          setError("Failed to create an account")
        }
        setLoading(false)
      }

      return (
        
        
         
  <div className={`${darkMode && 'dark-mode'}`}>
  <Header handleToggleDarkMode={setDarkMode} />
    <div className="signup">
   
    {error && <span className="spanC">{error}</span>}
      <form className="formC"  onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

        <input className="inputC"
          type="email"
          placeholder="email" ref={emailRef} required 
        />

        <input className="inputC"
          type="password"
          placeholder="password" ref={passwordRef} required
        />

        <input className="inputC"
          type="password"
          placeholder="password" ref={passwordConfirmRef} required
        />
        <button   className='save' disabled={loading} type="submit">Sign Up</button>
      </form>
      <h4>
    Already have an account? <Link to="/login"> Log In</Link>
    </h4>
    </div>
    
    </div>
        
      )
}

export default Signup;