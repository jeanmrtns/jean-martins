import { Container, Content } from "./styles";
import {useEffect, useState} from 'react';

interface Repo {
  id: number,
  name: string,
  html_url: string
}

export function Projects() {

  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/jeanmrtns/repos')
    .then(response => response.json())
    .then(data => setRepos(data))
  }, [])

  return (
    <Container>
      <Content>
        {repos && 
          <>
            <h1>Meus projetos no GitHub</h1>
            <ul>
              {repos.map(repo => (
                <li key={repo.id}>
                  <h2>{repo.name}</h2>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">Acesse o projeto</a>
                </li>
              ))}
            </ul>
          </>
        }
      </Content>
    </Container>
  )
}