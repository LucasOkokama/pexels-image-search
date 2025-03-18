import { styled } from "styled-components"

export const MenuStyle = styled.nav`
  color: ${({ theme }) => theme.colors.sup};
  display: flex;
  font-size: 24px;
  justify-content: space-between;

  #brand {
    align-items: center;
    color: ${({ theme }) => theme.colors.brand};
    display: flex;
    font-size: 20px;
    font-weight: 500;
    gap: 8px;
  }

  #title {
    font-weight: 600;
  }

  #utils{
    display: flex;
    gap: 12px;
  }

  #social-media{
    cursor: pointer;
    transition: .3s;

    &:hover{
      color: #730092;
    }
  }


  @media(max-width: ${({ theme }) => theme.dimensions.sm}){
    #title{
      display: none;
    }
  }
`