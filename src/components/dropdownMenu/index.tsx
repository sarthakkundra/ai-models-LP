import { useEffect, useState, useRef } from "react";
import Menu from "../menu";
import { dropdownMenuFilters } from "../../data";

const DropdownMenu = () => {
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
				className='px-4 py-2 bg-blue-500 text-white rounded focus:outline-none'>
				Toggle Dropdown
			</button>
			{isDropdownOpen && (
				<div className='absolute mt-2 w-48 rounded-md shadow-lg bg-white z-50'>
					<a
						href='#'
						className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
						Item 1
					</a>
					<a
						href='#'
						className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
						Item 2
					</a>
					<a
						href='#'
						className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
						Item 3
					</a>
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
