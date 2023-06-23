import { GetStarted } from "../styles/homepage";
import { styled } from "styled-components";

export const SignUpButton = styled(GetStarted)`
  height: 46px;
  width: 60%;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const SignUpForm = styled.form`
  padding: 0 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  & input {
    width: 60%;
    height: 46px;
    border-radius: 20px;
    border: none;
  }
  @media (max-width: 1024px) {
    align-items: center;
  }
  @media (max-width: 500px) {
    & input {
      width: 90%;
    }
  }
`;
export const SignUpSecoundGradeTxt = styled.h3`
  font-size: 22px;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const SignUpMainTxt = styled.h2`
  font-size: 51px;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const SignUpSection = styled.section`
  padding: 3%;
  display: flex;
  color: #fff;
  & img {
    width: 50%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
