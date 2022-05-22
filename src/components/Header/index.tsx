import Link from "next/link";
import React, { FC, ReactElement } from "react";

import { Container } from "./styles";

const Header: FC = (): ReactElement => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/clientes">Clientes</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
