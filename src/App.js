import { useForm } from "react-hook-form";
import image from './images/background.png';
import photo from './images/Group 11.svg';
import './App.css';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
console.log(errors);


function err (data){
}

  return (
    <>
  <div className="container" style={{ backgroundImage:`url(${image})` }}>
      <div className="box1">
        <div className="title"><h1>Learn to code by watching others</h1></div>
        <div className="text"><p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p></div>
      </div>
    <div className="main">
        <div className="tryit">Try it free 7 days then $20/mo. thereafter</div>
        <div className="box2">
        <form onSubmit={handleSubmit (err)}>

        <div className="first"
        style={errors.name && {border: " 2px solid red"}}>
        <input  type="text" placeholder='First Name'{...register("name", { required: true })}/>
        {errors.name && <img src={photo} alt=""/>}
        {errors.name && <label style={{color: "red"}}>First Name cannot be empty</label>}
        </div>

        <div className="first"
       style={errors.name && {border: " 2px solid red"}}>
        <input  type="text" placeholder='Last Name'{...register("lastname", { required: true })}/>
        {errors.lastname && <img src={photo} alt=""/>}
        {errors.lastname && <label style={{color: "red"}}>Last Name cannot be empty</label>}
        </div>

        <div className="first"
        style={errors.name && {border: " 2px solid red"}}>
        <input  type="email" placeholder='Email Address'{...register("EmailAddress", { required: true })}/>
        {errors.EmailAddress && <img src={photo} alt=""/>}
        {errors.EmailAddress && <label style={{color: "red"}}>Looks like this is not an email</label>}
        </div>

        <div className="first"
        style={errors.name && {border: " 2px solid red"}}>
        <input  type="Password" placeholder='Password'{...register("Password", { required: true })}/>
        {errors.Password && <img src={photo} alt=""/>}
        {errors.Password && <label style={{color: "red"}}>Password cannot be empty</label>}
        </div>

        <div className="second">
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
        <p className="botttext">By clicking the button, you are agreeing to our Terms and Services</p>
        </div>
        </form>
      </div>
    </div>
  </div>
    </>
  );
}

export default App;
