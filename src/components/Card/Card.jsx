import {
  ButtonWrapper,
  CardDesc,
  CardTitle,
  RedTitle,
  RedTitleData,
  RowContainer,
  StartTag,
  TextWrapper,
  Wrapper,
} from "./Card.style";
// import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ item, children, lowshadow, isHistory }) => {
  //isCard means if the component will behave as a card with fixed witdth and height
  //or just as a wrapper for children content
  const isCard = item != null ? true : false;

  return (
    <Wrapper iscard={isCard.toString()} lowshadow={lowshadow}>
      {!children && (
        <>
          <TextWrapper>
            {item?.surveyName && <CardTitle>{item?.surveyName}</CardTitle>}
            {item?.description && <CardDesc>{item?.description}</CardDesc>}
            {item?.surveyLenghtOfInterview && (
              <RowContainer>
                <RedTitle>Length:</RedTitle>
                <RedTitleData>
                  {item?.surveyLenghtOfInterview} minutes
                </RedTitleData>
              </RowContainer>
            )}

            {item?.surveyStatus === "Completed - Rewarded" && (
              <RowContainer>
                <RedTitle>Reward:</RedTitle>
                <RedTitleData>
                  {item?.surveyIncentiveCurrency ||
                  item?.surveyRewardedIncentiveCurrency === "USD"
                    ? "$"
                    : "EUR"}
                  {item?.surveyIncentive || item?.surveyRewardedIncentive}{" "}
                </RedTitleData>
              </RowContainer>
            )}

            {(item?.surveyEndDate || item?.surveyRewardedDate) && (
              <RowContainer>
                <RedTitle>End Date:</RedTitle>
                <RedTitleData>
                  {item?.surveyEndDate || item?.surveyRewardedDate}
                </RedTitleData>
              </RowContainer>
            )}
            {item?.surveyStatus && (
              <RowContainer>
                <RedTitle>Survey Status:</RedTitle>
                <RedTitleData>
                  {item?.surveyStatus && item?.surveyStatus}
                </RedTitleData>
              </RowContainer>
            )}
            {!isHistory && item?.surveyLink && (
              <ButtonWrapper>
                <StartTag
                  href={item?.surveyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start here
                </StartTag>
              </ButtonWrapper>
            )}
          </TextWrapper>
        </>
      )}

      {children && children}
    </Wrapper>
  );
};
export default Card;
Card.propTypes = {
  item: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  lowshadow: PropTypes.bool,
  isHistory: PropTypes.bool,
};
