const Task = ({label}) => {
  return (
    <section className="d-flex justify-content-between border rounded p-1">
      <h2>{label}</h2>
      <div>
        <button className="btn btn-success m-2">Valider</button>
        <button className="btn btn-danger">Supprimer</button>
      </div>
    </section>
  );
}

export default Task;