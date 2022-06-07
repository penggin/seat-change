import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box } from "@chakra-ui/react";

export default function StudentCard({ name }: { name?: string }) {
  return (
    <Box maxW="100px" minW="100px" borderWidth="1px" borderRadius="lg">
      <Box p="6">
        <Box fontWeight="semibold">{name}</Box>
      </Box>
    </Box>
  );
}
