import {styled}from 'styled-components'

export const Section1FooterTxt = styled.div`
  width: 30%;
  font-size: 22px;
  color: #fff;
  @media (max-width: 400px) {
    font-size: 16px;
    width: 28%;
  }
`;

export const Section1Footer = styled.div`
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
`;

export const Section1MainTxt = styled.h1`
  color: #fff;
  font-size: 67px;
  @media (max-width: 400px) {
    font-size: 50px;
  }
`;

export const Section1SecondgradeTxt = styled.h2`
  color: #fff;
  font-size: 30px;
  @media (max-width: 400px) {
    font-size: 25px;
  }
`;

export const Section1 = styled.section`
  padding: 2%;
  display: flex;
  @media (max-width: 1024px) {
    display: block;
    text-align: center;
  }
`;
export const SectionDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    & img {
      width: 100%;
    }
  }
`;

export const GetStarted = styled.button`
  width: 224px;
  height: 60px;
  border-radius: 20px;
  background-color: #a259ff;
  color: #fff;
  font-size: 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5%;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: #2b2b2bff;
    border: 1px solid #a259ff;
  }
  & i {
    transition: 0.7s;
  }
  &:hover i {
    transform: rotate(360deg);
  }
`;
