import React from 'react';
import phonesImg from '../assets/phones.png';
import instaLogo from '../assets/instagram_logo.png';
import fbIcon from '../assets/facebook.png';
import playstoreImg from '../assets/playstore.png';
import microsoftImg from '../assets/microsoft.png';

const SignUpPage = ({ onSwitch }) => {
    return (
        <div className="flex justify-center items-center w-full mt-8 pb-8 gap-8">
            <div className="hidden min-[875px]:block h-[581px] basis-[380px] bg-no-repeat relative">
                <img src={phonesImg} alt="phones" className="h-full object-contain" />
            </div>

            <div className="flex flex-col w-[350px] gap-2.5 mt-3">
                <div className="bg-white border border-gray-300 py-2.5 flex flex-col items-center pb-5 px-10">
                    <div className="my-9 mb-3">
                        <img src={instaLogo} alt="Instagram" className="w-[175px] object-contain" />
                    </div>

                    <form className="w-full flex flex-col gap-1.5">
                        <input
                            type="text"
                            placeholder="Mobile Number or Email"
                            className="w-full h-[38px] bg-[#fafafa] border border-gray-300 rounded-[3px] px-2 text-xs outline-none focus:border-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full h-[38px] bg-[#fafafa] border border-gray-300 rounded-[3px] px-2 text-xs outline-none focus:border-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full h-[38px] bg-[#fafafa] border border-gray-300 rounded-[3px] px-2 text-xs outline-none focus:border-gray-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-[38px] bg-[#fafafa] border border-gray-300 rounded-[3px] px-2 text-xs outline-none focus:border-gray-400"
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#0095f6] text-white rounded-lg py-1.5 font-semibold text-sm mt-1 opacity-70 cursor-default"
                        >
                            Sign up
                        </button>

                        <div className="flex flex-row items-center w-full my-4">
                            <div className="flex-grow h-px bg-gray-300"></div>
                            <div className="mx-4 text-[#8e8e8e] text-[13px] font-semibold">OR</div>
                            <div className="flex-grow h-px bg-gray-300"></div>
                        </div>

                        <button type="button" className="w-full bg-transparent text-black rounded-lg py-1.5 flex items-center justify-center gap-2 font-semibold text-sm mb-4">
                            <img src={fbIcon} alt="Facebook" className="w-4 h-4" />
                            Log in with Facebook
                        </button>
                    </form>
                </div>

                <div className="flex flex-row justify-center items-center bg-white border border-gray-300 py-5 w-full">
                    <p className="text-sm">Have an account?
                        <button
                            type="button"
                            onClick={() => onSwitch()}
                            className="text-[#0095f6] font-semibold ml-1 cursor-pointer bg-transparent border-none p-0 hover:underline"
                        >
                            Log in
                        </button>
                    </p>
                </div>

                <div className="flex flex-col items-center p-2">
                    <p className="text-sm mb-3">Get the app.</p>
                    <div className="flex justify-center gap-2">
                        <a href="#" className="h-10">
                            <img src={playstoreImg} alt="Google Play" className="h-10" />
                        </a>
                        <a href="#" className="h-10">
                            <img src={microsoftImg} alt="Microsoft Store" className="h-10" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
