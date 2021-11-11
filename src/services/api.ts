import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api',
});