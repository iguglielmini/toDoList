import styled, { css } from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";


export const Container = styled.View`
    height: 173px;
    align-items: center;
    justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY700};
  `}
`;

export const Image = styled.Image`
  width: 132px;
`