import styled from "styled-components";

const StyledForm = styled.form`
  width: 70%;
  input,
  .textarea {
    background-color: transparent;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: #9e866c;
    margin: 10px 2%;
    height: 100px;
  }
  input {
    width: 43%;
    height: 30px;
  }
  .textarea,
  .assumpte {
    width: 90%;
  }
  .textarea {
    text-align: top;
    font-family: "Outfit", sans-serif;
  }
  .submit {
    width: auto;
    background-color: #9e866c;
    color: white;
    margin-bottom: 20px;
  }
`;

export default function Formulari() {
  return (
    <StyledForm>
      <input type="text" name="name" placeholder="Nom*" />
      <input type="text" name="surname" placeholder="Cognom*" />
      <input type="email" name="email" placeholder="Email de contacte*" />
      <input type="tel" name="phone" placeholder="Telèfon de contacte" />
      <input
        type="text"
        name="about"
        placeholder="Assumpte*"
        className="assumpte"
      />
      <textarea name="message" className="textarea" placeholder="Missatge*" />
      <input type="submit" value="Enviar" className="submit" />
    </StyledForm>
  );
}
