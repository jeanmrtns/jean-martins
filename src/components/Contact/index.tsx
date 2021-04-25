import { Container, Content, SocialMedia } from "./styles";
import { FaGithub, FaLinkedin, FaRocket, FaTwitter } from 'react-icons/fa';

export function Contact() {
  return (
    <Container>
      <Content>
        <SocialMedia>
            <h1>Minhas Redes Sociais</h1>
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

            <img src="https://github.com/jeanmrtns.png" alt="Jean Martins"/>
          </SocialMedia>

      </Content>
    </Container>
  )
}