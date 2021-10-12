import React from 'react';
import './App.css';
import Form from './Form'
import Forms from './Forms'
import { useState} from 'react'




function App() {
  
  const [values, setValues] = useState([]);
  const [errorText, setErrorText] = useState("")
  
  const update = (inputName, inputValue) => {
    setForm({...form, [inputName]: inputValue});
  }

  const defaultForm = {
    username: '',
    firstname: '',
    email: '',
    bio: ''
  }
  const [form, setForm]= useState(defaultForm)
  const submit = () => {

    const newForm = {
      username: form.username.trim(),
      firstname: form.firstname.trim(),
      email: form.email.trim(),
      bio: form.bio.trim()
    }
    if (!newForm.username ||!newForm.firstname || !newForm.email || !newForm.bio) {
      setErrorText("You missed something!");
      return;
    }else{
      setValues([newForm,...values]);
      setForm(defaultForm);
      setErrorText("");
    }
   
  }

  return (
    <div className="App">
      <Forms 
      values={form} 
      update={update}
      submit={submit}
      errorText={errorText}
      />
      {
        values.map(value => {
          return (
            <Form key={value.id} values={value} />
          )
        })
      }
    </div>
  );
}

export default App;
