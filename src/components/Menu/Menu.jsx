import { useState } from "react";
import {
  BurgerMenuImage,
  ImageLogo,
  LinkItem,
  LinksWrapper,
  LogoHeader,
  // LogoutCont,
  MainMenuWrapper,
} from "./Menu.style";
import companyLogo from "../../assets/companyLogo.png";
import burgerMenu from "../../assets/burger.svg";
import closeBurger from "../../assets/closeBurger.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setUserToken } from "../../features/dashboardSlice";
import { useDispatch } from "react-redux";

const Links = [
  {
    label: "Home",
    route: "/home/",
  },
  {
    label: "History",
    route: "/history/",
  },
  {
    label: "Financials",
    route: "/financials/",
  },
];

const isActivePage = (pathname, item) => {
  return (
    pathname.includes(item.route) ||
    (pathname === "/" && item.itemLink === "/home")
  );
};

const Menu = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const logOutUser = () => {
  //   if (localStorage.getItem("userToken")) {
  //     localStorage.removeItem("userToken");
  //     dispatch(setUserToken(""));
  //     navigate("/");
  //   }
  // };

  return (
    <MainMenuWrapper>
      <LogoHeader>
        <BurgerMenuImage
          src={showMenu ? closeBurger : burgerMenu}
          onClick={() => setShowMenu(!showMenu)}
        />
        <ImageLogo src={companyLogo} />
          <LinksWrapper isshown={showMenu.toString()}>
          {Links.map((item, index) => {
            return (
              <Link
                to={item?.route}
                key={index + 1}
                onClick={() => setShowMenu(false)}
              >
                <LinkItem
                  className={isActivePage(pathname, item) ? "active" : ""}
                >
                  {item.label}
                </LinkItem>
              </Link>
            );
          })}
        </LinksWrapper>
        {/* <LogoutCont>
          <LinkItem onClick={logOutUser}>Log Out</LinkItem>
        </LogoutCont> */}
      </LogoHeader>
      
    </MainMenuWrapper>
  );
};

export default Menu;
