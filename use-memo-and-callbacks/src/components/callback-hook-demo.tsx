import { useState, useCallback } from "react";
import Search from "./Search";

const allUsers = ["bob", "john", "rehan", "farhan", "emad", "arsalan", "arsla"];
export const CallBackHookDemo = () => {
	const [users, setUsers] = useState(allUsers);

	const handleSearch = useCallback((text: string) => {
		console.log('first user: ', users[0]);
		if (!text) {
			setUsers(allUsers);
			return;
		}
		const searchedUsers = users.filter((user) => user.includes(text));
		setUsers(searchedUsers);
	}, [users]);

	return (
		<div className="min-h-screen p-20 ">
			<div className="flex items-center gap-4 ">
				<button
					className="px-4 py-2 bg-violet-500 rounded-xl text-white cursor-pointer"
					// onClick={() => setSearchItem(searchItem)}
				>
					Shuffle
				</button>
				<Search onChange={handleSearch} />
			</div>
			<div className="flex flex-col gap-2  mt-8 ">
				{users.map((user, id) => {
					return (
						<div
						key={id}
							className="bg-violet-500/10 px-4 py-2 rounded-xl w-[55%] "
						>
							{user}
						</div>
					);
				})}
			</div>
		</div>
	);
};
