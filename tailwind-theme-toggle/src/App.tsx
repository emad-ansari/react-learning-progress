import { Card } from "./components/card";
import { Header } from "./components/header";
import { type CardProps } from "./components/card";

const jobsSeekers: CardProps[] = [
	{
		lable: "Lable",
		lableClassname: "bg-violet-400/10 text-violet-600 dark:bg-orange-600/10 dark:text-orange-600",
		role: "Senior Product Desginer",
		description:
			"Maecenas accumsan lacus vel facilisis. Ullamcorper sit ametrisus nullam ege",
		workingMode: "Remote",
		jobType: "Full Time",
		expectedCTC: "$100-$300K",
	},
	{
		lable: "Customer Experience",
		lableClassname: "bg-green-500/10 text-green-600",
		role: "Customer Support Expert",
		description:
			"Maecenas accumsan lacus vel facilisis. Ullamcorper sit ametrisus nullam ege",
		workingMode: "In House",
		jobType: "Part Time",
		expectedCTC: "$200-$300K",
	},
	{
		lable: "Engineering",
		lableClassname: "bg-yellow-500/10 text-yellow-600",
		role: "Customer Support Expert",
		description:
			"Maecenas accumsan lacus vel facilisis. Ullamcorper sit ametrisus nullam ege",
		workingMode: "Remote",
		jobType: "Full Time",
		expectedCTC: "$50-$75K",
	},
	{
		lable: "Engineering",
		lableClassname: "bg-yellow-500/10 text-yellow-600",
		role: "Customer Support Expert",
		description:
			"Maecenas accumsan lacus vel facilisis. Ullamcorper sit ametrisus nullam ege",
		workingMode: "Remote",
		jobType: "Full Time",
		expectedCTC: "$50-$75K",
	},
	{
		lable: "Engineering",
		lableClassname: "bg-yellow-500/10 text-yellow-600",
		role: "Customer Support Expert",
		description:
			"Maecenas accumsan lacus vel facilisis. Ullamcorper sit ametrisus nullam ege",
		workingMode: "Remote",
		jobType: "Full Time",
		expectedCTC: "$50-$75K",
	},
];

function App() {
	return (
		<main className="min-h-screen  flex flex-col items-center justify-center bg-white dark:bg-dark-background">
			<Header />
			<div className="flex flex-col gap-5 items-center w-[90%] md:w-3xl overflow-y-scroll no-scrollbar py-5">
				{jobsSeekers.map((seeker ,i) => (
					<Card
						key = {i}
						lable={seeker.lable}
						lableClassname={seeker.lableClassname}
						role={seeker.role}
						description={seeker.description}
						workingMode={seeker.workingMode}
						expectedCTC={seeker.expectedCTC}
						jobType={seeker.jobType}
					/>
				))}
			</div>
		</main>
	);
}

export default App;
