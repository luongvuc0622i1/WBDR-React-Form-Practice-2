// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import './App.css';

export default function App() {
  const [form, setForm] = useState(0);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit() {
    const isValid = form.username && form.email && form.password && form.confirmPassword;
    alert(isValid ? "Sign in success!!" : "Please fill out all the fields!!");
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <div className="custom-input">
          <label>Username: </label>
          <input name="username" value={form.username || ''} onChange={handleChange} />
        </div>
        <div className="custom-input">
          <label>Email: </label>
          <input type="email" name="email" value={form.email || ''} onChange={handleChange} />
        </div>
        <div className="custom-input">
          <label>Password: </label>
          <input type="password" name="password" value={form.password || ''} onChange={handleChange} />
        </div>
        <div className="custom-input">
          <label>Confirm Password: </label>
          <input type="password" name="confirmPassword" value={form.confirmPassword || ''} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}