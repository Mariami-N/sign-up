import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
console.log(errors);


function err (data){
}


  return (
    <>
    <form onSubmit={handleSubmit (err)}>
    <input  type="text" placeholder='name'{...register("name", { required: true })}/>
    {errors.name && <label style={{color: "red"}}>First Name cannot be empty</label>}

    <input  type="text" placeholder='lastname'{...register("lastname", { required: true })}/>
    {errors.lastname && <label style={{color: "red"}}>Last Name cannot be empty</label>}
    
    <input  type="email" placeholder='Email Address'{...register("EmailAddress", { required: true })}/>
    {errors.EmailAddress && <label style={{color: "red"}}>Looks like this is not an email</label>}
   
    <input  type="Password" placeholder='Password'{...register("Password", { required: true })}/>
    {errors.Password && <label style={{color: "red"}}>Password cannot be empty</label>}
    
    <button type="submit">CLAIM YOUR FREE TRIAL</button>
    </form>
    </>
  );
}

export default App;
