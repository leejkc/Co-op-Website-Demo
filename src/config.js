//variables in env files need to be prefixed as VITE
const API_URL = import.meta.env.VITE_API_URL;
const IS_LOCAL = import.meta.env.VITE_IS_LOCAL;
const COMPANY_TOKEN = import.meta.env.VITE_COMPANY_TOKEN;
const PANEL_ID = import.meta.env.VITE_PANEL_ID;

export const config = {
  API_URL,
  IS_LOCAL,
  COMPANY_TOKEN,
  PANEL_ID,
};
