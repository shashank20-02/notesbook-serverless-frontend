import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <section className="text-black body-font w-full h-screen flex items-center justify-center">
            <div className="container flex lg:px-16 lg:py-16 px-4 items-center justify-center">
                <form className="lg:w-1/4 w-full border rounded-md shadow-xl shadow-gray-200 p-4">
                    <h1 className="text-xl text-center pb-4">
                        Register on NotesBook
                    </h1>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none "
                            placeholder="your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none "
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none"
                            placeholder="password"
                            required
                        />
                    </div>
                    <Link
                        to="/login"
                        className="w-full text-[1rem] text-yellow-500 hover:text-yellow-700 focus:outline-none "
                    >
                        Already have a account ? Login
                    </Link>
                    <button
                        type="submit"
                        className="mt-4 w-full flex justify-center py-2 px-4 border border-yellow-500 rounded-md shadow-sm text-[1rem] bg-yellow-500  hover:bg-transparent focus:outline-none  text-black"
                    >
                        Register
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Register;
