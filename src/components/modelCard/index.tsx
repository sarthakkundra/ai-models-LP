import React from "react";
import { TModelData } from "../../types";
import { MAX_RATING } from "../../constants";
import EmptyStar from "../../assets/emptyStar.svg";
import FilledStar from "../../assets/filledStar.svg";

interface IComponentProps {
	modelData: TModelData;
}

const ModelCard: React.FC<IComponentProps> = ({ modelData }) => {
	const renderRating = () => {
		const ratingComponent = [];
		for (let i = 0; i < MAX_RATING; i++) {
			if (i + 1 < modelData.rating) {
				ratingComponent.push(<img src={FilledStar} />);
			} else {
				ratingComponent.push(<img src={EmptyStar} />);
			}
		}
		return ratingComponent;
	};
	return (
		<div className='flex justify-start items-center py-8 bg-[#26252A] p-4'>
			<h3 className='text-white min-w-[40%]'>{modelData.name}</h3>
			<p className='text-white px-2 py-3 mx-2'>{modelData.version}</p>
			<p className='text-white mx-2 px-2 py-3'>{modelData.license}</p>
			{/* <p className='text-white mx-2 px-2 py-3'></p> */}
			<img src={`../../assets/${modelData.contributors}`} />
			<div className='mx-2 flex px-2 py-3'>{renderRating()}</div>
		</div>
	);
};

export default ModelCard;
