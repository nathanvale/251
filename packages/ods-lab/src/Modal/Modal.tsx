import * as React from "react";
import MuiModal, { ModalProps as IModal } from "@material-ui/core/Modal";

export interface ModalProps extends IModal {}

export const Modal = (props: ModalProps) => (
  <MuiModal {...props}>{props.children}</MuiModal>
);
