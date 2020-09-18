import React from "react";

import { Container } from "./styles";

interface IUser {
  name: string;
  email: string;
}
interface Props {
  user: IUser;
}
const User: React.FC<Props> = ({ user, children }) => {
  return (
    <Container>
      <p>{user.name || "Nome não cadastrado"}</p>
      <p>{user.email || "Email não cadastrado"}</p>
    </Container>
  );
};

export default User;
