import React from 'react';
import phonesImg from '../assets/phones.png';
import instaLogo from '../assets/instagram_logo.png';
import fbIcon from '../assets/facebook.png';
import playstoreImg from '../assets/playstore.png';
import microsoftImg from '../assets/microsoft.png';

const LoginPage = ({ onSwitch }) => {
    return (
        <div className="flex justify-center items-center w-full mt-8 pb-8 gap-8">
            <div className="hidden min-[875px]:block h-[581px] basis-[380px] bg-no-repeat relative">
                <img src={phonesImg} alt="phones" className="h-full object-contain" />
            </div>

            <div className="flex flex-col w-[350px] gap-2.5 mt-3">
                <div className="bg-white border border-gray-300 py-2.5 flex flex-col items-center pb-5">
                    <div className="my-9 mb-3">
                        <img src={instaLogo} alt="Instagram" className="w-[175px] object-contain" />
                    </div>

                    <form className="w-full flex flex-col items-center mt-6">
                        <div className="w-[268px] mb-1.5">
                            <input
                                type="text"
                                placeholder="Phone number, username, or email"
                                className="w-full h-[38px] bg-[#fafafa] border border-gray-300 rounded-[3px] px-2 text-xs outline-none focus:border-gray-400 focus:ring-0"
                            />
                        </div>

                        <div className="w-[268px] mb-1.5">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full h-[38px] bg-[#fafafa] border border-gray-300 rounded-[3px] px-2 text-xs outline-none focus:border-gray-400 focus:ring-0"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-[268px] bg-[#0095f6] border-none rounded-lg text-white font-semibold text-sm py-[7px] px-4 mt-2 mb-2 transition-opacity opacity-70 cursor-default"
                        >
                            Log in
                        </button>

                        <div className="flex flex-row items-center w-[268px] my-2.5 mx-10">
                            <div className="flex-grow h-px bg-gray-300"></div>
                            <div className="mx-[18px] text-[#8e8e8e] text-[13px] font-semibold">OR</div>
                            <div className="flex-grow h-px bg-gray-300"></div>
                        </div>

                        <button type="button" className="bg-none border-none cursor-pointer flex items-center gap-2 my-2">
                            <img src={fbIcon} alt="Facebook" className="w-4 h-4" />
                            <span className="text-[#385185] font-semibold text-sm">Log in with Facebook</span>
                        </button>

                        <a href="#" className="mt-3 text-xs text-[#00376b]">Forgot password?</a>
                    </form>
                </div>

                <div className="flex flex-row justify-center items-center bg-white border border-gray-300 py-5 w-full">
                    <p className="text-sm">Don't have an account?
                        <button
                            type="button"
                            onClick={() => onSwitch()}
                            className="text-[#0095f6] font-semibold ml-1 cursor-pointer bg-transparent border-none p-0 hover:underline"
                        >
                            Sign up
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

export default LoginPage;
