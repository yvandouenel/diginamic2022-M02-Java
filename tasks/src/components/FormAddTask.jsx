const FormAddTask = ({inputRef, onSubmitAddTask }) => {
  return (
    <form
      onSubmit={(e) => { onSubmitAddTask(e) }}
      action="">
      <label htmlFor="add-task">Ajouter une tâche</label>
      <input ref={inputRef} type="text" id="add-task" />
      <input type="submit" value="Ajouter" />
    </form>
  );
}

export default FormAddTask;