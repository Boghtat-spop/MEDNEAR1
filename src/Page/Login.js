import React from "react";
import "../styles/Login.css"

const Login = () => (
  <div className="login-page container text-center py-5">
    <h1 className="text-primary mb-4">Connexion</h1>
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Adresse e-mail</label>
        <input type="email" className="form-control" id="email" placeholder="Entrer votre e-mail" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Mot de passe</label>
        <input type="password" className="form-control" id="password" placeholder="Entrer votre mot de passe" />
      </div>
      <button type="submit" className="btn btn-primary">Se connecter</button>
    </form>
  </div>
);

export default Login;
