import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

export const Header = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className="bg-gray-400/10  w-[85%]  md:max-w-3xl mb-8 rounded-full pl-5 pr-2 py-2 border border-gray-200 backdrop-blur-md sticky top-2 z-50 dark:border-dark-border dark:bg-dark-card ">
			<div className="flex items-center justify-between ">
				<div className="flex items-center ">
					<span className="text-black font-semibold text-lg dark:text-white">
						HireIn
					</span>
				</div>
				<div className="flex items-center gap-4 text-sm text-gray-600 ">
					<a href="/home" className="hover:text-black dark:hover:text-white dark:text-dark-foreground">
						Home
					</a>
					<a href="/about" className="hover:text-black dark:hover:text-white dark:text-dark-foreground">
						About
					</a>
					<a href="/features" className="hover:text-black dark:hover:text-white dark:text-dark-foreground">
						Features
					</a>
					<a href="/pricing" className="hover:text-black dark:hover:text-white dark:text-dark-foreground">
						Pricing
					</a>
					<a href="/contact" className="hover:text-black dark:hover:text-white dark:text-dark-foreground">
						Contact
					</a>
				</div>
				<div className="flex items-center gap-4 ">
					<button className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer" onClick = {toggleTheme}>
						{theme === "dark" ? (
							<Sun className="w-5 h-5" />
						) : (
							<Moon className="w-5 h-5" />
						)}
					</button>
					<img
						src="https://assets.leetcode.com/users/emad-ansari/avatar_1755842307.png"
						alt="profile-picture"
						className="w-10 h-10 rounded-full"
					/>
				</div>
			</div>
		</header>
	);
};
