import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Spacer,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) => (
  <NextLink href={href}>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Link>
  </NextLink>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        color={useColorModeValue("black", "white")}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <NextLink href="/">
            <Link
              fontSize={"32px"}
              fontWeight={"bold"}
              mr={"16px"}
              _hover={{
                textDecoration: "none",
              }}
            >
              자리바꾸기
            </Link>
          </NextLink>
          <NavLink href={"/dashboard/"}>새로만들기</NavLink>
          <NavLink href={"/dashboard/load"}>불러오기</NavLink>
          <NavLink href={"/dashboard/about"}>About</NavLink>
          <Spacer />

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
