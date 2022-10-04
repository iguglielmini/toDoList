import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export type TypeProps = "primary" | "secondary";

type Props = {
    type: TypeProps;
};

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
    placeholderTextColor:
        type === "primary" ? theme.COLORS.GRAY300 : theme.COLORS.GRAY300,
})) <Props>`
  flex:1;
  height: 52px;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  ${({ theme, type }) => css`
    font-family: ${theme.FONTS.TITLE};
    background-color: ${theme.COLORS.GRAY500};
    border: 1px solid ${theme.COLORS.PURPLE};
    color: ${type === "primary"
            ? theme.COLORS.GRAY100
            : theme.COLORS.GRAY100};
  `};
`;
