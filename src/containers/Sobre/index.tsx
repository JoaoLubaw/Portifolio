import Paragrafo from '../../components/paragrafo'
import Title from '../../components/title'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam iusto
      facilis repellat dolorem libero assumenda voluptates. Alias cupiditate,
      dolorem fugiat non veritatis consequatur, nostrum porro error aut earum
      iure.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=JoaoLubaw&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoaoLubaw&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
