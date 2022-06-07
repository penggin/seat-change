import {
  Box,
  Container,
  Flex,
  Grid,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import Card from "@components/StudentCard";
interface TableRow {
  row: number;
  column: number;
  setRow: number;
}
interface Student {
  name: string;
  id: number;
}
const StudentTable = ({
  students,
  table,
}: {
  students: Array<Student>;
  table: TableRow;
}) => {
  let counter = -1;
  return (
    // <Box>
    <Flex
      minWidth="10px"
      alignItems="center"
      gap="50px"
      align="center"
      flexDirection={"row"}
    >
      {[...Array(table.setRow)].map((i, setRow) => {
        return (
          <SimpleGrid columns={1} key={`a${setRow}`}>
            {[...Array(table.row)].map((i, row) => {
              return (
                <SimpleGrid key={`b${row}`}>
                  {[...Array(table.column)].map((index) => {
                    counter++;
                    return (
                      <Card
                        name={students.at(counter)?.name}
                        key={students.at(counter)?.id}
                      ></Card>
                    );
                  })}
                </SimpleGrid>
              );
            })}
          </SimpleGrid>
        );
      })}
    </Flex>
    // </Box>
  );
};
export default StudentTable;
