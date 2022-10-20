import styled from "styled-components";
import Formulari from "../components/Formulari";
import gos from "../img/gos.png";

const FirstSection = styled.section`
  background-color: #dacebe;
  display: flex;
  flex-direction: row;
  background-image: url(${gos});
  background-position: bottom right;
  background-repeat: no-repeat;
  h1 {
    margin: 20px;
    font-size: 50px;
  }
  p {
    margin: 0 20px 50px 20px;
  }
`;
const FormContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
`;
const SecondSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const BlocksContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-color: black;
  border-style: solid;
  border-width: 0 0 1px 0;
`;
const ThirdSection = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 60%;
  }
`;
export default function Contacte() {
  return (
    <>
      <FirstSection>
        <FormContainer>
          <h1>Contacta'ns</h1>
          <p>
            Si ho prefereixes, pots deixar la teva pregunta en aquest formulari.
          </p>
          <Formulari />
        </FormContainer>
      </FirstSection>
      <SecondSection>
        <BlocksContainer>
          <div>
            <h2>Tens algún dubte?</h2>
            <p>
              Online Customer Service<br></br> botiga@mosquito.com
            </p>
            <p>
              Col·laboracions<br></br> colabs@mosquito.com
            </p>
          </div>
          <div>
            <h2>Press-kit</h2>
            <p>To download the Press-Kit 2022, please click here.</p>
          </div>
          <div>
            <h2>Distribució</h2>
            <p>
              For more info about distributing our titles, please click here.
            </p>
          </div>
        </BlocksContainer>
      </SecondSection>
      <ThirdSection>
        <div>
          <h3>Enviament</h3>
          <p>
            We aim to ship out the majority of products within 3–7 days on
            receival of order. Overseas shipments may be subject to import
            duties and tax. Additional charges must be at the customer’s
            expense. Mosquito has no control over these charges and accepts no
            responsibility for any additional overseas costs.
          </p>
        </div>
        <div>
          <h3>Devolucions</h3>
          <p>
            Products may be returned if you notify us via email within 14 days
            of receipt of product. Products must be returned undamaged and in
            the state in which they were sent. You are responsible for ensuring
            correct packing of the product and using appropriate postal and
            recorded delivery methods with relevant insurance cover in place.
            Counter-Print is not responsible for the loss or damage of any
            returned product. Upon satisfactory receipt of the returned goods we
            will refund your payment within 7 days minus the costs of initial
            shipping and packing charges.
          </p>
        </div>
        <div>
          <h3>Pèrdues</h3>
          <p>
            Once the product has been dispatched to the delivery service, the
            risk of loss passes to you. If you have not received your goods
            within 20 days you must notify Unit Editions via email who will
            advise on a course of action.
          </p>
        </div>
        <div>
          <h3>Pagaments</h3>
          <p>
            Mosquito.com accept all major credit and debit cards. No cheques or
            money orders are accepted. Sorry. All payments are processed by
            Paypal in pounds sterling. This site is secure and protected by
            government approved firewalls. Your credit card details cannot be
            obtained by any other party.
          </p>
        </div>
        <div>
          <h3>Danys</h3>
          <p>
            If your product is received damaged in the post, please notify us
            immediately and retain the product and packing and we will contact
            Royal Mail who will be responsible for addressing and compensating
            the damage claim. Notify us immediately and we will advise on the
            appropriate course of action. Once the product has been dispatched
            to the Royal Mail, risk of loss passes to the customer.
          </p>
        </div>
      </ThirdSection>
    </>
  );
}
