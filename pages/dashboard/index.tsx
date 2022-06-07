import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  useToast,
} from "@chakra-ui/react";
import Table from "@components/StudentTable";
import Card from "@components/StudentCard";
import { Dispatch, SetStateAction, useState } from "react";
interface Student {
  name: string;
  id: number;
}
const students1 = [
  "김가인",
  "김도형",
  "김윤미",
  "김이삭",
  "김지혜",
  "박가은",
  "박나영",
  "박세은",
  "박정완",
  "손예슬",
  "송영학",
  "안소정",
  "유찬우",
  "이동훈",
  "이상윤",
  "이소언",
  "이수민",
  "이호현",
  "임재민",
  "장민정",
  "장현빈",
  "전소현",
  "전인국",
  "전지연",
  "정민섭",
  "정승범",
  "주찬희",
  "하창우",
  "한승주",
  "황준호",
];

const students: Array<Student> = [
  ...students1.map((name, index) => {
    return { name, id: index + 1 };
  }),
];
function mixStudents(
  setStudents: Dispatch<SetStateAction<Student[]>>,
  studentsState: Array<Student>
) {
  console.log("자리석");
  setStudents(
    [...studentsState].sort((studentA, studentB) => {
      if (studentA.name == "장민정") {
        return -1;
      } else if (studentB.name == "장민정") {
        return 2;
      } else {
        return Math.random() - 0.5;
      }
    })
  );
  console.log(studentsState);
}

const Dashboard = () => {
  const toast = useToast();
  const [studentsState, setStudents] = useState([...students]);
  return (
    <Box mt="150px" alignItems={"center"} textAlign="center" mr="20%" ml="20%">
      <Box borderWidth="1px" borderRadius="lg" alignItems={"center"}>
        <Container>
          <Center>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              mb="50px"
              mt="50px"
              // maxW="100px"
              minW="200px"
            >
              <Box
                fontWeight="semibold"
                // mr={"16px"}
                // ml="16px"
                mt="16px"
                mb="16px"
                textAlign={"center"}
              >
                교탁
              </Box>
            </Box>
          </Center>
        </Container>
        <Center mb="50px">
          <Table
            students={studentsState}
            table={{ row: 1, column: 5, setRow: 6 }}
          />
        </Center>
      </Box>
      <Container mt="90px" mb="90px" maxW="400px">
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => mixStudents(setStudents, studentsState)}
        >
          자리 섞기
        </Button>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => {
            setStudents([...students]);
          }}
        >
          초기화
        </Button>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() =>
            toast({
              title: "지금은 사용할 수 없는 기능입니다.",
              description:
                "휴대폰으로 찍으세요 ^오^ 3시간작이라 시간이 없음 ㅎㅎ",
              status: "warning",
              duration: 5000,
              isClosable: true,
            })
          }
        >
          저장
        </Button>
      </Container>
    </Box>
  );
};
export default Dashboard;
