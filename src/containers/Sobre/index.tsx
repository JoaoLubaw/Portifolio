import Paragrafo from '../../components/paragrafo'
import Title from '../../components/title'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Olá, meu nome é João Lubawaski e sou um desenvolvedor Full Stack em
      desenvolvimento!
    </Paragrafo>
    <Paragrafo tipo="principal">
      Minha primeira apresentação ao mundo da tecnologia (além do entretenimento
      e o uso recreativo de computadores/celulares) surgiu por meio de um curso
      simples de informática profissional, onde aprendemos a utilizar diferentes
      softwares (como alguns programas da Adobe, o pacote Office e etc) e fomos
      introduzidos ao HTML e ao CSS, onde aprendemos o básico destas linguagens.
      Apartir daí comecei a enxergar todo o potencial que um código bem escrito
      pode entregar à humanidade.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoaoLubaw&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
