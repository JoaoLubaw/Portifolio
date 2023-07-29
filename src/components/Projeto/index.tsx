import Paragrafo from '../paragrafo'
import Title from '../title'
import { Card, LinkBotao } from './styles'

type Props = {
  title: string
  description: string
  link: string
  git: string
}

const Projeto = ({ title, description, link, git }: Props) => (
  <Card>
    <Title>{title}</Title>
    <Paragrafo tipo="secundario">{description}</Paragrafo>
    <LinkBotao href={link}>Visitar</LinkBotao>
    <LinkBotao className="Git" href={git}>
      Ver no GitHub
    </LinkBotao>
  </Card>
)

export default Projeto
