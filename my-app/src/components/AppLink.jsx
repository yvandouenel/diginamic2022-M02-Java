const AppLink = (props) => {
  return (
    <a
      className="App-link"
      
      style={{ color: props.color }}
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React depuis composant Applink
    </a>
  );
}

export default AppLink;