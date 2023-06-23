import styled from "styled-components";

export const NavLink = styled.a`
  color: #fff;
`;

export const Bar = styled.i`
  display: none;
  @media (max-width: 1024px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 1%;
    right: 2%;
  }
  cursor: pointer;
`;

export const Headerr = styled.header`
  padding: 1% 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SignUp = styled.li`
  width: 152px;
  height: 60px;
  background-color: #a259ff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;
export const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  & li {
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const FixedUl = styled.ul`
  position: fixed;
  background-color: #141313;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: #fff;
  & li {
    cursor: pointer;
  }
`;


export const FooterIcons = styled.div`
  gap: 30px;
  display: flex;
  font-size: 25px;
`;

export const Instagram = styled.i`
  color: #fff;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  border-radius: 5px;
`;

export const Twitter = styled.i`
  color: #1da1f2ff;
`;

export const Discord = styled.i`
  color: #5562eaff;
`;
export const Youtube = styled.i`
  color: #ff0000ff;
`;

export const FormButton = styled.button`
  color: #fff;
  right: 0;
  top: 0;
  position: absolute;
  width: 180px;
  height: 62px;
  background-color: #a259ff;
  border-radius: 20px;
  border: none;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 150px;
  }
`;

export const FormInput = styled.input`
  width: 90%;
  height: 100%;
  border-radius: 20px;
  border: none;
`;

export const Form = styled.form`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-radius: 20px;
  @media (max-width: 1024px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const FooterSecoundRangeTxt = styled.h3`
  color: #ccccccff;
  display: flex;
  gap: 30px;
`;

export const Foter = styled.footer`
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const FooterMainTxts = styled.h2`
  color: #fff;
  font-size: 22px;
`;

export const FooterDiv = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    align-items: center;
    text-align: center;
  }
`;
