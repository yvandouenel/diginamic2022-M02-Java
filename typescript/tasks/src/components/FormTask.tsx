import {propsFormInterface} from "../interfaces/TaskInterface";
const FormTask = (props: propsFormInterface) => {
  return (
    <form action=""
      onSubmit={(e: React.FormEvent) => {
        props.onSubmitAddTask(e);
      }}
    >
      <label htmlFor="task">Tâche</label>
      <input type="text" id="task" name="task" />
      <input type="submit" value="Ajouter" />
    </form>
  );
}

export default FormTask;