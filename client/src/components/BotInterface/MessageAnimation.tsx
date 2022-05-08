import { motion } from "framer-motion";
import React from "react";
import { MessageAnimationProps } from "../../typescript/interfaces";

const MessageAnimation = ({ Key, children }: MessageAnimationProps) => {
	return (
		<motion.div
			key={Key}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
};

export default MessageAnimation;
