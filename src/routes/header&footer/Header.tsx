import {
  SignUp,
  Bar,
  Headerr,
  HeaderUl,
  NavLink,
  FixedUl,
} from "../../styles/Header&footer";
import logo from "../../assets/images/header-images/Logo.svg";

export default function Header(props: any) {
  return (
    <>
      {props.showUl == false ? (
        <Headerr>
          <NavLink href="/nft/">
            <img src={logo} />
          </NavLink>
          <Bar
            onClick={() => {
              props.setShowUl(true);
            }}
            className="fa-solid fa-bars"></Bar>
          <HeaderUl>
            <NavLink href="/nft/marketplace">
              <li>Marketplace</li>
            </NavLink>
            <NavLink href="/nft/Rankings">
              <li>Rankings</li>
            </NavLink>
            <NavLink href="/nft/connect a wallet">
              <li>Connect a wallet</li>
            </NavLink>
            <NavLink href="/nft/signup">
              <SignUp>
                <i className="fa-solid fa-user"></i>
                Sign Up
              </SignUp>
            </NavLink>
          </HeaderUl>
        </Headerr>
      ) : (
        <FixedUl>
          <Bar
            onClick={() => {
              props.setShowUl(false);
            }}
            className="fa-solid fa-x"></Bar>
          <NavLink
            onClick={() => {
              props.setShowUl(false);
            }}
            href="/nft/marketplace">
            <li>Marketplace</li>
          </NavLink>
          <NavLink
            onClick={() => {
              props.setShowUl(false);
            }}
            href="/nft/Rankings">
            <li>Rankings</li>
          </NavLink>
          <NavLink
            onClick={() => {
              props.setShowUl(false);
            }}
            href="/nft/connect a wallet">
            <li>Connect a wallet</li>
          </NavLink>
          <NavLink
            onClick={() => {
              props.setShowUl(false);
            }}
            href="/nft/signup">
            <SignUp>
              <i className="fa-solid fa-user"></i>
              Sign Up
            </SignUp>
          </NavLink>
        </FixedUl>
      )}
    </>
  );
}
