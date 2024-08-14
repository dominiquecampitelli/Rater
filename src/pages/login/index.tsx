import {
  Container,
  Title,
  Subtitle,
  FormBox,
  InputBox,
  InputLine,
  InputTitle,
  Input,
  Button,
  HaveAccount,
  RedirectLink,
} from "./styles";

export function Login() {
  return (
    <Container>
      <Title>Acesse sua conta</Title>
      <Subtitle>Bem vindo de volta! Entre com seus dados.</Subtitle>
      <FormBox>
        <InputBox>
          <InputLine>
            <InputTitle>E-mail</InputTitle>
            <Input type="email" name="email" placeholder="Digite seu e-mail" />
          </InputLine>
          <InputLine>
            <InputTitle>Senha</InputTitle>
            <Input
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </InputLine>
        </InputBox>
        <Button type="submit">Fazer login</Button>
      </FormBox>
      <HaveAccount>
        Não tem uma conta ainda?&nbsp;
        <RedirectLink href="#">Criar conta</RedirectLink>
      </HaveAccount>
    </Container>
  );
}
