import { Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import logobranco from "../../assets/logobranco.svg";
import { Input } from "../../components/Form/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";

export const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  return (
    <Flex
      alignItems="center"
      padding="10px 15px"
      height="100vh"
      bgGradient="linear(to-r, purple.800 65%, white 35%)"
      color="white"
    >
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
      >
        <Grid w="100%" paddingRight="100px">
          <Image src={logobranco} />
          <Heading as="h1">O jeito fácil e gratis</Heading>
          <Text>
            Flexível e atrativo de gerenciar
            <b>seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          as="form"
          mt="4"
          w="100%"
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="grey.900"
        >
          <Heading size="lg">Bem vindo de volta</Heading>
          <VStack mt="6" spacing="5">
            <Input
              placeholder="Digite seu email"
              icon={FaEnvelope}
              name="email"
            />
            <Input
              placeholder="Digite sua senha"
              icon={FaLock}
              {...register("password")}
            />
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
