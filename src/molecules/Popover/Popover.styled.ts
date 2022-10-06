import styled from "styled-components";
import { colorsPalette } from "styles";
import { mediaQuery } from "styles/responsive";

const POPOVER_PADDING = "16px";

export const PopoverContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 209px 84px rgba(37, 47, 42, 0.02), 0px 118px 71px rgba(37, 47, 42, 0.07),
    0px 52px 52px rgba(37, 47, 42, 0.12), 0px 13px 29px rgba(37, 47, 42, 0.14),
    0px 0px 0px rgba(37, 47, 42, 0.14);
  border-radius: 8px;
  width: fit-content;
  max-width: 300px;

  #arrow,
  #arrow::before {
    position: absolute;
    width: 16px;
    height: 16px;
    background: inherit;
    z-index: -1;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
    background-color: inherit;
  }

  &[data-popper-placement^="top"] > #arrow {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > #arrow {
    top: -4px;
  }

  &[data-popper-placement^="left"] > #arrow {
    right: -4px;
  }

  &[data-popper-placement^="right"] > #arrow {
    left: -4px;
  }
`;

export const NetguruOnly = styled.div`
  padding: ${POPOVER_PADDING};
  border-radius: 8px 8px 0 0;
  background-color: ${colorsPalette.primary[500]};
  width: 100%;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
`;

export const PopoverContent = styled.div`
  padding: ${POPOVER_PADDING};
  overflow-y: auto;
  max-height: 70vh;

  ${mediaQuery.desktop} {
    max-height: 300px;
  }
`;
