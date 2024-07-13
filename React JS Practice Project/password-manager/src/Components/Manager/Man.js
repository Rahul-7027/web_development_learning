import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Man = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
        site: ""
    })
    const ref = useRef();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [passwordArray, setpasswordArray] = useState([])

    const getPasswords = async () => {
        let fetchData = await fetch("http://localhost:3000/")
        let passwords = await fetchData.json()
        setpasswordArray(passwords)
    }

    useEffect(() => {
        getPasswords()
    }, [])


    const showPassData = () => {
        ref.current.src === "https://i.pinimg.com/564x/c7/c8/7c/c7c87cc1cb7bb35e0af8e116a83db8f5.jpg" ?
            ref.current.src = "https://www.svgrepo.com/show/380007/eye-password-hide.svg" : ref.current.src = "https://i.pinimg.com/564x/c7/c8/7c/c7c87cc1cb7bb35e0af8e116a83db8f5.jpg";

        setPasswordVisible(!passwordVisible);

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const savePassword = async () => {

        // If any such id exists in the db, delete it 
        await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })

        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })

        setForm({
            username: "",
            password: "",
            site: ""
        })
        toast('Password Save', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }

    const copyText = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }


    // Data not will be fill
    const isFormEmpty = !form.username || !form.password || !form.site

    /// Edit functionality
    const editPassword = (id) => {
        const editData = ({ ...passwordArray.filter(i => i.id === id)[0], id: id })
        setForm(editData);
        setpasswordArray(passwordArray.filter(item => item.id !== id))

        console.log("Edit id ", id)

    }

    // Delete Functionality
    const deletePassword = async (id) => {
        console.log("deleteid " + id)
        const updatePassword = (passwordArray.filter(item => item.id !== id))
        setpasswordArray(updatePassword)

        await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
        // localStorage.setItem("passwords", JSON.stringify(updatePassword))

        toast('Password Deleted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    return (
        <div>
            <ToastContainer />

            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className="container mx-auto bg-slate-50 my-7 max-w-4xl rounded-lg" style={{
                marginTop: "107px", backgroundColor: "darkslategray"
            }}>

                <h1 className='text-center  font-sans font-bold text-4xl'><span className='text-red-700'>&lt;</span>Pass<span className='text-red-700'>OP&gt;</span> </h1>
                <p className='text-center  font-sans font-bold text-2xl'>Your own Password Manager</p>
                <div className="text-white flex flex-col p-4 my-4 mx-0 items-center" >
                    <input value={form.site} name="site" className='flex rounded-full w-full p-1 text-black' placeholder='Enter webiste URL ' type="text" id='' onChange={handleChange} />


                    <div className="flex w-full justify-between my-4 mx-0">
                        <input value={form.username} name="username" type="text" placeholder='Enter Username' className='rounded-full w-full p-4 py-1 text-black' style={{ marginRight: "10px" }} onChange={handleChange} />
                        <div className="relative">

                            <input value={form.password} name="password" type={passwordVisible ? 'text' : 'password'} placeholder='Enter password' className='rounded-full w-full p-4 py-1 text-black' onChange={handleChange} />
                            <span className='absolute right-0' onClick={showPassData}>
                                <img ref={ref} src="https://www.svgrepo.com/show/380007/eye-password-hide.svg" style={{ height: "21px", width: "41px", marginLeft: "-17px", marginTop: "5px", cursor: "pointer" }} alt="" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} disabled={isFormEmpty} className='flex justify-center items-center bg-black text-white rounded-full px-4 py-2 w-fit'>
                        <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
                        Add Password</button>
                </div>
            </div>
            <div className="password">
                <h1 className='text-center'>Your Passwords</h1>
                {passwordArray.length === 0 && <div className='text-center'>"NO password to shows"</div>}


                <div className="relative overflow-x-auto">
                    {passwordArray.length != 0 && <table className="w-full border-separate border border-red-700 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs  uppercase bg-gray-50  bg-green-900 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3 border-separate border border-red-700 ">
                                    Website Name
                                </th>
                                <th scope="col" className="px-6 py-3 border-separate border border-red-700 ">
                                    Username
                                </th>
                                <th scope="col" className="px-6 py-3 border-separate border border-red-700 ">
                                    Password
                                </th>
                                <th scope="col" className="px-6 py-3 border-separate border border-red-700 ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {passwordArray.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-separate border border-red-700  ">{item.site}
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.site)}>
                                                <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </td>
                                        <td className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-separate border border-red-700  ">{item.username}
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.username)}>
                                                <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </td>
                                        <td className=" px-6 py-4 border-separate border border-red-700 ">{"*".repeat(item.password.length)}
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.password)}>
                                                <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </td>

                                        <td className=" px-6 py-4 border-separate border border-red-700 ">
                                            <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/wuvorxbv.json"
                                                    trigger="hover"
                                                    style={{ width: "25px", height: "25px" }} />
                                            </span>
                                            <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/drxwpfop.json"
                                                    trigger="hover"
                                                    style={{ width: "25px", height: "25px" }} />
                                            </span>

                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>}
                </div>

            </div>
        </div>
    )
}

export default Man
