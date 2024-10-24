import styled from 'styled-components';

// Estilização do formulário
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os itens horizontalmente */
  margin: 0 auto; /* Centraliza o formulário na página */
`;

// Estilização do campo de entrada
export const StyledInput = styled.input`
  padding: 12px;
  margin-bottom: 16px; /* Espaçamento entre o input e o botão */
  border: 1px solid var(--cor-principal); /* Utilize variáveis CSS para as cores */
  border-radius: 4px;
  width: 100%; /* Largura total */
  max-width: 400px; /* Limite máximo da largura */
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: var(--cor-secundaria); /* Alterar a borda ao focar */
  }
`;

// Estilização do botão
export const StyledButton = styled.button`
  padding: 12px 24px;
  background-color: var(--cor-secundaria);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: var(--cor-principal); /* Alterar a cor ao passar o mouse */
  }
`;
