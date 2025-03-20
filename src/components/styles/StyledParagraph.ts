import { styled } from "styled-components";

export const StyledParagraph = styled.p`
  font-weight: 500;
  text-align: center;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.colors.sup};
  font-size: 22px;
  line-height: 38px;

  #highlight{
    background-color: ${({ theme }) => theme.colors.highlight};
    border-radius: 2px;
    padding: 0px 4px;
  }
`