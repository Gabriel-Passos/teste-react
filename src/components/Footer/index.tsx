import { useSchool } from "../../hooks/useSchool";
import { FooterContainer, FooterContent } from "./styles";

export const Footer: React.FC = () => {
  const { initialBoard } = useSchool();

  return (
    <FooterContainer initialBoard={initialBoard}>
      <FooterContent>
        <strong>Secretaria Municipal de Educação - SME</strong>
      </FooterContent>
    </FooterContainer>
  );
}