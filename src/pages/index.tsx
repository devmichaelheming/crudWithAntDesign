import { Link } from "~/components";
import S from "~/styles/styles";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <S.Container>
      <S.Title>Crud in Next Js</S.Title>
      <Link href="/clientes">Click here to go to the users page</Link>
    </S.Container>
  );
};

export default Home;
