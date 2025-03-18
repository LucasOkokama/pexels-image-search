import { styled } from "styled-components";

export const TahSearchValueStyle = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 1px 4px 0px;
  color: ${({ theme }) => theme.colors.placeholder};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  gap: 8px;
  justify-content: center;
  padding: 6px 14px;
  transition: .3s;

  &:hover{
    background-color: ${({ theme }) => theme.colors.hoverTag};
  }
`