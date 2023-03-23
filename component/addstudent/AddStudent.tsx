import Box from "@mui/material/Box";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface IAddStudentProps {
  onComplete?: () => void;
  isEdit?: boolean;
}
export default function AddStudent(props: IAddStudentProps) {
  return (
    <React.Fragment>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus vero
      corporis inventore recusandae dolores fugit, aut ratione et, officiis
      provident ipsam reprehenderit, quos quis rerum saepe ducimus nostrum
      accusantium. Id repellendus officia ab inventore! Nisi cupiditate aut
      labore accusantium debitis odit. Ab tempora magnam exercitationem quaerat
      non aliquam odit suscipit officia nobis, dolores inventore repellendus
      quos, blanditiis laborum eius aperiam dolore asperiores odio tempore ullam
      repudiandae velit at saepe illum. Dolorum odit vitae voluptas accusantium
      laudantium expedita sapiente molestias sint. Architecto quas, tenetur,
      delectus enim vero quo incidunt iste voluptas provident magni vel magnam
      ipsa velit? Temporibus, ducimus pariatur? Ea assumenda possimus aliquam
      totam ipsam saepe mollitia unde, enim facere officia ullam dicta iusto est
      neque eos nesciunt, ipsa amet?
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          sx={{ margin: "auto", width: "30%", float:"right" }}
          color="success"
        >
          Save
        </Button>
      </Box>
    </React.Fragment>
  );
}
