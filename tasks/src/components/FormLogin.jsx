const FormLogin = ({inputRef, onSubmitAddTask }) => {
  return (
    <form
      onSubmit={(e) => { onSubmitAddTask(e) }}
      action="">
      <label htmlFor="login">Login</label>
      <input  type="text" id="login" />
      <label htmlFor="pwd">Mot de passe</label>
      <input  type="password" id="pwd" />
      <input type="submit" value="Se connecter" />
    </form>
  );
}

export default FormLogin;