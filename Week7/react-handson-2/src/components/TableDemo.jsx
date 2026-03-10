import {useForm} from 'react-hook-form'
import {useState} from 'react'
function TableDemo(){
const {register,handleSubmit,formState:{errors}} = useForm()
const [users, setUser] = useState([])
const submitForm=(userObj)=>{
        setUser(prevuser=>[...prevuser,userObj])
    }
    return(
        <div className='bg-blue-200 w-full flex flex-col md:flex-row gap-6 p-6'>
            <div className='box bg-pink-200 flex-1 mb-6 md:mb-0 md:mr-6'>
                <h1 className='font-bold text-3xl mb-3 mt-3'>Form</h1>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className='p-1'>
                        <input type="text"  {...register("FirstName",{required:true,minLength:4,maxLength:8})} placeholder='FirstName' className='border-2 p-1 bg-slate-300' />
                        {
                        errors.FirstName?.type === 'required' && <p className='text-red-500'> * First Name is Required</p>
                        }
                        {
                            errors.FirstName?.type === 'minLength' && <p className='text-red-500'> * Min length is 3</p>
                        }
                        {
                            errors.FirstName?.type === 'maxLength' && <p className='text-red-500'> * Max length is 8</p>
                        }
                    </div >
                    <div className='p-1'>
                        <input type="text" {...register("LastName",{required:true,minLength:3,maxLength:8})}  placeholder='LastName' className='border-2 p-1 bg-slate-300' />
                        {
                            errors.LastName?.type === 'required' && <p className='text-red-500'> * Last Name is Required</p>
                        }
                        {
                            errors.LastName?.type === 'minLength' && <p className='text-red-500'> * Min length is 3</p>
                        }
                        {
                            errors.LastName?.type === 'maxLength' && <p className='text-red-500'> * Max length is 8</p>
                        }
                    </div>
                    <div className='p-1'>
                        <input type="email"  {...register("email",{required:true})} placeholder='Email' className='border-2 p-1 bg-slate-300' />
                        {
                            errors.email?.type === 'required' && <p className='text-red-500'> * Email is required</p>
                        }
                    </div>
                    <div className='p-1'>
                        <input type="date" {...register("dob",{required:true})} placeholder='dob' className='border-2 p-1 bg-slate-300' />
                        {
                            errors.dob?.type === 'required' && <p className='text-red-500'>*Dob is required use - </p>
                        }
                    </div>
                    <button type='submit' className='bg-sky-600 p-2 m-2 rounded-3xl'> Submit </button>
                </form>
            </div>
            <div className='box bg-blue-100 flex-1'>
                <h1 className='text-2xl font-bold mt-3 mb-3'> List Of Users </h1>
                <table className='w-full border-2 bg-blue-300 '>
                    <thead>
                        <tr className='border-2'>
                            <th className='border-2'>First Name</th>
                            <th className='border-2'>Last Name</th>
                            <th className='border-2'>Email</th>
                            <th className='border-2'>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((userObj)=>(
                                <tr key={userObj.email}>
                                    <td className='border-2'>{userObj.FirstName}</td>
                                    <td className='border-2'>{userObj.LastName}</td>
                                    <td className='border-2'>{userObj.email}</td>
                                    <td className='border-2'>{userObj.dob}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableDemo;