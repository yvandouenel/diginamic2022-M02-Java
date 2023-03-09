const FormAddTask = ({inputRef, onSubmitAddTask }) => {
  return (
    <form
      onSubmit={(e) => { onSubmitAddTask(e) }}
      action=""
      className="my-3 input-group gap-2 align-items-center">
      <label className=" form-label" htmlFor="add-task">Ajouter une tâche</label>
      <input className="w-25 " ref={inputRef} type="text" id="add-task" />
      <input className="btn btn-success" type="submit" value="Ajouter" />
    </form>
  );
}

export default FormAddTask;