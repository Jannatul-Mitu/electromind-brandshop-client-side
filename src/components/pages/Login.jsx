import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye, FaGithub } from 'react-icons/fa';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInWithEmailPass, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailPass(email, password).then(() => {
            navigate(location.state ? location.state : '/');

        }).catch(err => {

            console.log(err.code);
            if (err.code == 'auth/invalid-login-credentials') {
                // toast('wrong email or password')
                toast.error("wrong email or password");
            } else if (err.code == 'auth/too-many-requests') {
                toast.error('Too many requests!')
            }
        })
    };

    const socialLogIn = (media) => {
        media().then(() => {
            navigate(location.state ? location.state : '/')

        }).catch(err => console.log(err));
    };

    useEffect(() => {
        document.title = 'Login'

    }, []);

    return (
        <div className="w-full h-[912px] bg-[url('https://i.ibb.co/p4s7Vb2/login-bg.jpg')] bg-cover" data-aos="zoom-out bg-base-100">
            <div className="pt-20 flex justify-end lg:mr-96">
                <div className="ml-20 my-24 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
                    <div className="">
                        <div className="mb-10">
                            <h3 className="text-4xl font-bold text-center">Login</h3>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div>
                                <div className="relative flex items-center">
                                    <input name="email" type="email" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email address" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-6">
                                {/* <label className="text-sm mb-2 block">Password</label> */}
                                <div className="relative flex items-center">
                                    <input name="password" type={showPassword ? "text" : "password"} required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
                                    <span className='-mt-4' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash className="w-[18px] h-[18px] absolute right-4 cursor-pointer" /> :
                                            <FaEye className="w-[18px] h-[18px] absolute right-4 cursor-pointer" />}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 text-right">
                                <a className="text-blue-500 text-sm font-semibold hover:underline">
                                    Forgot your password?
                                </a>
                            </div>
                            <div className="mt-10">
                                <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 duration-1000 focus:outline-none">
                                    Log in
                                </button>
                            </div>
                        </form>
                        <p className="text-sm mt-6 text-center">Don&apos;t have an account? <Link className="text-blue-500 font-semibold hover:underline ml-1 whitespace-nowrap" to={"/register"}>Create Account</Link></p>
                    </div>
                    <div className="mt-10 text-center">
                        <button type="button" className="py-2.5 w-full mb-2 px-4 text-sm font-semibold rounded text-white bg-rose-600 hover:bg-rose-300 duration-1000 focus:outline-none" onClick={() => socialLogIn(signInWithGoogle)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline mr-4" viewBox="0 0 512 512">
                                <path fill="#fbbd00"
                                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                                    data-original="#fbbd00" />
                                <path fill="#0f9d58"
                                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                                    data-original="#0f9d58" />
                                <path fill="#31aa52"
                                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                                    data-original="#31aa52" />
                                <path fill="#3c79e6"
                                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                                    data-original="#3c79e6" />
                                <path fill="#cf2d48"
                                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                                    data-original="#cf2d48" />
                                <path fill="#eb4132"
                                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                                    data-original="#eb4132" />
                            </svg>
                            Sign in with Google
                        </button>
                        <button type="button" className="py-2.5 w-full px-4 text-sm font-semibold rounded text-white bg-neutral-900 hover:bg-zinc-400 duration-1000 focus:outline-none" onClick={() => socialLogIn(signInWithGithub)}>
                            <FaGithub className="inline" />
                            <span>Sign in with GitHub</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Login;