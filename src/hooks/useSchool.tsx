import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';
import { Boards } from '../types';

interface SchoolContextData {
  boards: Boards;
  initialBoard: string;
  getInitialsBoard: (value: string) => void;
}

const SchoolContext = createContext({} as SchoolContextData);

export const SchoolProvider: React.FC = ({ children }) => {
  const [boards, setBoards] = useState<Boards>({} as Boards);
  const [initialBoard, setInitialBoard] = useState<string>('');

  useEffect(() => {
    const RequestDataBoards = async () => {
      api.request({
        url: 'https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/diretorias/',
        method : 'GET',
        data: {},
      }).then((response) => {setBoards(response.data)});
    }

    RequestDataBoards();
  }, []);

  const getInitialsBoard = (value: string) => {
    setInitialBoard(value);
  }

  return (
    <SchoolContext.Provider value={{
      boards,
      initialBoard,
      getInitialsBoard
    }}>
      {children}
    </SchoolContext.Provider>
  );
}

export function useSchool(): SchoolContextData {
  const context = useContext(SchoolContext);

  return context;
}