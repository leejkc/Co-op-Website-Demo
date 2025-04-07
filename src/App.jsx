import { useDispatch } from "react-redux";
import "./App.css";
import {
  ContentWrapper,
  FooterWrapper,
  MainWrapper,
  PageContentWrapper,
} from "./App.style";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import AppRoutes from "./routes";
import { useEffect } from "react";
import {
  retrieveAvailableSurveys,
  retrieveDashboard,
  retrieveRewardHistory,
  retrieveRewards,
  retrieveSurveyHistory,
  setUserToken,
} from "./features/dashboardSlice";
import { useNavigate } from "react-router-dom";

const App = () => {
  // temp
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("userToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      dispatch(setUserToken(userToken)); // Update the Redux store with the token
      dispatch(retrieveDashboard());
      dispatch(retrieveAvailableSurveys());
      dispatch(retrieveRewardHistory());
      dispatch(retrieveSurveyHistory());
      dispatch(retrieveRewards());
    } else {
      navigate("/");
    }
  }, [dispatch, userToken]);

  return (
    <MainWrapper>
      {!userToken ? (
        <PageContentWrapper>
          <ContentWrapper>
            <AppRoutes />
          </ContentWrapper>
        </PageContentWrapper>
      ) : (
        <PageContentWrapper>
          <Menu />
          <ContentWrapper>
            {/* page content */}
            <AppRoutes />
          </ContentWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </PageContentWrapper>
      )}
    </MainWrapper>
  );
};

export default App ;
