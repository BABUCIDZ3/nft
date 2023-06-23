import { GetStarted, Section1, Section1Footer, Section1FooterTxt, Section1MainTxt, Section1SecondgradeTxt, SectionDiv } from "../styles/homepage";

export default function Homepage() {
  return (
    <>
      <Section1>
        <SectionDiv>
          <Section1MainTxt>Discover digital art & Collect NFTs</Section1MainTxt>
          <Section1SecondgradeTxt>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </Section1SecondgradeTxt>
          <GetStarted>
            <i className="fa-solid fa-rocket"></i>Get Started
          </GetStarted>
          <Section1Footer>
            <Section1FooterTxt>240k+ </Section1FooterTxt>
            <Section1FooterTxt>100k+ </Section1FooterTxt>
            <Section1FooterTxt>240k+ </Section1FooterTxt>
            <Section1FooterTxt>Total Sale </Section1FooterTxt>
            <Section1FooterTxt> Auctions </Section1FooterTxt>
            <Section1FooterTxt> Artists </Section1FooterTxt>
          </Section1Footer>
        </SectionDiv>
        <SectionDiv>
          <img
            src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
            alt=""
          />
        </SectionDiv>
      </Section1>
    </>
  );
}


