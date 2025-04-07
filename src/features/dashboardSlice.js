import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import DashboardServices from "../services/dashboard.service";

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
      const res = await DashboardServices.availableSurveys();
      const dataJson = await res.json();
      if (res.status === 401) {
        localStorage.removeItem("userToken");
        window.location.reload();

        return { data: {}, requestSuccessfull: false };
      }

      // const res = {
      //   ok: true,
      // };
      // const dataJson = {
      //   surveys: [
      //     {
      //       surveyName: "S1",
      //       surveyLenghtOfInterview: 15,
      //       surveyIncentive: "10",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-17",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=6595dc8bd916206a3d6c7133&memberId=Cm8dJMDdN7IU",
      //     },
      //     {
      //       surveyName: "ADI USE ME FOR TESTING",
      //       surveyLenghtOfInterview: 100,
      //       surveyIncentive: "150",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-06",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=659813676b2b95a59aac642c&memberId=Lua2pD5kR8bO",
      //     },
      //     {
      //       surveyName: "hellou",
      //       surveyLenghtOfInterview: 30,
      //       surveyIncentive: "10",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-28",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=6596be8ddf8050a8cf8e11f5&memberId=JnLiAZ6zTX8i",
      //     },
      //     {
      //       surveyName: "Medina Test",
      //       surveyLenghtOfInterview: 5,
      //       surveyIncentive: "1",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-24",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65a7dab20544eb13cbb64d5b&memberId=ZujaZc3kOrob",
      //     },
      //     {
      //       surveyName: "Q One platform demo ",
      //       surveyLenghtOfInterview: 15,
      //       surveyIncentive: "1",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-31",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65a7e06e0544eb13cbb70f2c&memberId=fublHo9xXt2x",
      //     },
      //     {
      //       surveyName: "Training Test",
      //       surveyLenghtOfInterview: 6,
      //       surveyIncentive: "20",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-02-09",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65afe3d57d6563d45b9d4012&memberId=wDJAE58oUDMj",
      //     },
      //     {
      //       surveyName: "roman test",
      //       surveyLenghtOfInterview: 15,
      //       surveyIncentive: "15",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-25",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65afe0fe7d6563d45b9d06ad&memberId=gi7JmrFcZDOI",
      //     },
      //     {
      //       surveyName: "Stefan test",
      //       surveyLenghtOfInterview: 10,
      //       surveyIncentive: "15",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-02-08",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65b2908b4246d7b3dd30a527&memberId=KXV9EkbpL22f",
      //     },
      //     {
      //       surveyName: "123456789",
      //       surveyLenghtOfInterview: 10,
      //       surveyIncentive: "12",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2000-09-20",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65b391420732bac551923e43&memberId=xxWjQTT8o8Ds",
      //     },
      //     {
      //       surveyName: "Medina Test Save Selection Project",
      //       surveyLenghtOfInterview: 10,
      //       surveyIncentive: "20",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2001-09-21",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65b7d4795ac2c524dbac4ca9&memberId=pPHoDLbjzE9D",
      //     },
      //     {
      //       surveyName: "Test 1: Single Link",
      //       surveyLenghtOfInterview: 20,
      //       surveyIncentive: "3",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2000-02-02",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65c63989f46362888cd58bb7&memberId=lbKBY9Cyl0CW",
      //     },
      //     {
      //       surveyName: "TEST FOR PAYMENTS",
      //       surveyLenghtOfInterview: 10,
      //       surveyIncentive: "20",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "0224-09-21",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=661fac6425c339a8844b2f04&memberId=qE3PD9N86kd6",
      //     },
      //     {
      //       surveyName: "Test",
      //       surveyLenghtOfInterview: 1,
      //       surveyIncentive: "1",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-05-08",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=662a550a43afe6b91614fa97&memberId=AWGk6RyqNKhX",
      //     },
      //     {
      //       surveyName: "TEST11",
      //       surveyLenghtOfInterview: 12,
      //       surveyIncentive: "12",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-08-22",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=663b7d3a2efa98bedecee7e3&memberId=JO4HzDaqc4hn",
      //     },
      //     {
      //       surveyName: "testtest",
      //       surveyLenghtOfInterview: 15,
      //       surveyIncentive: "0",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=66433d77d229193d2679561f&memberId=Dq19IplQQqjz",
      //     },
      //     {
      //       surveyName: "TESTING LANDING PAGES",
      //       surveyLenghtOfInterview: 40,
      //       surveyIncentive: "10",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-07-01",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=664ca004514137f17d9f7b1c&memberId=4EByLVnv8IWR",
      //     },
      //     {
      //       surveyName: "LANDING PAGE REDIRECT TESTS",
      //       surveyLenghtOfInterview: 100,
      //       surveyIncentive: "10",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-05-30",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=6655df371e633b5c23544122&memberId=H5XZtXhGGzCU",
      //     },
      //   ],
      // };

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
