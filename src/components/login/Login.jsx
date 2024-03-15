import Button from "../boton/Button";
import Create from "../create/Create";
import "./login.css";

const Login = () => {
  return (
    <>
      <section className="container">
        <div className="container-input">
          <input
            className="input"
            type="email"
            placeholder="Correo electronico o número de telefono"
          />
          <input className="input" type="number" placeholder="Contraseña" />
        </div>
        <div className="section-two">
          <button className="buton">Inicia sesión</button>
          <a>¿ Olvidaste tu contraseña ?</a>
          <span className="divider" />
          <Button />
        </div>
      </section>
    </>
  );
};

export default Login;
