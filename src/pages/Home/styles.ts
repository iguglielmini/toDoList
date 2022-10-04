import styled, { css } from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";


export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: flex-start;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY500};
  `}
`;

export const Content = styled.View`
  margin-top: -28px;
  margin-left: 24px;
  margin-right: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.Pressable`
  width: 52;
  height: 52;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 8px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BLUE_DARK};
  `}

`