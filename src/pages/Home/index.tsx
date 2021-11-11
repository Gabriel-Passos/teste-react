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
        <Select />

        <section>
          <Table />
        </section>
      </Main>
      
      <Footer />
    </>
  );
}