import { useState } from "react";
import Card from "../../components/Card/Card";
import {
  HeaderContentWrapper,
  HeaderText,
  HeaderTitle,
  ShowMoreCardsWrapper,
} from "../../shared/SharedStyles";
import {
  HeaderWrapper,
  MainWrapper,
  NoSurveysCompletedMessage,
} from "./HistoryPage.style";
import { useSelector } from "react-redux";
import { selectSurveyHistory } from "../../features/dashboardSlice";
import Pagination from "../../components/Pagination/Pagination";

const HistoryPage = () => {
  const rewardHistory = useSelector(selectSurveyHistory);
  const numberOfDoneSurveys = rewardHistory?.length || 0;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // calculate the displayed items based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = rewardHistory?.slice(startIndex, endIndex) || [];

  // calculate the total number of pages
  const totalPages = Math.ceil(numberOfDoneSurveys / itemsPerPage);

  // handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <MainWrapper>
      <HeaderWrapper>
        <Card>
          <HeaderContentWrapper>
            <HeaderTitle>Thank you for being an active member!</HeaderTitle>
            <HeaderText>
              In the overview below you can see all surveys you have been
              invited to and your participation. Are you missing anything or do
              you have any questions? Please fill out the support form or mail
              us directly at 
            </HeaderText>
          </HeaderContentWrapper>
        </Card>
      </HeaderWrapper>

      <ShowMoreCardsWrapper>
        {currentItems.map((item, idx) => (
          <Card item={item} key={startIndex + idx} isHistory={true} />
        ))}
      </ShowMoreCardsWrapper>

      {numberOfDoneSurveys === 0 ? (
        <NoSurveysCompletedMessage>
          <h2>No Surveys Completed</h2>
          <p>
            It looks like you have not completed any surveys yet. Check back
            soon for new opportunities to share your thoughts and earn rewards!
          </p>
        </NoSurveysCompletedMessage>
      ) : (
        totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )
      )}
    </MainWrapper>
  );
};

export default HistoryPage;
