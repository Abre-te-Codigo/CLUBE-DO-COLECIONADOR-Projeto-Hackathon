import React from 'react'
import { FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import { useHistory } from 'react-router-dom'

// import api from '../services/api';

import Input from '../components/Input';
import Button from '../components/Button';

import { Container, Content } from '../styles/pages/landing'
import imgLogo from '../images/logo_dark.svg'
// import { useCookies } from 'react-cookie/es6';

function Landing() {

  // const [id, setId] = useState('');
  const history = useHistory();
  // const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  async function handleLogin(e: any) {
    e.preventDefault();

    try{

      // const response = await api.get(`users`);
        // setCookie('alert', 'ativo', { path: '/app' }); 
        history.push('/app');
      } catch (err) {
        alert('Falha no login, tente novamente');
      }
  }

  return (
    <Container>
      <Content>
      <img src={imgLogo} alt="Clube do Colecionador"/>
      <form onSubmit={ handleLogin }>
        <h1>Faça o seu login</h1>
        <Input icon={FiMail} name="email" type="text" placeholder="E-mail" required />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
          required
        />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="signUp">
        <FiLogIn />
        Criar conta
      </a>
      </Content>
    </Container>
  );
}

export default Landing;

