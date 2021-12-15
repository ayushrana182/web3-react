import React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Button,
  Container,
  HStack,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Injected } from "./wallet/Connectors";
import { useDisclosure } from "@chakra-ui/react";

const MetaMaskCon = () => {
  const { active, account, library, connector, activate, deactivate, chainId } =
    useWeb3React();

  const { isOpen, onOpen, onClose } = useDisclosure();

  async function connect() {
    try {
      await activate(Injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <div
      style={{
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button onClick={onOpen} colorScheme={"blue"}>
        Check Wallet Details
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Wallet Details</ModalHeader>
          <ModalCloseButton />
          <Container>
            <VStack>
              <Container>
                {active ? (
                  <span>
                    Connected with
                    <Stack>
                      <b> Account: {account}</b>
                      <b> Chain ID: {chainId} </b>
                    </Stack>
                  </span>
                ) : (
                  <span>Not Connected</span>
                )}
              </Container>
              <ModalFooter>
                <HStack>
                  <Button onClick={connect} colorScheme={"blue"}>
                    {" "}
                    Connect to MetaMask
                  </Button>
                  <Button
                    onClick={disconnect}
                    variant="outline"
                    colorScheme={"red"}
                  >
                    Disconnect
                  </Button>
                </HStack>
              </ModalFooter>
            </VStack>
          </Container>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MetaMaskCon;
