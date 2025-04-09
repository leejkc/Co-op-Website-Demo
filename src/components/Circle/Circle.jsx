import { BottomText, Empty, MainWrapper, TopText } from "./Circle.style";
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
export const CircleEmpty = () => {
  return <Empty></Empty>;
}

CircleOverview.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
};
