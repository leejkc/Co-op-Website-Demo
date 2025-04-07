import { BottomText, MainWrapper, TopText } from "./Circle.style";
import PropTypes from "prop-types";

const CircleOverview = ({ topText, bottomText }) => {
  return (
    <MainWrapper>
      <TopText>{topText}</TopText>
      <BottomText>{bottomText}</BottomText>
    </MainWrapper>
  );
};
export default CircleOverview;

CircleOverview.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
};
