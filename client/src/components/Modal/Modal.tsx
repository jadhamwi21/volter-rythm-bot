import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import { PortalRoot } from "../../constants/constants";

interface Props {
	children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
	return <>{ReactDOM.createPortal(children, PortalRoot)}</>;
};

export default Modal;
