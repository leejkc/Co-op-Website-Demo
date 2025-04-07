import {
  ModalContainer,
  ModalContent,
  CloseButton,
  RewardLink,
  RewardText,
  Backdrop,
  RewardImageWrapper,
} from "./RewardModal.style";
import AmazonLogo from "../../assets/amazon_logo.png";
import RybbonLogo from "../../assets/rybbon.png";
import PropTypes from "prop-types";

const RewardModal = ({ rewardType, rewardData, isOpen, onClose }) => {
  return (
    isOpen && (
      <Backdrop>
        <ModalContainer>
          <ModalContent>
            <CloseButton onClick={onClose}>X</CloseButton>
            {rewardType === "rybbon" && (
              <>
                <RewardImageWrapper>
                  <img src={RybbonLogo} alt="BHN Rewards" />
                </RewardImageWrapper>

                <RewardText>
                  Reward Amount: <strong>${rewardData?.amount}</strong>
                </RewardText>
                <RewardLink
                  href={rewardData?.rewardClaimUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rewardData?.rewardClaimUrl}
                </RewardLink>
                <RewardText>
                  1. To redeem your gift card, visit the URL above
                </RewardText>
                <RewardText>
                  2. Follow the instructions on the Rybbon reward page
                </RewardText>
                <RewardText>
                  <strong>Claimed rewards may be redeemed only once.</strong>
                </RewardText>
              </>
            )}
            {rewardType === "amazon" && (
              <>
                <RewardImageWrapper>
                  <img src={AmazonLogo} alt="Amazon Gift Card" />
                </RewardImageWrapper>
                <RewardText>
                  Reward Amount: <strong>${rewardData?.amount}</strong>
                </RewardText>
                <RewardText>
                  Use this code on Amazon:{" "}
                  <strong>{rewardData?.voucherCode}</strong>
                </RewardText>
                <RewardText>
                  1. To redeem your gift card, visit{" "}
                  <a
                    href="https://amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amazon.com
                  </a>
                </RewardText>
                <RewardText>
                  2. Go to your Amazon Account and click on Gift Cards
                </RewardText>
                <RewardText>
                  3. Click the Redeem a Gift Card button and enter your gift
                  card code, then click Apply to Your Account
                </RewardText>
                <RewardText>
                  <strong>
                    Claimed gift cards may be redeemed only once on Amazon.com.
                  </strong>
                </RewardText>
              </>
            )}
          </ModalContent>
        </ModalContainer>
      </Backdrop>
    )
  );
};

export default RewardModal;
RewardModal.propTypes = {
  rewardType: PropTypes.string,
  rewardData: PropTypes.object,
  onClose: PropTypes.func,
  isOpen: PropTypes.func,
};
