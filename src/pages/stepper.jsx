import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Stepper from '../components/Stepper';

function PaymentMethod(props) {
  const { onSubmitSuccess } = props;
  return (
    <div>
      <h3>Payment Method</h3>
      <Button type="button" onClick={() => onSubmitSuccess(1)}>
        Submit
      </Button>
    </div>
  );
}

function Pay(props) {
  const { onSubmitSuccess } = props;
  return (
    <div>
      <h3>Pay</h3>
      <Button type="button" onClick={() => onSubmitSuccess(2)}>
        Submit
      </Button>
    </div>
  );
}

function Ticket() {
  return (
    <div>
      <h3>Ticket</h3>
    </div>
  );
}

function PaymentPage() {
  const [content, setContent] = useState(0);

  const renderContent = () => {
    if (content === 0)
      return <PaymentMethod onSubmitSuccess={(step) => setContent(step)} />;
    if (content === 1)
      return <Pay onSubmitSuccess={(step) => setContent(step)} />;
    if (content === 2) return <Ticket />;

    return <div>Tidak ada konten</div>;
  };

  return (
    <Container>
      <h1>Payment</h1>
      <Stepper onClickStep={(step) => setContent(step)} />
      {renderContent()}
    </Container>
  );
}

export default PaymentPage;
