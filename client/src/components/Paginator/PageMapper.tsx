import { PaginatorContext } from "../../context/PaginatorProvider";
import { MapperComponent } from "./MapperComponent";
import PagesLayout from "./PagesLayout";

const PageMapper = () => {
	return (
		<PaginatorContext.Consumer>
			{({ CurrentPage }) => (
				<PagesLayout CurrentPage={CurrentPage}>
					<MapperComponent currentPage={CurrentPage} />
				</PagesLayout>
			)}
		</PaginatorContext.Consumer>
	);
};

export default PageMapper;
