export default function Counter({ count, increment }) {
  return (
    <div>
      <p>Vous avez cliqué {count} times</p>
      <button
        style={{ margin: "20px" }}
        onClick={() => { increment(count => count + 1) }}
      >Clic</button>
    </div>
  )
}
