import {
    Discord,
  FooterDiv,
  FooterIcons,
  FooterMainTxts,
  FooterSecoundRangeTxt,
  Form,
  FormButton,
  FormInput,
  Foter,
  Instagram,
  Twitter,
  Youtube,
} from "../../styles/Header&footer";
import logo from "../../assets/images/header-images/Logo.svg";
export default function Footer() {
  return (
    <Foter>
      <FooterDiv>
        <img src={logo} />
        <FooterSecoundRangeTxt>
          NFT marketplace UI created with Anima for Figma.
        </FooterSecoundRangeTxt>
        <FooterSecoundRangeTxt>Join our community</FooterSecoundRangeTxt>
        <FooterIcons>
          <a href="https://discord.com/invite/eQxkYTNxSp">
            <Discord className="fa-brands fa-discord"></Discord>
          </a>
          <a href="https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw">
            <Youtube className="fa-brands fa-youtube"></Youtube>
          </a>
          <a href="https://twitter.com/animaapp?lang=en">
            <Twitter className="fa-brands fa-twitter"></Twitter>
          </a>
          <a href="https://www.instagram.com/animaapp/?hl=en">
            <Instagram className="fa-brands fa-instagram"></Instagram>
          </a>
        </FooterIcons>
      </FooterDiv>
      <FooterDiv>
        <FooterMainTxts>Explore</FooterMainTxts>
        <FooterSecoundRangeTxt>Marketplace</FooterSecoundRangeTxt>
        <FooterSecoundRangeTxt>Rankings</FooterSecoundRangeTxt>
        <FooterSecoundRangeTxt>Connect a wallet</FooterSecoundRangeTxt>
      </FooterDiv>
      <FooterDiv>
        <FooterMainTxts>Join our weekly digest</FooterMainTxts>
        <FooterSecoundRangeTxt>
          Get exclusive promotions & updates straight to your inbox.
        </FooterSecoundRangeTxt>
        <Form>
          <FormInput
            type="email"
            required
            placeholder="Enter your email here"
          />
          <FormButton>Subscribe</FormButton>
        </Form>
      </FooterDiv>
    </Foter>
  );
}
