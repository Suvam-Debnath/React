
import { useState } from 'react';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name:'',
    email:''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if(!formData.name.trim()){
      newErrors.name = 'Name is required';
    }
    return newErrors;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validaitonErrors = validate();
    if(Object.keys(validaitonErrors).length > 0){
      setErrors(validaitonErrors);
      return;
    }  else{
      console.log('Form data Submitted ', formData);
    }
    console.log('Form data submitted ', formData);
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      if(errors[name]){
        const newErrors = {...errors};
        delete newErrors[name];
        setErrors(newErrors);
      }
  }

  return (
    <div>
      <h1>Forms in react</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' value={formData.name} onChange={handleChange}></input>
          {errors.name && <span className='error'>{errors.name}</span>}
        </label>
        <label>
          Email:
          <input type='email' name='email' value={formData.email} onChange={handleChange}></input>
          {errors.email && <span className='error'>{errors.email}</span>}
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
