import { TaskInterface } from "../interfaces/TaskInterface";
const Task = (props: TaskInterface) => {
  return (
    <section className="d-flex justify-content-between my-2 border rounded p-2">
      <h2>{props.label}</h2>
      <div className="d-flex gap-3">
        <button className="btn btn-success">Valider</button>
        <button className="btn btn-danger">Supprimer</button>
      </div>
    </section>
  );
}

export default Task;