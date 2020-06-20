import styled from "styled-components";
import { customMedia } from "./Breakpoints";

export const ProductCard = styled.div`
    width: 22%;
    height: 500px;
    margin-bottom: 40px;
    position: relative;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;

    ${customMedia.lessThan("desktop")`
        width: 22%;
        height: 300px;
    `}

    ${customMedia.lessThan("tablet")`
        width: 28%;
        height: 250px;
    `}

    ${customMedia.lessThan("largePhone")`
        width: 40%;
    `}

    ${customMedia.lessThan("smallPhone")`
        width: 90%;
        height: 400px;
    `}
`;

export const Content = styled.div`
  position: absolute;
  bottom: -65px;
  left: 0;
  right: 0;
  height: 60px;
  background-color: rgba(1, 1, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  ${customMedia.lessThan("smallDesktop")`
    bottom: 0;
  `}
`;

export const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: white;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
