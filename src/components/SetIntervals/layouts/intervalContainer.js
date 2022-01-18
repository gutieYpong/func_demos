import styled from "styled-components";


export const IntervalContainer = styled.div`
  /* Layout */
  width: 80%;
  height: 95%;
  border: 5px dotted #000000;
`;

export const IntervalContainerExtend = styled( IntervalContainer )`
  h5 {
    text-align: center;
  }

  div {
    text-align: center;
    label {
      font-size: 12px;
    }
  }
`;