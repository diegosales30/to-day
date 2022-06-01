import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import logobranco from "../../assets/logobranco.svg";
import { Input } from "../../components/Form/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup.string().required("Senha obrigatoria"),
});

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    console.log(data);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "90%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
          <Image
            src={logobranco}
            alt="doit"
            boxSize={["120px", "120px", "150px", "150px"]}
          />
          <Heading mt="4" as="h1">
            O jeito fácil e gratis
          </Heading>
          <Text maxW="350px">
            Flexível e atrativo de gerenciar
            <b> seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          onSubmit={handleSubmit(handleSignIn)}
          as="form"
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="grey.900"
          mt={["4", "4", "0", "0"]}
          w={["100%", "100%", "40%", "40%"]}
        >
          <Heading size="lg">Bem vindo de volta</Heading>
          <VStack mt="6" spacing="5">
            <Box w="100%">
              <Input
                placeholder="Digite seu email"
                icon={FaEnvelope}
                label="Login"
                type="email"
                error={errors.email}
                {...register("email")}
              />
              {!errors.email && (
                <Text ml="1" mt="1" color="gray.400">
                  Exemplo: nome@email.com
                </Text>
              )}
            </Box>

            <Input
              placeholder="Digite sua senha"
              icon={FaLock}
              label="password"
              type="password"
              error={errors.password}
              {...register("password")}
            />
          </VStack>
          <VStack mt="4" spacing="5">
            <Button
              isLoading={loading}
              bg="purple.800"
              w="100%"
              color="white"
              h="60px"
              borderRadius="8px"
              _hover={{
                backgroundColor: "purple.900",
              }}
              type="submit"
            >
              Entrar
            </Button>
            <Text color="gray.400">Ainda nao possui uma conta? </Text>
            <Button
              bg="gray.200"
              w="100%"
              color="grat.400"
              h="60px"
              borderRadius="8px"
              _hover={{
                backgroundColor: "gray.300",
              }}
            >
              Registrar-se
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
