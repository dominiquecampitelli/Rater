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

export function Register() {
  return (
    <Container>
      <Title>Crie sua conta</Title>
      <Subtitle>Insira seus dados para completar o cadastro.</Subtitle>
      <FormBox>
        <InputBox>
          <InputLine>
            <InputTitle>Nome completo</InputTitle>
            <Input type="text" name="name" placeholder="Digite seu nome" />
          </InputLine>
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
          <InputLine>
            <InputTitle>Confirmar senha</InputTitle>
            <Input
              type="password"
              name="password"
              placeholder="Confirme sua senha"
            />
          </InputLine>
        </InputBox>
        <Button type="submit">Cadastrar</Button>
      </FormBox>
      <HaveAccount>
        Já tem uma conta?&nbsp;
        <RedirectLink href="#">Fazer login</RedirectLink>
      </HaveAccount>
    </Container>
  );
}
