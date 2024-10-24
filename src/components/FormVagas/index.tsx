import React, { useState } from 'react'
import { StyledForm, StyledInput, StyledButton } from './StyledFormVagas'

const FormVagas = ({ adicionarVaga }) => {
  const [titulo, setTitulo] = useState('')
  const [link, setLink] = useState('')

  const aoEnviarForm = (e) => {
    e.preventDefault()

    // Criar um novo objeto de vaga
    const novaVaga = {
      id: Date.now(), // Usando o timestamp como ID
      titulo,
      link
    }

    // Chamar a função para adicionar a vaga
    adicionarVaga(novaVaga)

    // Limpar os campos do formulário
    setTitulo('')
    setLink('')
  }

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <StyledInput
        placeholder="Título da Vaga"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <StyledInput
        placeholder="Link da Vaga"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <StyledButton type="submit">Adicionar Vaga</StyledButton>
    </StyledForm>
  )
}

export default FormVagas
