import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import { useState, useCallback, useEffect, useRef } from "react";
import { FaExclamation } from "react-icons/fa";

export const Input = () => {
  return (
    <FormControl isRequired>
      <FormLabel>label</FormLabel>
      <InputGroup flexDirection="column">
        <InputLeftElement mt="2.5">
          <FaExclamation />
        </InputLeftElement>

        <ChakraInput placeholder="Email" />

        <FormErrorMessage>Erro</FormErrorMessage>
      </InputGroup>
    </FormControl>
  );
};
