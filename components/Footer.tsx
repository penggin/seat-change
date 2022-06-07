import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Stack spacing={6}>
          <Text fontSize={"lg"}>© PENGGIN, ALL RIGHTS RESERVED.</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Discord"} href={"#"}>
              <FaDiscord />
            </SocialButton>
            <SocialButton label={"Github"} href={"#"}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={"Email"} href={"#"}>
              <MdEmail />
            </SocialButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
