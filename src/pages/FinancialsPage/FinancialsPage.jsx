import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRewards } from "../../features/dashboardSlice";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import {
  HeaderWrapper,
  MainWrapper,
  NoSurveysCompletedMessage,
  RewardsWrapper,
  WrapperContent,
} from "./FinancialsPage.style";
import {
  HeaderContentWrapper,
  HeaderText,
  HeaderTitle,
} from "../../shared/SharedStyles";
import RewardCard from "../../shared/RewardCard/RewardCard";
import StyledTable from "../../shared/Table/Table";
import RewardSummary from "../../shared/RewardCard/RewardSummary";
import { useIsMobile } from "../../utils/utils";

const FinancialsPage = () => {
  const isMobile = useIsMobile();
  const rewards = useSelector(selectRewards);
  const projectsData = rewards?.projects;
  const totalRewardsAmount = rewards?.totalRewards[0]?.amount || 0;

  const mobileRewardsItems = projectsData?.map((item, index) => (
    <RewardCard key={index} rewardItem={item} />
  ));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = mobileRewardsItems?.slice(startIndex, endIndex) || [];

  console.log("FINANCIALS", projectsData);

  const totalPages = Math.ceil(mobileRewardsItems?.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <MainWrapper>
      <HeaderWrapper>
        <Card>
          <HeaderContentWrapper>
            <HeaderTitle>Financial overview</HeaderTitle>
            <HeaderText>
              On this page you can see all the rewards you received from us for
              your participation in our studies. If you have any query, please
              fill out the support form or mail us directly at{" "}
            </HeaderText>
          </HeaderContentWrapper>
        </Card>
      </HeaderWrapper>

      <WrapperContent>
        {projectsData.length === 0 ? (
          <NoSurveysCompletedMessage>
            <h2>No Rewards Available</h2>
            <p>
              It looks like you have not earned any rewards yet. Check back soon
              for new opportunities to share your thoughts and earn rewards!
            </p>
          </NoSurveysCompletedMessage>
        ) : isMobile ? (
          <RewardsWrapper>
            <RewardSummary
              numOfSurveys={projectsData.length.toString()}
              rewardsAmount={totalRewardsAmount.toString()}
            />
            {currentItems}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </RewardsWrapper>
        ) : (
          <StyledTable data={projectsData} />
        )}
      </WrapperContent>
    </MainWrapper>
  );
};

export default FinancialsPage;
