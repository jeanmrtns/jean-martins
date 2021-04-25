import { Container, Content } from "./styles";

export function Contact() {
  return (
    <Container>
      <Content>
        <h1>Insira aqui seus dados e sua mensagem</h1>
        <h6>Tempo de Resposta aproximado: 1 dia</h6>
        <form action="/contato" method="POST">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="emailaddress"
              id="email"
              placeholder="Insira aqui seu email"
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Assunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Insira aqui o assunto da mensagem"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Sua mensagem</label>
            <textarea
              id="message"
              name="message"
              placeholder="Insira aqui sua mensagem"
              required
            ></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </Content>
    </Container>
  )
}