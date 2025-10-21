import {useState, useMemo} from 'react';

import { initialItems } from '../utils';

export const MemoHookDemo = () => {
    const [count, setCount] = useState<number>(0);
	const [items] = useState(initialItems);

	console.log("heavy computation start");
	const selectedItem = useMemo(
		() => items.find((item) => item.isSelected),
		[]
	);
	console.log("heavy computation end");
	return (
		<div className="min-h-screen flex items-center justify-start px-10">
			<div className="flex items-center gap-4 flex-col ">
				<span className="font-bold text-xl">
					Selected Items : {selectedItem?.id}
				</span>
				<button
					className="bg-violet-500 text-white px-4 py-2 rounded-lg cursor-pointer"
					onClick={() => setCount(count + 1)}
				>
					Increament
				</button>
				<span className="font-semibold text-xl ">{count}</span>
			</div>
			<div>
				<span></span>
			</div>
		</div>
	);
};
