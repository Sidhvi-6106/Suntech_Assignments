import "./App.css";
import SideEffects from "./components/SideEffects";
// import FormDemo from "./components/FormDemo"
// import TableDemo from "./components/TableDemo"
import TaskManager from "./components/TaskManager";
// import Test1 from "./components/Test1";
// import Test2 from "./components/Test2";
// import StartDemo from "./components/StartDemo";
function App(){
  //function name should be same as the file name 
 //state(optional)
 //return a react element (mandatory)
//  const messages=[
//   {
//     message1:"Good Morning",
//     message2:"hello"
//  },
//  {
//   message1:"Good Afternoon",
//   message2:"hi"
//  },
// {
//   message1:"Good Evening",
//   message2:"hey"  
// }
// ]
 return(
  <div className='text-center border-2 p-24 bg-blue-300'>
    {/* <h1 className='text-5xl text-blue-400'>State Demo</h1> */}
    {/* {
      messages.map((msgObj,index)=>Test1 messages={msgObj})
    }
    <Test2/> */}
    {/* <StartDemo /> */}
    {/* <FormDemo /> */}
    {/* <TableDemo /> */}
    <TaskManager/>
    <SideEffects/>
  </div>
 )
}

export default App;
//JSX Javascript syntax extension