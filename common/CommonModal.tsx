import {
  Dialog, DialogContent, DialogTitle, Divider, Slide, Typography
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { ReactNode } from "react";

interface ICommonModal {
  isOpen: boolean;
  toggle: () => void;
  title?: string;
  children: ReactNode;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommonModal(props: ICommonModal) {
  const { isOpen, toggle, title, children } = props;
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={toggle}
    >
      <DialogTitle>
        <Typography variant="h6" fontWeight={'bold'}>{title}</Typography>
        <Divider/>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
