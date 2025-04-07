import { config } from "../config";

const API = `${config.API_URL}/panel-members/dashboard`;
const companyToken = config.COMPANY_TOKEN;

const headers = ({ login = false }) => {
  const token = localStorage.getItem("userToken");
  return {
    Authorization: `Bearer ${!login ? token : companyToken}`,
    "Content-Type": "application/json",
  };
};

const about = () => {
  return fetch(`${API}/about`, {
    method: "GET",
    headers: headers({ login: false }),
  });
};

const availableSurveys = () => {
  return fetch(`${API}/available-surveys`, {
    method: "GET",
    headers: headers({ login: false }),
  });
};

const rewardHistory = () => {
  return fetch(`${API}/reward-history`, {
    method: "GET",
    headers: headers({ login: false }),
  });
};

const surveyHistory = () => {
  return fetch(`${API}/survey-history`, {
    method: "GET",
    headers: headers({ login: false }),
  });
};

const rewards = () => {
  return fetch(`${API}/rewards`, {
    method: "GET",
    headers: headers({ login: false }),
  });
};

const rewardsClaim = (rewardId, paymentTypeId) => {
  return fetch(`${API}/rewards/claim`, {
    method: "POST",
    headers: headers({ login: false }),
    body: JSON.stringify({ rewardId, paymentTypeId }),
  });
};

const login = (panel, email, password) => {
  return fetch(`${API}/login`, {
    method: "POST",
    headers: headers({ login: true }),
    body: JSON.stringify({ panel, email, password }),
  });
};

const DashboardServices = {
  about,
  availableSurveys,
  rewardHistory,
  rewards,
  rewardsClaim,
  login,
  surveyHistory,
};

export default DashboardServices;
