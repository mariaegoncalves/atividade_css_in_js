import Header from './components/Cabecalho';
import Hero from './components/Hero';
import FormVagas from './components/FormVagas'; // Importando o componente de formulário
import ListaVagas from './containers/ListaVagas';

import './global.css';

const App = () => {
  // Exemplo de dados para as vagas
  const vagas = [
    {
      id: 1,
      titulo: 'Desenvolvedor Frontend',
      link: 'https://example.com/vaga1',
    },
    {
      id: 2,
      titulo: 'Desenvolvedor Backend',
      link: 'https://example.com/vaga2',
    },
    {
      id: 3,
      titulo: 'Designer UI/UX',
      link: 'https://example.com/vaga3',
    },
    // Adicione mais vagas conforme necessário
  ];

  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <FormVagas /> {/* Adicionando o FormVagas aqui */}
        <ListaVagas vagas={vagas} /> {/* Passando a propriedade vagas */}
      </div>
    </>
  );
}

export default App;
