import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [conShowPassword, setConShowPassword] = useState(false);
    const { signUpWithEmailPass, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            toast.error('Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character');
            return;

        } else if (password !== conPassword) {
            toast.error("Password did not match");
            return;
        }

        signUpWithEmailPass(email, password).then(() => {
            updateUserProfile(name, photoUrl).then(() => {
                navigate('/');

            }).catch(err => console.log(err))

        }).catch(err => {

            if (err.code == 'auth/email-already-in-use') {
                toast.error('email already in use');
            }

        });
    }

    useEffect(() => {
        document.title = 'Register'
    }, [])

    return (
        <div className="w-full h-[912px] bg-[url('https://i.ibb.co/BB3Gx2V/register.jpg')] bg-cover" data-aos="zoom-out">
            <div className="pt-20 flex justify-start lg:ml-96">
                <div className="lg:my-24 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
                    <form className="" onSubmit={handleRegister}>
                        <div className="mb-10">
                            <h3 className="text-4xl font-bold text-center">Register</h3>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <div className="relative flex items-center">
                                    <input name="name" type="text" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="First name" />
                                </div>
                            </div>
                            <div>
                                <div className="relative flex items-center">
                                    <input name="name" type="text" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Last name" />
                                </div>
                            </div>
                        </div>
                        <div>
                                <div className="relative flex items-center mt-6">
                                    <input name="email" type="email" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Email address" />
                                </div>
                            </div>
                        <div>
                            <div className="relative flex items-center mt-6">
                                <input name="photoUrl" type="text" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter profile picture URL" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-6">
                            {/* <label className="text-sm mb-2 block">Password</label> */}
                            <div className="relative flex items-center">
                                <input name="password" type={showPassword ? "text" : "password"} required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Password" />
                                <span className='-mt-4' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash className="w-[18px] h-[18px] absolute right-4 cursor-pointer" /> :
                                        <FaEye className="w-[18px] h-[18px] absolute right-4 cursor-pointer" />}
                                </span>
                            </div>
                        </div>
                        <div className="mt-6">
                            {/* <label className="text-sm mb-2 block">Confirm password</label> */}
                            <div className="relative flex items-center">
                                <input name="conPassword" type={conShowPassword ? "text" : "password"} required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Confirm password" />
                                <span className='-mt-4' onClick={() => setConShowPassword(!conShowPassword)}>
                                    {conShowPassword ? <FaEyeSlash className="w-[18px] h-[18px] absolute right-4 cursor-pointer" /> :
                                        <FaEye className="w-[18px] h-[18px] absolute right-4 cursor-pointer" />}
                                </span>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 duration-1000 focus:outline-none">
                                Register
                            </button>
                        </div>
                        <p className="text-sm mt-6 text-center">Already have an account? <Link className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap" to={"/login"}>Login here</Link></p>
                    </form>
                </div>
            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Register;