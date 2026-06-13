import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    text: '',
    checkbox: false,
    radio: '',
    select: ''
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
      
    });
  };

  return (
    <div className="form-container">
      <h1>React Form</h1>
      <form>
        <div className="form-field">
          <label>Text Input:</label>
          <input 
            type="text" 
            name="text"
            value={formData.text} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-field">
          <label>
            <input 
              type="checkbox" 
              name="checkbox"
              checked={formData.checkbox} 
              onChange={handleChange} 
            />
            Checkbox
          </label>
        </div>

        <div className="form-field">
          <label>Radio Buttons:</label>
          <label>
            <input 
              type="radio" 
              name="radio" 
              value="option1" 
              checked={formData.radio === 'option1'} 
              onChange={handleChange} 
            />
            Option 1
          </label>
          <label>
            <input 
              type="radio" 
              name="radio" 
              value="option2" 
              checked={formData.radio === 'option2'} 
              onChange={handleChange} 
            />
            Option 2
          </label>
        </div>

        <div className="form-field">
          <label>Select Dropdown:</label>
          <select 
            name="select" 
            value={formData.select} 
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div className="form-data">
          <h2>Form Data:</h2>
          <p><strong>Text:</strong> {formData.text || 'Not provided'}</p>
          <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Not checked'}</p>
          <p><strong>Radio:</strong> {formData.radio || 'Not selected'}</p>
          <p><strong>Select:</strong> {formData.select || 'Not selected'}</p>
        </div>

      </form>
    </div>
  )
}

export default App
