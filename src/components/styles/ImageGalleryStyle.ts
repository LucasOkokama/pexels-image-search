import { styled } from "styled-components";

export const ImageGalleryStyle = styled.div`
  columns: 292px;
  column-gap: 12px;
  min-height: 396px;

  .card {
    margin-bottom: 12px;
    position: relative;
    overflow: hidden;
  }

  .card:hover .details{
    bottom: 0px;
    opacity: 1;
  }

  .image{
    border-radius: 6px;
  }

  .details {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
    bottom: -45px;
    color: #fff;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    padding: 16px 15px 12px 15px;
    position: absolute;
    transition: bottom 0.3s ease, opacity 0.3s ease;
    opacity: 0;
    width: 100%;
  }

  .photographer{
    align-items: center;
    display: flex;
    gap: 8px;
    justify-content: center;
    padding: 2px 4px;
    transition: .5s;
  }

  .photographer:hover{
    color: #e6c8fa;
  }

  .download{
    background-color: white;
    border-radius: 3px;
    color: black;
    padding: 4px;
    width: fit-content;
    height: 23px;
  }
`