import { StyledVaga, VagaTitulo, VagaLink } from './StyledVaga';

type VagaProps = {
  titulo: string;
  link: string;
};

const Vaga = ({ titulo, link }: VagaProps) => (
  <StyledVaga>
    <VagaTitulo>{titulo}</VagaTitulo>
    <VagaLink href={link}>Ver detalhes</VagaLink>
  </StyledVaga>
);

export default Vaga;
