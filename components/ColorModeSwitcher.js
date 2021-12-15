import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  HStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Dark", "Light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
      <HStack spacing="24px">
        <IconButton
          size="lg"
          fontSize="lg"
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
          {...props}
        />
        <Heading as="h5" size="sm">{`Switch to ${text} Mode`}</Heading>
      </HStack>
    </>
  );
};
