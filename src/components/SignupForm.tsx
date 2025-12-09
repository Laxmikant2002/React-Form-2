import { useState } from 'react'

function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailValid, setEmailValid] = useState<boolean | null>(null)
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null)
  const [confirmValid, setConfirmValid] = useState<boolean | null>(null)

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setEmailValid(value ? validateEmail(value) : null)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    setPasswordValid(value ? value.length >= 8 : null)
  }

  const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setConfirmPassword(value)
    setConfirmValid(value ? value === password : null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const isEmailValid = validateEmail(email)
    const isPasswordValid = password.length >= 8
    const isConfirmValid = confirmPassword === password

    if (isEmailValid && isPasswordValid && isConfirmValid) {
      alert('Form submitted successfully')
    } else {
      alert("Can't submit the form")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={emailValid === true ? 'valid' : emailValid === false ? 'invalid' : ''}
          required
        />
        {emailValid === false && <span className="error">Invalid email format!</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordValid === true ? 'valid' : passwordValid === false ? 'invalid' : ''}
          required
        />
        {passwordValid === false && <span className="error">Password must be at least 8 characters</span>}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmChange}
          className={confirmValid === true ? 'valid' : confirmValid === false ? 'invalid' : ''}
          required
        />
        {confirmValid === false && <span className="error">Passwords do not match</span>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignupForm