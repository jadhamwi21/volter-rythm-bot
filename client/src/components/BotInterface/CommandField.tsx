import React from "react";
import styled from "styled-components";
import { useCommand } from "../../hooks/useCommand";

const CommandField = () => {
	const { FieldHandler, FieldValue, SendCommand } = useCommand();
	return (
		<Form onSubmit={SendCommand}>
			<FieldWrapper>
				<Field
					placeholder="Type Your Command..."
					onChange={FieldHandler}
					value={FieldValue}
					autoFocus
				/>
			</FieldWrapper>
		</Form>
	);
};
const Form = styled.form``;
const FieldWrapper = styled.div`
	height: fit-content;
	width: fit-content;
	margin: 0 auto;
	position: relative;
	z-index: 12;
`;
const Field = styled.input`
	width: 95vw;
	height: 40px;
	border-radius: 6px;
	border: none;
	background-color: #e7e7e7;
	outline: none;
	position: relative;
	top: -0.5em;
	font-size: 20px;
	padding: 1em;
	color: #0474ea;
	&::placeholder {
		color: #0474ea;
	}
`;

export default CommandField;
