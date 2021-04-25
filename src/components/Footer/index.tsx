import { Container, Content, WebDev } from "./styles";
import { FaGithub, FaLinkedin, FaRocket, FaTwitter } from 'react-icons/fa'

export function Footer() {
  return (
    <Container>
      <Content>

        <WebDev>
          <h5>Jean Martins</h5>
          <p>Web Developer</p>
          <p>Todos os direitos reservados &copy; <span>{new Date().getFullYear()}</span></p>
        </WebDev>

        <ul>
          <li>
              <a href="https://www.linkedin.com/in/jean-martins-8648111b7/" target="_blank" rel="noreferrer">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.github.com/jeanmrtns" target="_blank" rel="noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </a>
            </li>
            <li>
              <a href="https://www.twitter.com/jeanmrtns4" target="_blank" rel="noreferrer">
              <FaTwitter />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://app.rocketseat.com.br/me/jean-martins" target="_blank" rel="noreferrer">
              <FaRocket />
              <span>Rocketseat</span>
            </a>
          </li>
          
        </ul>
      </Content>
    </Container>
  )
}