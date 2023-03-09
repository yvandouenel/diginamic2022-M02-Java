const Task = ({ task, onClickValidate, onClickdelete }) => {
  return (
    <section className="d-flex justify-content-between border rounded p-1">
      <h2 className={task.isValidate ? 'text-decoration-line-through' : ''}>{task.label}</h2>
      <div>
        <button onClick={(e) => { onClickValidate(task.id) }} className="btn btn-success m-2">{task.isValidate ? 'Invalider' : 'Valider'}</button>
        <button
          onClick={(e) => { onClickdelete(task.id) }}
          className="btn btn-danger">Supprimer</button>
      </div>
    </section>
  );
}

export default Task;