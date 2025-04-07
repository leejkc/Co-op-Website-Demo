import { convertToMMDDYYYY, getCurrencySymbol } from "../../utils/utils";
import {
  CardContainer,
  SurveyItem,
  SurveyDate,
  SurveyAmount,
  DateNameWrapper,
  SurveyName,
  ClaimButton,
  SeeDetailsButton,
  RowContainer,
  CardItemTitle,
  CardItemTitleData,
} from "./RewardCard.style";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import { useState } from "react";
import RewardModal from "../RewardModal/RewardModal";

const RewardCard = ({ rewardItem }) => {
  const currencyFormat = getCurrencySymbol(rewardItem?.currency);
  const dateTimeFormat = convertToMMDDYYYY(rewardItem?.date);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rewardDetailsModal, setRewardDetailsModal] = useState(false);

  return (
    <CardContainer>
      <SurveyItem>
        <DateNameWrapper>
          <SurveyName>{rewardItem?.title}</SurveyName>
          <RowContainer>
            <CardItemTitle>End Date:</CardItemTitle>
            <CardItemTitleData>{dateTimeFormat}</CardItemTitleData>
          </RowContainer>
          <RowContainer>
            <CardItemTitle>Status:</CardItemTitle>
            <CardItemTitleData>{rewardItem?.status}</CardItemTitleData>
          </RowContainer>
        </DateNameWrapper>

        <SurveyAmount>
          {currencyFormat}
          {rewardItem?.amount}
        </SurveyAmount>
      </SurveyItem>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rewardId={rewardItem?.id}
      />
      <RewardModal
        isOpen={rewardDetailsModal}
        onClose={() => setRewardDetailsModal(false)}
        rewardType={rewardItem?.type}
        rewardData={rewardItem}
      />
    </CardContainer>
  );
};

export default RewardCard;
RewardCard.propTypes = {
  rewardItem: PropTypes.object,
};
