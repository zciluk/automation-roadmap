import styled, { css } from "styled-components";
import { colorsPalette } from "styles";
import { ButtonStyles } from "./types";

export const StyledButton = styled.button<Required<ButtonStyles>>`
  border-radius: 8px;
  padding: 12px 16px;
  font-style: normal;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }

  ${({ variant, color }) =>
    variant === "primary"
      ? css`
          background-color: ${colorsPalette[color][500]};
          color: white;
          border: none;
          &:hover {
            background-color: ${colorsPalette[color][700]};
          }
        `
      : css`
          background-color: white;
          color: ${colorsPalette[color][500]};
          border: 1px solid ${colorsPalette[color][500]};
          &:hover {
            border-color: ${colorsPalette[color][700]};
            color: ${colorsPalette[color][700]};
        `}
`;
