import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import DashboardServices from "../services/dashboard.service";
import { SURVEYS } from "../constants/surveys";

export const retrieveDashboard = createAsyncThunk(
  "dashboard/retrieveMember",
  async () => {
    try {
      const res = await DashboardServices.about();
      const dataJson = await res.json();
      if (res.status === 401) {
        localStorage.removeItem("userToken");
        window.location.reload();

        return { data: {}, requestSuccessfull: false };
      }

      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const retrieveAvailableSurveys = createAsyncThunk(
  "dashboard/availableSurveys",
  async () => {
    try {
      // const res = await DashboardServices.availableSurveys();
      // const dataJson = await res.json();
      // if (res.status === 401) {
      //   localStorage.removeItem("userToken");
      //   window.location.reload();

      //   return { data: {}, requestSuccessfull: false };
      // }

      const res = {
        ok: true,
      };
      const dataJson = {
        surveys: SURVEYS.slice().sort((a, b) =>
          a.surveyName.localeCompare(b.surveyName)
        ),
      };

      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const retrieveRewardHistory = createAsyncThunk(
  "dashboard/rewardHistory",
  async () => {
    try {
      const res = await DashboardServices.rewardHistory();
      const dataJson = await res.json();
      if (res.status === 401) {
        localStorage.removeItem("userToken");
        window.location.reload();

        return { data: {}, requestSuccessfull: false };
      }

      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const retrieveRewards = createAsyncThunk(
  "dashboard/rewards",
  async () => {
    try {
      const res = await DashboardServices.rewards();
      const dataJson = await res.json();
      if (res.status === 401) {
        localStorage.removeItem("userToken");
        window.location.reload();

        return { data: {}, requestSuccessfull: false };
      }
      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const rewardsClaim = createAsyncThunk(
  "dashboard/rewards/claim",
  async ({ rewardId, paymentTypeId }) => {
    try {
      const res = await DashboardServices.rewardsClaim(rewardId, paymentTypeId);
      const dataJson = await res.json();
      if (res.status === 401) {
        localStorage.removeItem("userToken");
        window.location.reload();

        return { data: {}, requestSuccessfull: false };
      }

      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const loginDashboard = createAsyncThunk(
  "dashboard/loginMember",
  async ({ panel, email, password }) => {
    try {
      // const res = await DashboardServices.login(panel, email, password);
      // const dataJson = await res.json();
      // if (res.status === 401) {
      //   localStorage.removeItem("userToken");
      //   window.location.reload();

      //   return { data: {}, requestSuccessfull: false };
      // }
      const res = {
        ok: true,
      };
      const dataJson = {
        message: "Succesful login.",
        email: "roman.schoensee+1@gmail.com",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJyb21hbi5zY2hvZW5zZWUrMUBnbWFpbC5jb20iLCJzdWIiOiI2NTgxYmQ2NmNhNGMxYTk5NmNkMTYzOGYiLCJpYXQiOjE3MTc0MTczMTMxMDAsImV4cCI6MTcxNzUwMzcxMzEwMH0.U0ERrbBB_gXOV2c1fyZB1OKaOVFc5JRNzpODDZ-Ufl0",
      };

      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const retrieveSurveyHistory = createAsyncThunk(
  "dashboard/surveyHistory",
  async () => {
    try {
      const res = await DashboardServices.surveyHistory();
      const dataJson = await res.json();
      if (res.status === 401) {
        localStorage.removeItem("userToken");
        window.location.reload();

        return { data: {}, requestSuccessfull: false };
      }

      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    token: "",
  },
  rewards: {
    availableRewards: 0,
    totalRewards: [],
    projects: [],
  },
  payments: [],
  availableSurveys: [],
  rewardHistory: [],
  surveyHistory: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.user.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginDashboard.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          user: {
            ...state.user,
            email: action?.payload?.data.email,
            token: action?.payload?.data.token,
          },
        };
      }
    });
    builder.addCase(retrieveDashboard.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          user: {
            ...state.user,
            firstName: action?.payload?.data.firstName,
            lastName: action?.payload?.data.lastName,
          },
          rewards: {
            ...state.rewards,
            availableRewards: action?.payload?.data.availableRewards,
            totalRewards: action?.payload?.data.totalRewards,
          },
        };
      }
    });
    builder.addCase(retrieveAvailableSurveys.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          availableSurveys: action?.payload?.data.surveys,
        };
      }
    });
    builder.addCase(retrieveRewardHistory.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          rewardHistory: action?.payload?.data.surveys,
        };
      }
    });
    builder.addCase(retrieveRewards.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          rewards: {
            ...state.rewards,
            projects: action?.payload?.data.rewards,
          },
          payments: action?.payload?.data.payments,
        };
      }
    });
    builder.addCase(retrieveSurveyHistory.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          surveyHistory: action?.payload?.data.surveys,
        };
      }
    });
  },
});
export default dashboardSlice.reducer;

export const { setUserToken } = dashboardSlice.actions;

export const selectUser = (state) => state.dashboard.user;
export const selectRewards = (state) => state.dashboard.rewards;
export const selectAvailableSurveys = (state) =>
  state.dashboard.availableSurveys;
export const selectRewardHistory = (state) => state.dashboard.rewardHistory;
export const selectPayments = (state) => state.dashboard.payments;
export const selectSurveyHistory = (state) => state.dashboard.surveyHistory;
