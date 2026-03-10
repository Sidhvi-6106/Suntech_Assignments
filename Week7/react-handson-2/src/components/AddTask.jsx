import {useForm} from 'react-hook-form'

function AddTask({addNewTask}) {
    const {register,handleSubmit,reset}=useForm();
    const onSubmitForm=(taskObj)=>{
        addNewTask(taskObj)
        reset()
    }
  return (
    <div>
        <h3 className='text-amber-300 mb-3'>Add Task</h3>
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className='mb-3'>
            <input type="text" {...register("taskName")} placeholder="add tasks" className='border-3 p-2'/>
            </div>
            <button className='border-2 bg-pink-200 px-3 py-2 mt-4 '>Add</button>
        </form>
    </div>
  )
}

export default AddTask