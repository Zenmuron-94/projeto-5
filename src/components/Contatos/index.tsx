import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [numeroOriginal, emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <S.Nome>
        {estaEditando && <em>Editando: </em>}
        {nome}
      </S.Nome>
      <S.Numero
        disabled={!estaEditando}
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      ></S.Numero>
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></S.Email>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    numero,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
