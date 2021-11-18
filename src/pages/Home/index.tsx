import { Header } from "../../components/Header";
import { Select } from "../../components/Select";
import { Table } from "../../components/Table";
import { Footer } from "../../components/Footer";

import { Main } from "./styles";


export const Home: React.FC = () => {
  return (
    <>
      <Header />

      <Main>
        <strong>Selecione uma diretoria para ver seus dados na tabela</strong>

        <Select />

        <section>
          <Table />
        </section>
      </Main>
      
      <Footer />
    </>
  );
}