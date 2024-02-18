import React, { useState } from "react";
import { TModelData } from "../../types";
import { MAX_RATING } from "../../constants";
import EmptyStar from "../../assets/emptyStar.svg";
import FilledStar from "../../assets/filledStar.svg";
import BardLogo from "../../assets/logos/Bard.svg";
import ChatGPTLogo from "../../assets/logos/ChatGPT.svg";
import TensorFlowLogo from "../../assets/logos/TensorFlow.svg";
import OneContributor from "../../assets/people1.svg";
import TwoContributor from "../../assets/people2.svg";
import ThreeContributor from "../../assets/people3.svg";

interface IComponentProps {
	modelData: TModelData;
}

const ModelCard: React.FC<IComponentProps> = ({ modelData }) => {
	const [isCardExpanded, setIsCardExpanded] = useState(false);

	const renderRating = () => {
		const ratingComponent = [];
		for (let i = 0; i < MAX_RATING; i++) {
			ratingComponent.push(
				<img
					key={i}
					src={i < modelData.rating ? FilledStar : EmptyStar}
					alt='Star'
				/>
			);
		}
		return ratingComponent;
	};

	const getLogoImg = () => {
		switch (modelData.name) {
			case "Chat GPT":
				return ChatGPTLogo;
			case "TensorFlow":
				return TensorFlowLogo;
			default:
				return BardLogo;
		}
	};

	const getContributorImg = () => {
		switch (modelData.contributors) {
			case "1":
				return OneContributor;
			case "2":
				return TwoContributor;
			default:
				return ThreeContributor;
		}
	};
	return (
		<div
			onClick={() => setIsCardExpanded((s) => !s)}
			className='cursor-pointer'>
			<div className='flex justify-start items-center py-8 bg-[#26252A] p-4 h-[64px]'>
				<h3 className='text-white min-w-[40%] flex'>
					<img src={getLogoImg()} className='mr-2' />
					{modelData.name}
				</h3>
				<p className='text-white px-2 py-3 mx-2 min-w-[80px]'>
					{modelData.version}
				</p>
				<p className='text-white mx-2 px-2 py-3 min-w-[80px]'>
					{modelData.license}
				</p>
				{/* Dynamic image rendering should handle paths correctly, consider adjusting if necessary */}
				<div className='min-w-[80px]'>
					<img src={getContributorImg()} alt='Contributors' className='mx-2' />
				</div>
				<div className='flex px-2 py-3'>{renderRating()}</div>
			</div>
			<div
				className={`transition-height duration-500 ease-in-out overflow-hidden ${
					isCardExpanded ? "max-h-96" : "max-h-0"
				}`}>
				<p className='text-white text-xs p-4'>
					{isCardExpanded && modelData.description}
				</p>
			</div>
		</div>
	);
};

export default ModelCard;
