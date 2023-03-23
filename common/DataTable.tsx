/* eslint-disable react/display-name */
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
} from "@mui/icons-material";
import MaterialTable from "material-table";
import { forwardRef } from "react";

interface IDataTableProps {
  data: any;
  columns: any;
  title: string;
  onDelete: (data: any) => void;
  onView: (data: any) => void;
  onEdit: (data: any) => void;
}

const tableIcons: any = {
  Add: forwardRef((props: any, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props: any, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props: any, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props: any, ref) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props: any, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props: any, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props: any, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props: any, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props: any, ref) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef((props: any, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props: any, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props: any, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props: any, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props: any, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props: any, ref) => (
    <ArrowDownward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef((props: any, ref) => (
    <Remove {...props} ref={ref} />
  )),
};

export default function DataTable(props: IDataTableProps) {
  const { data, columns, title } = props;
  const actions: any = [];
  if (props.onDelete) {
    actions.push({
      icon: "Delete",
      tooltip: "Delete",
      onClick: (event: any, rowData: any) => {
        props.onDelete(rowData);
      },
    });
  }
  if (props.onEdit) {
    actions.push({
      icon: "Edit",
      tooltip: "Edit",
      onClick: (event: any, rowData: any) => {
        props.onEdit(rowData);
      },
    });
  }

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={data || []}
        title="Demo Title"
        actions={actions}
      />
    </div>
  );
}
