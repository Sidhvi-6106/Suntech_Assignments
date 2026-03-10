    import {useState} from 'react';
function StartDemo(){
    const[counter,setCounter]=useState(10);
    const[marks,setMarks]=useState([1,2]);
    let [user,setUser]=useState({email: 'akulasidhvi@gmail.com'});
    const increment=()=>{
        setCounter(counter+1);
    }
     const decrement=()=>{
        setCounter(counter-1);
    }
    const reset=()=>{
        setCounter(0);
    }
    const power=()=>{
        setCounter(counter*counter);
    }
    const addMarks=()=>{
        setMarks([...marks,123]);
    }
     const addMarksFront=()=>{
        setMarks([123,...marks]);
    }
    const addMarksAt=()=>{
        setMarks([...marks.slice(0,1),123,...marks.slice(1)]);
    }
    const updateUser=()=>{
        setUser({...user,age:20,city:'hyd'})
    }
    const deleteMark=(index)=>{
        let result=marks.filter((_,i)=>{i!=index})
        setMarks(result)
    }
    const deleteProp=()=>{
        let {age,...rest}=user
        setMarks(rest)
    }
    return(
        <div>
            <p className="text-4xl mt-10">Counter: {counter}</p>
            <button onClick={increment} className="bg-blue-300 px-5 py-2 mt-10 mr-10 ">Increment</button>
            <button onClick={decrement} className="bg-blue-300 px-5 py-2 mt-10 ml-10">Decrement</button>
            <button onClick={reset} className="bg-purple-200 px-6 py-2 mt-10 ml-20">Reset</button>
            <button onClick={power} className="bg-purple-200 px-6 py-2 mt-10 ml-20">Power</button>
            <button onClick={addMarks} className="bg-green-200 px-6 py-2 mt-10 ml-20">Add Marks</button>
            <button onClick={updateUser} className="bg-green-200 px-6 py-2 mt-10 ml-20">Update User</button>
            <button onClick={addMarksFront} className="bg-green-200 px-6 py-2 mt-10 ml-20">Add Marks Front</button>
            <button onClick={addMarksAt} className="bg-green-200 px-6 py-2 mt-10 ml-20">Add Marks At Position</button>
            <button onClick={()=>deleteMark(1)} className="bg-green-200 px-6 py-2 mt-10 ml-20">Delete Mark</button>
            <button onClick={deleteProp}  className="bg-green-200 px-6 py-2 mt-10 ml-20">DeleteProp</button>
            <h1>Marks</h1>
            {
                marks.map((m,index)=>
                <p key={index}> {m} </p>
            )
            }
            <h1>User</h1>
            {/* {Object.values(user).filter()} */}
             {Object.values(user).map((v, index) => (
        <p key={index}>{v}</p> ))}
            <p>Email: {user.email}</p>
            {
            user.city && <p>City: {user.city}</p>
            }
            {
                user.age && <p>Age:{user.age}</p>
            }
        </div>
    );
}
export default StartDemo;