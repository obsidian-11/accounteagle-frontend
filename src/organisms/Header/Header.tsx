import { Box, Link as ChakraLink, Flex, Image, Spacer } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      label: "Home",
      url: "/",
    },
    {
      id: 2,
      label: "Client Database",
      url: "/clients",
    },
    {
      id: 3,
      label: "GST Accounts",
      url: "/accounts",
    },
    {
      id: 4,
      label: "Financials",
      url: "/financials",
    },
  ];

  return (
    <Flex borderBottom="1px solid #f1f1f1" py="3">
      <Box w="12rem">
        <Image src="assets/LogoWText.png" />
      </Box>
      <Spacer />
      <Flex gap="10" justify="center" align="center">
        {menuItems.map((item) => (
          <ChakraLink as={ReactRouterLink} to={item.url} key={item.id}>
            {item.label}
          </ChakraLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
