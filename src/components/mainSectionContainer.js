import styled from "styled-components";

const MainSectionContainer = styled.div`
  /* Layout */
  width: 75%;
  height: 100%;
  grid-area: main;
  border: 5px dashed #000000;
  text-align: center;
  overflow-y: scroll;
  padding: 16px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #C4A8E3;
  }
  &::-webkit-scrollbar-thumb {
    background: #814AA7;
  }
`;

export default MainSectionContainer;