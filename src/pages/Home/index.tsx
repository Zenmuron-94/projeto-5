import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral voltarHome />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
