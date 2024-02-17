import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form } from './styles'
import { registrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const registrarContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      registrar({
        nome,
        numero,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={registrarContato}>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          type="number"
          placeholder="Número"
        />
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-Mail"
        />
        <BotaoSalvar type="submit">Registrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
