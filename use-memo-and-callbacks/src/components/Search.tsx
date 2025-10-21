import {memo} from 'react';


interface Props {
	onChange: (text: string) => void;
}

const Search: React.FC<Props> = ({ onChange }) => {

	console.log('search component rendered!!')
	return < input
		type="text"
		placeholder="Search user..."
		className="flex px-4 border border-gray-200 rounded-xl py-2 outline-none focus:ring-3 focus:ring-gray-200/50 transition-ring ease-in-out duration-200"
		onChange={(e) => onChange(e.target.value)}
	/>;
};

export default memo(Search);