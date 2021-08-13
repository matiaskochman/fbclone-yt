import { signin } from 'next-auth/client'

function Login() {
    return (
        <div className="grid place-items-center">
            <h1 
                onClick={signin}
                className="p-5 bg-blue-500 rounded-full text-white cursor-pointer text-center">
                Login with Facebook
            </h1>
        </div>
    )
}
export default Login