import Projeto from '../../components/Projeto'
import Title from '../../components/title'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <Lista>
      <li>
        <Projeto></Projeto>
      </li>

      <li>
        <Projeto></Projeto>
      </li>

      <li>
        <Projeto></Projeto>
      </li>

      <li>
        <Projeto></Projeto>
      </li>
    </Lista>
  </section>
)

export default Projetos
