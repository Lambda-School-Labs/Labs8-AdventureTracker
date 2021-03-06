import {Steps, Card, Button} from "antd";
import styled from "styled-components";
import WrappedFinishTripForm from "./FinishTripForm";

const Step = Steps.Step;

interface Props {
  step: number;
  setStep: Function;
  googleImageUrl: string;
}
const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 10000000;
  left: 3%;
  top: 22%;
`;

const PreviewImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 1.6rem;
`;
const StepsStatusBar: React.SFC<Props> = ({
  step,
  setStep,
  googleImageUrl,
}) => {
  if (step === -1) {
    return null;
  } else {
    return (
      <StepsWrapper>
        <Card
          bodyStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Steps direction="vertical" current={step}>
            <Step
              title="Go to location"
              description="The location needs to be visible before taking snapshot."
            />
            <Step
              title="Take Snapshot"
              description="Creates a desired location image for trip."
            />
            <Step
              title="Finish Trip"
              description="Fill out the rest of the details then save."
            />
          </Steps>
          {step === 1 ? (
            <PreviewImage
              src={googleImageUrl}
              alt="Google Map Preview Image"
            />
          ) : null}
          <WrappedFinishTripForm step={step} setStep={setStep} />
        </Card>
      </StepsWrapper>
    );
  }
};

export default StepsStatusBar;
