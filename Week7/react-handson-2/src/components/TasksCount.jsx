function TasksCount({tasks}) {
    // console.log(tasks)
  return (
    <div>
        <h3 className="text-amber-300"> Tasks Count </h3>
        <p className="mt-4 ">{tasks.length}</p>
    </div>
  )
}

export default TasksCount