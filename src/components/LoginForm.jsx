import { useState } from 'react';

const LoginForm = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
  
    return (
    <div>
      <input
        type='email'
        value={email}
        onChange={(e => setEmail(e.target.value))}
        placeholder='name@email.com'
      />
      <input
        type='password'
        value={pass}
        onChange={(e => setPass(e.target.value))}
        placeholder='password'
      />
      <button onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  )
}

export {LoginForm}
