import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/paragrafo'
import Title from '../../components/title'
import { BotaoTema, Descricao, Links, SideBarContainer } from './styles'

import LinkedIn from '../../images/LinkedIn.svg'
import GitHub from '../../images/Github.svg'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Title fontSize={20}>João Lubawaski</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        JoaoLubaw
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <Links>
        <a href="https://www.linkedin.com/in/joão-lubawaski-2672461b2/">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
        <a href="https://github.com/JoaoLubaw">
          <img src={GitHub} alt="GitHub" />
        </a>
      </Links>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
