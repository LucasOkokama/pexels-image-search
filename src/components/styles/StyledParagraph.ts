import { styled } from "styled-components";

export const StyledParagraph = styled.p`
  font-weight: 300;
  text-align: center;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.colors.phrase};
`