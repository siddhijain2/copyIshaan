import { login } from '../assets'
import LoginForm from '../components/LoginForm'
import styles from '../style'

function LogIn() {
  return (
    <div className={`h-screen flex flex-col justify-center items-center relative `}>
      <img className=" h-[90%] z-0 " src={login} />
      <LoginForm />
    </div>
  )
}

export default LogIn
