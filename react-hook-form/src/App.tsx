import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import {z} from 'zod';


const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

type FormField = z.infer<typeof SignUpSchema>;


function App() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormField>({
    resolver: zodResolver(SignUpSchema)
  });

	const onSubmit: SubmitHandler<FormField> = async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			throw new Error();
			console.log(data);
		} catch (error) {
			setError("root", {
				message: "This email is already taken",
			});
		}
	};
	return (
		<main className="min-h-screen flex items-center  justify-center">
			<div className="flex items-center justify-center">
				<form
					action=""
					className="w-80 md:w-xl border border-gray-200 shadow-md p-4 rounded-xl flex items-center flex-col gap-2"
					onSubmit={handleSubmit(onSubmit)}
				>
					<h1 className="md:text-2xl font-bold">
						Create your account
					</h1>
					<div className="flex flex-col gap-1 w-full">
						<label
							htmlFor="email"
							className="text-md font-semibold"
						>
							Email
						</label>
						<input
							id="email"
							type="text"
							{...register("email", {
								required: "Email is required",
								validate: (value) => {
									if (!value.includes("@")) {
										return "Email must contain @";
									}
									return true;
								},
							})}
							placeholder="Your email"
							className="outline-none border border-gray-300 rounded-xl px-4 py-2 text-md  focus:ring-3 focus:ring-gray-100 "
						/>
						{errors.email && (
							<p className="text-red-500 text-sm">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="flex flex-col gap-1 w-full">
						<label
							htmlFor="password"
							className="text-md font-semibold"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							{...register("password", {
								required: "password is required",
								minLength: {
									value: 6,
									message:
										"Password must have  atleast 6 character",
								},
							})}
							placeholder="Your password"
							className="outline-none border border-gray-300 rounded-xl px-4 py-2 text-md focus:ring-3 focus:ring-gray-100"
						/>
						{errors.password && (
							<p className="text-red-500 text-sm">
								{errors.password.message}
							</p>
						)}
					</div>
					<div>
						{errors.root && (
							<div className="text-red-500 text-sm px-4 py-2 bg-red-400/10 rounded-lg">
								{errors.root.message}
							</div>
						)}
					</div>
					<div>
						<button
							type="submit"
							disabled={isSubmitting}
							className="bg-gray-300 px-3 py-2 rounded-xl text-sm font-medium cursor-pointer"
						>
							{isSubmitting ? "Loading..." : "Signup"}
						</button>
					</div>
				</form>
			</div>
		</main>
	);
}

export default App;
