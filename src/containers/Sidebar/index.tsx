import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/paragrafo'
import Title from '../../components/title'
import { BotaoTema, Descricao, SideBarContainer } from './styles'

const Sidebar = () => (
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
      <BotaoTema>Trocar Tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
