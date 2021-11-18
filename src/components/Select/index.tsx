import { useState } from "react";
import { useSchool } from "../../hooks/useSchool";

import { SelectContainer } from "./styles";

export const Select: React.FC = () => {
  const { boards, getInitialsBoard } = useSchool();

  const [selectedBoard, setSelectedBoard] = useState<string>('');

  getInitialsBoard(selectedBoard);

  return (
    <SelectContainer 
      value={selectedBoard} 
      onChange={event => setSelectedBoard(event.target.value)}
    >
      <option>Selecione uma diretoria</option>
      
      {boards.results?.map(board => (
        <option key={board.dre} value={board.dre}>{board.diretoria}</option>
      ))}
    </SelectContainer>
  );
}