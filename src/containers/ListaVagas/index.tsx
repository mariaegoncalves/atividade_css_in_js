import Vaga from '../../components/Vaga'; 
import { StyledJobList } from './StyledListaVagas';

type VagaType = {
  id: number;      // Supondo que você tenha um id numérico
  titulo: string;  // Título da vaga
  link: string;    // Link para a vaga
};

type ListaVagasProps = {
  vagas: VagaType[]; // Definindo o tipo para as vagas
};

const ListaVagas = ({ vagas }: ListaVagasProps) => (
  <StyledJobList>
    {vagas.map((vaga) => (
      <Vaga key={vaga.id} titulo={vaga.titulo} link={vaga.link} />
    ))}
  </StyledJobList>
);

export default ListaVagas;
