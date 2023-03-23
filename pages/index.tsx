import DataTable from "@/common/DataTable";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button,
  TableBody,
} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MaterialTable from "material-table";
import { useState } from "react";
import CommonModal from "@/common/CommonModal";
import AddStudent from "@/component/addstudent/AddStudent";

export interface IStudent {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

export default function Home({ data }: { data: any }) {
  const [lstStudent, setLstStudent] = useState<IStudent[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onComplete() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen(!isOpen);
  }

  function onAdd() {
    toggle();
  }

  return (
    <Container maxWidth="md" sx={{ py: 20 }}>
      <Box
        py={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Students</Typography>
        <Button variant="contained" onClick={onAdd}>
          Add Student
        </Button>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Mobile Number</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lstStudent &&
              lstStudent.map((item:IStudent, index:number) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.firstName}
                  </TableCell>
                  <TableCell>{item.lastName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  {/* <TableCell>{item.protein}</TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isOpen && (
        <CommonModal isOpen={isOpen} toggle={toggle} title="Add Student">
          <AddStudent onComplete={onComplete} />
        </CommonModal>
      )}
    </Container>
  );
}
