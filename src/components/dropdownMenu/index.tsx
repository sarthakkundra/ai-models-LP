import { useEffect, useState, useRef } from "react";
import Menu from "../menu";
import { dropdownMenuFilters } from "../../data";
import TaskItem from "../taskItem";
import WhiteChevron from "../../assets/white-chevron.svg";

interface IComponentProps {
	heading: string;
	isPrimaryDropdown?: boolean;
}

const DropdownMenu: React.FC<IComponentProps> = ({
	heading,
	isPrimaryDropdown,
}) => {
	const dropdownRef = useRef(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef]);

	return (
		// 	<>
		// 		<div
		// 			className='bg-[#17171A] rounded-2xl flex justify-between items-center cursor-pointer max-w-fit px-4 py-1'
		// 			onClick={() => setIsDropdownOpen((s) => !s)}
		// 			tabIndex={-1}>
		// 			<h5 className='text-white font-light'> Model </h5>
		// 			<p className='text-white'>^</p>
		// 		</div>
		// 		{isDropdownOpen && (
		// 			<div
		// 				className={`bg-red transition-opacity duration-500 absolute  ${
		// 					isDropdownOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
		// 				}`}
		// 				ref={dropdownRef}
		// 				// style={{ height: isDropdownOpen ? "auto" : "0" }}
		// 			>
		// 				<Menu menuItems={dropdownMenuFilters} />
		// 			</div>
		// 		)}
		// 	</>
		// );
		<div className='relative inline-block text-left' ref={dropdownRef}>
			<button
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				className={`bg-[#17171A] text-white focus:outline-none rounded-xl flex justify-start items-center ${
					isPrimaryDropdown ? "py-5 px-6" : "py-2 px-3"
				}`}>
				{heading}
				<img
					src={WhiteChevron}
					className={`transition-all duration-500 ease-out ${
						isDropdownOpen ? " rotate-180" : "rotate-0"
					}
					${isPrimaryDropdown ? "ml-[200px]" : "ml-[5px]"}
					`}
				/>
			</button>
			{/* {isDropdownOpen && ( */}
			<div
				className='absolute mt-2 w-48 rounded-md shadow-lg bg-[#17171A] z-50 transition-opacity duration-500 ease-out'
				style={
					isDropdownOpen
						? {
								height: "auto",
								display: "block",
								opacity: "100",
								animation: "fadeIn 300ms ease-out forwards",
						  }
						: {
								height: "0",
								display: "none",
								opacity: "0",
								animation: "fadeIn 300ms ease-out forwards",
						  }
				}>
				{dropdownMenuFilters?.map((filter) => (
					<TaskItem task={filter} />
				))}
			</div>
			{/* )} */}
		</div>
	);
};

export default DropdownMenu;
