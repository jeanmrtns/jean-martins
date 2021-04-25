import { Container, Content } from "./styles";
import logoImg from '../../assets/logo.png'
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Content>
        <Link to="/" ><img src={logoImg} alt="Jean Martins"/></Link>
        <nav>
          <ul>
            <li><Link to="/">Página Inicial</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </Content>
    </Container>
  )
}