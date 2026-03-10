function Test1(props){
    //state
    let {message1,message2}=props.messages
    return(
        <div className="bg-amber-300 p-10 m-5">
            <p className="text-3xl">{message1}</p>
            <p className="text-3xl">{message2}</p>
        </div>
    );
}
export default Test1
//react component can return maximum one component 