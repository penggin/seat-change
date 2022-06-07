import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, blue.300, blue.700)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        페이지가 존재하지 않습니다.
      </Text>
      <Text color={"gray.500"} mb={6}>
        해당 페이지는 개발중이거나 존재하지 않는 페이지입니다.
      </Text>

      <Link href="/">
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, blue.300, blue.700)"
          color="white"
          variant="solid"
        >
          메인메뉴로 돌아가기
        </Button>
      </Link>
    </Box>
  );
}
