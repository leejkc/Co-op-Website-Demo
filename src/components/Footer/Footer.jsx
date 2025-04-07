import { config } from "../../config";
import {
  LinkItem,
  LinksWrapper,
  MainWrapper,
  WatermarkContainer,
} from "./Footer.style";
import { Link } from "react-router-dom";

const Links = [
  {
    label: "Privacy Policy",
    route: "https://google.com",
  },
  {
    label: "Terms of Use",
    route: "https://google.com",
  },
  {
    label: "Support",
    route: "https://google.com",
  },
  {
    label: "Unsubscribe",
    route: `${window.location.origin}/panel-manager/pages/optOut/?panelId=${config.PANEL_ID}`,
  },
];

const Footer = () => {
  return (
    <MainWrapper>
      <LinksWrapper>
        {Links.map((item, index) => {
          return (
            <Link to={item?.route} key={index + 1} target="blank">
              <LinkItem>{item.label}</LinkItem>
            </Link>
          );
        })}
      </LinksWrapper>
      <WatermarkContainer>
        <LinkItem>Powered By Q One</LinkItem>
      </WatermarkContainer>
    </MainWrapper>
  );
};
export default Footer;
