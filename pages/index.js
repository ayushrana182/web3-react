import { Container } from "@chakra-ui/react";
import Converter from "../components/Converter";
import MetaMaskCon from "../components/MetaMaskCon";
import TopBar from "../components/TopBar";

export default function Home() {
  return (
    <div>
      <Container>
        <TopBar />
        <Converter />
        <MetaMaskCon />
      </Container>
    </div>
  );
}
