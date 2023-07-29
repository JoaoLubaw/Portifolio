import Projeto from '../../components/Projeto'
import Title from '../../components/title'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <Lista>
      <li>
        <Projeto
          title="To-do"
          description="Projeto de lista de tarefas criado apartir do React (Single Page Application)"
          link="https://todo-react-pi-liart.vercel.app"
          git="https://github.com/JoaoLubaw/Todo-React"
        ></Projeto>
      </li>
      <li>
        <Projeto
          title="Clone Disney Plus (Pt1)"
          description='Com react recriei a homepage e uma página de play de um título do Disney Plus - Aperte no botão "Entrar" para acessar a segunda parte.'
          link="https://clone-disney-plus-hkwl.vercel.app"
          git="https://github.com/JoaoLubaw/Clone_DisneyPlus"
        ></Projeto>
      </li>
      <li>
        <Projeto
          title="Clone Disney Plus (Pt2)"
          description="Com react recriei a homepage e uma página de play de um título do Disney Plus - Aperte na logo Disney (header) para acessar a primeira parte"
          link="https://disney-plus-clone-rosy.vercel.app"
          git="https://github.com/JoaoLubaw/DisneyPlus_Clone"
        ></Projeto>
      </li>
      <li>
        <Projeto
          title="Laneh Brand"
          description="Site fictício de uma loja de roupas, criado de forma simples (HTML, CSS E JavaScript/Jquery + Plugins)"
          link="https://vercel.com/joaolubaw/projeto-3-laneh-brand"
          git="https://github.com/JoaoLubaw/Projeto-3---Laneh-Brand/tree/master"
        ></Projeto>
      </li>
      <li>
        <Projeto
          title="Sorteador"
          description="Um sorteador simples, mas funcional, criado apartir de uma função de HTML, Less/Css, JavaScript e Grunt."
          link="https://sorteador-grunt-tawny.vercel.app"
          git="https://github.com/JoaoLubaw/sorteador_grunt/tree/main"
        ></Projeto>
      </li>
      <li>
        <Projeto
          title="João PauLooza"
          description="Página de um evento fictício de aniversário com nome de João PauLooza, um projeto simples com contador até a data do evento (HTML, SCSS E JavaScript)."
          link="https://proj5-evento.vercel.app"
          git="https://github.com/JoaoLubaw/Proj5Evento/tree/master"
        ></Projeto>
      </li>
      <li>
        <Projeto
          title="Galeria"
          description="Aplicação simples de galeria de fotos com funcionalidade de adição e exclusão de imagens (HTML, CSS JavaScript/jQuery)."
          link="https://galeria-de-fotos-psi.vercel.app"
          git="https://github.com/JoaoLubaw/GaleriaDeFotos/tree/main"
        ></Projeto>
      </li>
      <li>
        <Projeto
          title="Agenda de contatos"
          description="Projeto simples de agenda de contatos (HTML, CSS E JavaScript)."
          link="https://aplicacao-contatos.vercel.app"
          git="https://github.com/JoaoLubaw/Aplicacao_Contatos/tree/main"
        ></Projeto>
      </li>
      <li>
        <Projeto
          title="Ebac Shoes"
          description="Site simples de amostragem de catálogo de loja de tênis (HTML, CSS E JavaScript)."
          link="https://ebac-shop-psi.vercel.app"
          git="https://github.com/JoaoLubaw/Ebac-Shop/tree/main"
        ></Projeto>
      </li>
      <li>
        <Projeto
          title="Trojão News"
          description="Modelo simples de página de notícias (HTML e CSS)."
          link="https://trojao-news.vercel.app"
          git="https://github.com/JoaoLubaw/TrojaoNews"
        ></Projeto>
      </li>
    </Lista>
  </section>
)

export default Projetos
