import Card from "../../components/Card/Card";
import CircleOverview from "../../components/Circle/Circle";
import {
  CardsCarouselWrapper,
  Container,
  ContainerColumn,
  InfoContainer,
  OverviewWrapper,
  PanelDescription,
  PanelInfoContainer,
  PanelTitle,
  WrapperMain,
} from "./HomePage.style";
import { CarouselProvider } from "../../context/CarouselContext";
import { useSelector } from "react-redux";
import {
  selectAvailableSurveys,
  selectRewardHistory,
  selectRewards,
} from "../../features/dashboardSlice";
import {
  getCompletedSurveysInYear,
  getCurrencySymbol,
} from "../../utils/utils";

const panelDescriptionDummyData = {
  panelTitle: "COMPANY Panel",
  panelDescription: (
    <div>
      <span>
        Welcome to your personal page of COMPANY Panel! On this page you can:
      </span>
      <ul>
        <li>See and start new survey opportunities</li>
        <li>Keep your profile information up to date</li>
        <li>See your participation and payment history.</li>
      </ul>
      <span>
        On behalf of the entire COMPANY Panel team we would like to thank you for
        being a member of our community!
      </span>
    </div>
  ),
};

const HomePage = () => {
  const availableSurveys = useSelector(selectAvailableSurveys);
  const carouselItems = availableSurveys.map((item, idx) => (
    <Card item={item} key={idx} lowshadow />
  ));
  const doneSurveys = useSelector(selectRewardHistory);
  const completedThisYear = getCompletedSurveysInYear(
    doneSurveys,
    new Date().getFullYear()
  );
  const completedLastYear = getCompletedSurveysInYear(
    doneSurveys,
    new Date().getFullYear() - 1
  );

  const rewards = useSelector(selectRewards);
  const totalRewardsAmount = rewards?.totalRewards[0]?.amount.toString() || "0";
  const currencySymbol = getCurrencySymbol(rewards?.totalRewards[0]?.currency);

  return (
    <WrapperMain>
      <OverviewWrapper>
        <Container>
          <CircleOverview
            topText={`${currencySymbol}${totalRewardsAmount}`}
            bottomText="Earned"
          />
          <CircleOverview
            topText={completedThisYear}
            bottomText="Completed this year"
          />
          <CircleOverview
            topText={completedLastYear}
            bottomText={"Completed last year"}
          />
        </Container>
      </OverviewWrapper>
      {carouselItems.length > 0 ? (
        <ContainerColumn>
          <CardsCarouselWrapper>
            <CarouselProvider items={carouselItems} />
          </CardsCarouselWrapper>

          <PanelInfoContainer>
            <Card>
              <PanelTitle>{panelDescriptionDummyData?.panelTitle}</PanelTitle>
              <PanelDescription>
                {panelDescriptionDummyData?.panelDescription}
              </PanelDescription>
            </Card>
          </PanelInfoContainer>
        </ContainerColumn>
      ) : (
        <InfoContainer>
          <PanelInfoContainer>
            <Card>
              <PanelTitle>{panelDescriptionDummyData?.panelTitle}</PanelTitle>
              <PanelDescription>
                {panelDescriptionDummyData?.panelDescription}
              </PanelDescription>
            </Card>
          </PanelInfoContainer>
        </InfoContainer>
      )}
    </WrapperMain>
  );
};
export default HomePage;
