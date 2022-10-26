import Login from "../components/Login";
import "../styles/login.css";

//Page de connexion qui va contenir mon composant
//LOGIN où sont appliqués l'ensemble des paramètres
//pour la connexion de l'utilisateur

function LoginPage() {
  return (
    <main className="login-section">
      <section className="login-content">
        <i className="fa fa-user-circle login-icon"></i>
        <h1>Sign In</h1>
        <Login />
      </section>
    </main>
  );
}

export default LoginPage;
