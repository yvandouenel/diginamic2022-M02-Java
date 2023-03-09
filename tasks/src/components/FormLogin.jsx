const FormLogin = ({onSubmitLogin }) => {
  return (
    <form
    className="m-5 d-flex justify-content-center gap-3 align-items-center"
      onSubmit={(e) => { onSubmitLogin(e) }}
      action="">
      <label htmlFor="login">Login</label>
      <input  type="text" id="login" />
      <label htmlFor="pwd">Mot de passe</label>
      <input  type="password" id="pwd" />
      <input type="submit" value="Se connecter" className="btn btn-success"/>
    </form>
  );
}

export default FormLogin;