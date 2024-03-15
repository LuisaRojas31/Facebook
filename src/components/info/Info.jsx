import Create from "../create/Create";
import Login from "../login/Login";

const Info = () => {
  return (
    <>
      <section className="img-title">
        <img src="src\assets\4lCu2zih0ca.svg" />
        <p className="parrafo">
          Facebook te ayuda a comunicarte y <br /> compartir con las personas
          que <br />
          forman parte de tu vida.
        </p>
      </section>
      <Login />

      <Create />
    </>
  );
};

export default Info;
