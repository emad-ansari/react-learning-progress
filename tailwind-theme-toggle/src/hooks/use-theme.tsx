import { useContext, createContext, useState, useEffect } from "react";

type ThemeMode = "light" | "dark";

export interface ThemeContextType {
	theme: ThemeMode;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<ThemeMode>("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("themeMode");
		if (savedTheme === "light" || savedTheme === "dark") {
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("themeMode", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("theme context must be used within theme provider");
	}
	return context;
};
