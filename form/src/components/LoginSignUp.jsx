import React, { useState } from 'react'
const LoginSignUp = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </h2>

                    <form className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Enter your name"
                                />
                            </div>
                        )}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {isLogin ? 'Login' : 'Sign Up'}
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-4">
                        {isLogin ? (
                            <p className="text-sm">
                                Don't have an account?{' '}
                                <button
                                    onClick={() => setIsLogin(false)}
                                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                                >
                                    Sign up here
                                </button>
                            </p>
                        ) : (
                            <p className="text-sm">
                                Already have an account?{' '}
                                <button
                                    onClick={() => setIsLogin(true)}
                                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                                >
                                    Login here
                                </button>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSignUp
