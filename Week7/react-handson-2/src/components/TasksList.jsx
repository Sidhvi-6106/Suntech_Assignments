function TasksList({tasks}) {
  return (
    <div>
        <h3 className="text-amber-300">List of Tasks</h3>
        {
            tasks.length==0?<img className="w-50" src="https://static.vecteezy.com/system/resources/previews/005/726/101/non_2x/cardboard-box-funny-box-box-character-delivery-box-box-emoji-free-vector.jpg"/>:tasks.map((taskObj,index)=><p className="mt-2" key={index}>{taskObj.taskName}</p>)
        }
    </div>
  )
}

export default TasksList