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
    route: "https://eedo.se/privacy-policy/",
  },
  {
    label: "Terms of Use",
    route: "https://eedo.se/privacy-policy/",
  },
  {
    label: "Support",
    route: "https://eedo.se/contact/",
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
