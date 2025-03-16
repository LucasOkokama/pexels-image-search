import { styled } from "styled-components"

export const MenuStyle = styled.nav`
  display: flex;
  font-size: 24px;
  justify-content: space-between;

  #brand {
    align-items: center;
    color: #730092;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    gap: 8px;
  }

  #title {
    font-weight: 600;
  }

  #social-media{
    cursor: pointer;
    transition: .3s;

    &:hover{
      color: #730092;
    }
  }
`