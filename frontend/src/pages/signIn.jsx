import { login } from '../assets'
import SigninForm from '../components/SigninForm'


function signIn() {
  return (
    <div className={`h-screen flex flex-col justify-center items-center relative `}>
      <img className=" h-[90%] z-0 " src={login} />
      <SigninForm />
    </div>
  )
}


export default signIn





