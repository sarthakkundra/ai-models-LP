import React from "react";
import { modelsData } from "../../data";
import ModelCard from "../modelCard";

const ModelList = () => {
	return (
		<div className='overflow-auto w-full min-w-[642px]'>
			{modelsData.map((model) => (
				<ModelCard modelData={model} />
			))}
		</div>
	);
};

export default ModelList;
