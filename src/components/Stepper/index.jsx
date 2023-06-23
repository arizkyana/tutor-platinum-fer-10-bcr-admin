import React from 'react';
import { Button } from 'react-bootstrap';

function Stepper(props) {
  const { onClickStep } = props;
  return (
    <div className="d-flex justify-content-end align-items-center">
      <Button type="button" onClick={() => onClickStep(0)}>
        Step 1
      </Button>
      <Button type="button" onClick={() => onClickStep(1)}>
        Step 2
      </Button>
      <Button type="button" onClick={() => onClickStep(2)}>
        Step 3
      </Button>
    </div>
  );
}

export default Stepper;
