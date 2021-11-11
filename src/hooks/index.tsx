import { SchoolProvider } from './useSchool';

export const AppProvider: React.FC = ({ children }) => (
  <SchoolProvider>
    {children}
  </SchoolProvider>
);