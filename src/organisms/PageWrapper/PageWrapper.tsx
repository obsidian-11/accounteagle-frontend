import { Box } from "@chakra-ui/react";
import Header from "organisms/Header/Header";
import { FC } from "react";

const PageWrapper = ({ pageComponent }: { pageComponent: FC }) => {
  const ComponentToRender = pageComponent;
  return (
    <>
      <Header />
      <Box py="5" px="2">
        <ComponentToRender />
      </Box>
    </>
  );
};

export default PageWrapper;
