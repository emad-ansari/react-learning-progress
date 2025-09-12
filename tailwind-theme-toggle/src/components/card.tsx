import { ArrowRight, CircleDollarSign, Clock, MapPin } from "lucide-react";

export interface CardProps {
	lable: string;
	lableClassname: string;
	role: string;
	description: string;
	expectedCTC: string;
	workingMode: "Remote" | "In House" | "In Office";
	jobType: "Full Time" | "Intern" | "Part Time";
}

export const Card: React.FC<CardProps> = ({
	lable,
	lableClassname,
	role,
	description,
	expectedCTC,
	workingMode,
	jobType,
}) => {
	return (
		<div className="w-[90%] bg-white h-auto p-5 rounded-2xl border border-gray-200 space-y-4 ring-5 ring-gray-200/20 dark:bg-dark-card dark:border-dark-border  transition-all duration-300 ease-in-out cursor-pointer hover:shadow-md z-10 dark:ring-dark-card/20 dark:ring-5">
			<div>
				<span className={` text-sm px-2 py-1 rounded-full font-medium text-center ${lableClassname}`}>
					{lable}
				</span>
			</div>
			<div className="flex flex-col gap-1.5 dark:text-white">
				<h3 className="font-bold text-xl md:text-2xl font-sans ">
					{role}
				</h3>
				<span className="text-gray-600 text-sm md:text-md dark:text-gray-300">
					{description}
				</span>
			</div>
			<div className="flex flex-row items-center justify-between mt-6">
				<div className="flex flex-row gap-2 ">
					<div className="flex gap-2 items-center ">
						<Clock
							className="w-5 h-5 text-gray-400"
							strokeWidth={2.5}
						/>
						<span className="text-black font-medium text-sm dark:text-gray-200">
							{jobType}
						</span>
					</div>
					<div className="flex gap-2 items-center ">
						<MapPin
							className="w-5 h-5 text-gray-400"
							strokeWidth={2.5}
						/>
						<span className="text-black font-medium text-sm dark:text-gray-200">
							{workingMode}
						</span>
					</div>
					<div className="flex gap-2 items-center ">
						<CircleDollarSign
							className="w-5 h-5 text-gray-400"
							strokeWidth={2.5}
						/>
						<span className="text-black font-medium text-sm dark:text-gray-200">
							{expectedCTC}
						</span>
					</div>
				</div>
				<div>
					<button className="text-sm  px-2 py-0.5 rounded-lg text-violet-600 font-medium flex gap-1 items-center cursor-pointer transition-color duration-300 ease-in-out dark:bg-none dark:hover:bg-none dark:text-white">
						<span>View Job</span>
						<ArrowRight className="w-4 h-4 " />
					</button>
				</div>
			</div>
		</div>
	);
};
