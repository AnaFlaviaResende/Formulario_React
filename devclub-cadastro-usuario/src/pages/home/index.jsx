import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "2342asdasds",
      name: "Rodolfo",
      age: 33,
      email: "rod@email.com",
    },
    {
      id: "75342asrg5ds",
      name: "Aline",
      age: 28,
      email: "aline@email.com",
    },
    {
      id: "9756452ag5ds",
      name: "Paulo",
      age: 88,
      email: "paulo@email.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuário</h1>
        <input placeholder="Digite seu nome" name="nome" type="text" />
        <input placeholder="Digite sua idade" name="idade" type="number" />
        <input placeholder="Digite seu email" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email:<span> {user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
