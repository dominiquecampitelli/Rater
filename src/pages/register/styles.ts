import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 24px;
  backdrop-filter: blur(15px);
  border: 2px solid #232323;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #121212;
  text-align: center;

  @media screen and (min-width: 1200px) {
    left: 50%;
    top: 50%;
    bottom: unset;
    transform: translate(-50%, -50%);
    width: fit-content;
    padding: 48px;
    border: 4px solid #232323;
    border-radius: 24px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: 600;
  line-height: 28.8px;
  color: #eeeeee;

  @media screen and (min-width: 1200px) {
    font-size: 32px;
    line-height: 38.4px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 24px;
  font-size: 13px;
  font-weight: 400;
  line-height: 18.2px;
  color: #b4b4b4;

  @media screen and (min-width: 1200px) {
    font-size: 14px;
    line-height: 19.6px;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 48px;
  gap: 48px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 64px;
    gap: 64px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const InputLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

export const InputTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 16.94px;
  color: #eeeeee;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  color: #b4b4b4;
  background-color: #232323;

  @media screen and (min-width: 1200px) {
    width: 381px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.36px;
  color: #eeeeee;
  background-color: #232323;

  @media screen and (min-width: 1200px) {
    width: 381px;
  }
`;

export const HaveAccount = styled.span`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #b4b4b4;
`;

export const RedirectLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #eeeeee;
`;
