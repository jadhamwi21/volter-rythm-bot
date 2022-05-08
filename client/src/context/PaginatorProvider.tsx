import React from "react";
import usePage from "../hooks/usePage";
import {
	PaginatorContextInterface,
	PaginatorWrapperProps,
} from "../typescript/interfaces";

export const PaginatorContext = React.createContext<
	Partial<PaginatorContextInterface>
>({});

export const PaginatorProvider = ({ children }: PaginatorWrapperProps) => {
	const { MoveToNextPage, CurrentPage } = usePage();
	return (
		<PaginatorContext.Provider value={{ MoveToNextPage, CurrentPage }}>
			{children}
		</PaginatorContext.Provider>
	);
};
