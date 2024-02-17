import { useSelector } from 'react-redux'
import Contato from '../../components/Contatos'
import { MainContainer, Titulo } from '../../styles/index'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }
  return (
    <MainContainer>
      <Titulo as="p">Seus Contatos</Titulo>
      <ul>
        {filtraContatos().map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              email={c.email}
              numero={c.numero}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
