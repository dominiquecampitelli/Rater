export function Login() {
  return (
    <div>
      <h1>Acesse sua conta</h1>
      <p>Bem vindo de volta! Entre com seus dados.</p>
      <p>E-mail</p>
      <input type="email" name="email" placeholder="Digite seu e-mail" />
      <p>Senha</p>
      <input type="password" name="password" placeholder="Digite sua senha" />
      <button type="submit">Fazer login</button>
      <div>
        <p>Não tem uma conta ainda?</p>
        <a href="#">Criar conta</a>
      </div>
    </div>
  );
}
