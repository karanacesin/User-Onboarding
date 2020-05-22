import React, {useState, useEffect} from 'react';
import Users from './components/Users';
import UserForm from './components/UserForm';
import FormValidation from './validation/FormValidation';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialDisabled = true
const user = []

function App() {
  const [users, setUsers] = useState(user)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('http://reqres.in/api/users_')
      .then(response => {
        setUsers(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewUser = newUser => {
    axios.post('http://reqres.in/api/users_', newUser)
      .then(response => {
        setUsers([response.data, ...users])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    yup
      .reach(FormValidation, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target
    setFormValues({ ...formValues, 
      terms:{...formValues.terms, [name]: checked} })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    
    const newUser = { 
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms === true,
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    FormValidation.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div >
      <header><h1>Users</h1></header>

      <UserForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
        onCheckboxChange={onCheckboxChange}
      />

      {
        users.map(person => {
          return (
            <Users key={person.id} details={person} />
          )
        })
      }
    </div>
  )
}

export default App;
