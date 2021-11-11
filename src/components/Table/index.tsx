import { useEffect, useState } from "react";

import { useSchool } from "../../hooks/useSchool";

import { api } from "../../services/api";

import { TableContainer } from "./styles";

interface SchoolData {
  results: [
    {
      dre: string;
      tipoesc: string;
      faixa: string;
      count: number;
    }
  ]
}

export const Table: React.FC = () => {
  const { initialBoard } = useSchool();

  const [schoolData, setSchoolData] = useState<SchoolData>({} as SchoolData);

  useEffect(() => {
    if (initialBoard) {
      api.request({
        url: `https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/smeescolas/${initialBoard}`,
        method : 'GET',
        data: {},
      }).then((response) => {setSchoolData(response.data)});
    } else {
      return;
    }
  }, [initialBoard]);

  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Table</th>
        </tr>
        <tr>
          <th></th>
          <th>Sem esdutantes cadastrados</th>
          <th>1 a 250 estudantes</th>
          <th>251 a 500 estudantes</th>
          <th>501 a 1000 estudantes</th>
          <th>1001 a 1500 estudantes</th>
          <th>1501 a 2000 estudantes</th>
          <th>2001 a 2500 estudantes</th>
          <th>Mais de 2500 estudantes</th>
          <th>TOTAL DE UNIDADES ESCOLARES POR TIPO</th>
        </tr>
      </thead>
      
      <tbody>
        {schoolData.results?.map((result, index) => {
          return (
          <tr key={index}>
            <td>{result.tipoesc}</td>
            <td>{result.faixa === 'Sem esdutantes cadastrados' ? result.count : 0}</td>
            <td>{result.faixa === '1 a 250 estudantes' ? result.count : 0}</td>
            <td>{result.faixa === '251 a 500 estudantes' ? result.count : 0}</td>
            <td>{result.faixa === '501 a 1000 estudantes' ? result.count : 0}</td>
            <td>{result.faixa === '1001 a 1500 estudantes' ? result.count : 0}</td>
            <td>{result.faixa === '1501 a 2000 estudantes' ? result.count : 0}</td>
            <td>{result.faixa === '2001 a 2500 estudantes' ? result.count : 0}</td>
            <td>{result.faixa === 'Mais de 2500 estudantes' ? result.count : 0}</td>
            <td>{result.count}</td>
          </tr>
        )})}
      </tbody>

      <tfoot>
        <tr>
          <td>
            TOTAL DE UNIDADES ESCOLARES POR NÚMERO DE ESTUDANTES
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tfoot>
    </TableContainer>
  );
}