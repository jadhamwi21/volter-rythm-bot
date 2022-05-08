import { motion } from "framer-motion";
import React from "react";

interface Props {
	children: React.ReactNode;
	Key: any;
}

const PageTransition = ({ children, Key }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: "-10%" }}
			animate={{ opacity: 1, translateX: "0%" }}
			exit={{ opacity: 0, translateX: "10%" }}
			transition={{ duration: 0.2, ease: "easeInOut" }}
			style={{ height: "96vh", width: "100%" }}
			key={Key}
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;
