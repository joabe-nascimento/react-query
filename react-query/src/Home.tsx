import { Badge, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useUser } from "./services/users";
import { useRepos } from "./services/repos";

const USERNAME = "joabe-nascimento";

const Home = () => {
  const { data: user } = useUser(USERNAME);
  const { data: repos } = useRepos(USERNAME);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      height="100vh"
      textAlign="center"
      width="100vw"
    >
      <Image
        src={user?.avatar_url}
        alt="Avatar"
        width="96px"
        height="96px"
        borderRadius="full"
        mt="4" // Ajustado a margem-top
      />
      <Text fontWeight="bold" fontSize="24px" mt="2" color="black">
        {user?.name}
      </Text>
      <Text fontWeight="500" mt="2" color="black">
        {user?.bio}
      </Text>
      <Text fontWeight="bold" fontSize="24px" mt="2" color="black">
        Repositórios
      </Text>
      {repos?.map((repo) => (
        <Link
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="400px"
          borderRadius="30px  "
          height="48px"
          backgroundColor="#2f2e30"
          marginTop="16px"
          paddingRight="16px"
          href={repo.html_url}
          target="_blank"
          _focus={{ boxShadow: "none" }}
          _hover={{ textDecoration: "none" }}
        >
          <Text margin="5px">{repo.name}</Text>
          <Badge colorScheme="green">{repo.languege}</Badge>
        </Link>
      ))}
    </Flex>
  );
};

export default Home;
