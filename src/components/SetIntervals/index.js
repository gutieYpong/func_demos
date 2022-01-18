import styled from "styled-components";

import NormalInterval from "./normalInterval";
import DynamicIntervalUseHook from "./dynamicInterval(Hook)";
import DynamicIntervalInClass from "./dynamicInterval(Class)";
import AdvancedInterval from "./advanceInterval";
import MainSectionContainer from "../mainSectionContainer";


const IntervalsContainer = styled( MainSectionContainer )`
  /* Layout */
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  place-items: center;
`;

const SetIntervals = () => {
  return (
    <IntervalsContainer>
      <NormalInterval initCount={ 10 } />
      <DynamicIntervalUseHook />
      <DynamicIntervalInClass />
      <AdvancedInterval />
    </IntervalsContainer>
  );
};

export default SetIntervals;