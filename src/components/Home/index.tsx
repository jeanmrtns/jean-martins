import { Container, Content, Profile, About } from "./styles";
import { GrLocation } from 'react-icons/gr';
import { FaReact, FaHtml5, FaCss3, FaJs, FaJava, FaPython } from 'react-icons/fa';
import { SiStyledComponents } from 'react-icons/si';

export function Home() {
  return (
    <Container>
      <Content>
        <Profile>
          <h2>Jean Martins</h2>
          <img src="https://github.com/jeanmrtns.png" alt="Jean"/>
          <ul>
            <li>
              <p><strong>Idade: </strong>{new Date().getFullYear() - 1999} anos</p>
            </li>
            <li>
              <p><strong>Profissão atual: </strong>Analista de Distribuição Jr.</p>
            </li>
            <li>
              <p><strong>Empresa: </strong>Danone LTDA.</p>
            </li>
            <li>
              <p><strong>Localização: </strong><GrLocation /> Poços de Caldas - MG</p>
            </li>
          </ul>
        </Profile>
        <About>
          <div>
            <ul>
              <h3>Linguagens</h3>
              <li><FaJs /> <span>JavaScript</span></li>
              <li><FaPython /> <span>Python</span></li>
              <li><FaJava /> <span>Java</span></li>
            </ul>
          </div>

          <div>
            <ul>
              <h3>Tecnologias</h3>
              <li><FaHtml5 /> <span>HTML 5</span></li>
              <li><FaCss3 /> <span>CSS 3</span></li>
              <li><FaReact /> <span>React.js</span></li>
              <li><SiStyledComponents /> <span>styled-components</span></li>
            </ul>
          </div>
        </About>
      </Content>
    </Container>
  )
}