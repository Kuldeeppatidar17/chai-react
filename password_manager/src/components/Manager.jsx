import React, { useEffect, useRef, useState } from 'react'

const Manager = () => {
    const passRef = useRef(null)
    const eyeRef = useRef(null)
    const [form, setForm] = useState({ site: "", userName: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])
    const showPassword = () => {
        if (passRef.current.type === "password") {
            passRef.current.type = "text";
            eyeRef.current.classList.remove("fa-eye");
            eyeRef.current.classList.add("fa-eye-slash");
        }
        else {
            passRef.current.type = "password";
            eyeRef.current.classList.remove("fa-eye-slash");
            eyeRef.current.classList.add("fa-eye");
        }
    }
    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        //console.log([...passwordArray, form])
        setForm({ site: "", userName: "", password: "" })
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="absolute top-0 z-[-2] max-h-screen w-screen rotate-180 transform bg-green-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className='mx-auto max-w-4xl pb-5 mb-3 rounded-md  bg-green-200 mt-10'>
                <h1 className='text-4xl text font-bold text-center pt-3'><span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>OP&gt;</span></h1>
                <p className='text-green-700 text-lg text-center'>your own password manager</p>
                <div className=" flex flex-col gap-6 p-10">
                    <input value={form.site} name='site' onChange={handleChange} className=' rounded-full border border-green-500 focus:outline-none p-4 py-1 w-full' type="text" placeholder='enter website name' />
                    <div className="flex gap-8">
                        <input value={form.userName} name='userName' onChange={handleChange} className=' rounded-full border border-green-500 focus:outline-none p-4 py-1 w-1/2' type="text" placeholder='enter user name' />
                        <div className="relative w-1/2">
                            <input ref={passRef}
                                className="rounded-full border border-green-500 focus:outline-none p-4 py-1 w-full pr-10"
                                type="password" name='password'
                                value={form.password} onChange={handleChange}
                                placeholder="enter password"
                            />
                            <span onClick={showPassword} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                <i ref={eyeRef} className="fa-solid fa-eye"></i>
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={savePassword} className='flex font-medium justify-center gap-3 items-center bg-green-400 hover:bg-green-500 rounded-full px-5 py-1 w-fit'>
                            <lord-icon
                                src="https://cdn.lordicon.com/tsrgicte.json"
                                trigger="hover"
                            >
                            </lord-icon>Add PassWord</button>
                    </div>
                </div>
                <hr className="w-full border-t border-gray-400" />
                {/* table  */}
                <h2 className='mt-3 font-bold text-[20px] text-center'>Your Password</h2>
                {passwordArray.length === 0 && <div>No Passwords to show</div>}
                {passwordArray.length !== 0 &&
                    <table className="table-auto w-[90%] mx-auto mt-4 mb-4 overflow-hidden rounded-md">
                        <thead className='bg-green-600 text-white'>
                            <tr>
                                <th className='py-1'>WebSite</th>
                                <th className='py-1'>User Name</th>
                                <th className='py-1'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-300'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='flex justify-center items-center text-center min-w-32'><a href="_blank">{item.site}</a>
                                    <div className='cursor-pointer size-7'>
                                    <lord-icon
                                        style={{"width":"25px","height":"25px"}}
                                        src="https://cdn.lordicon.com/wsaaegar.json"
                                        trigger="hover">
                                    </lord-icon>
                                    </div>
                                    </td>
                                    <td className='text-center min-w-32'>{item.userName}</td>
                                    <td className='text-center min-w-32'>{item.password}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
            </div>
        </>


    )
}

export default Manager
