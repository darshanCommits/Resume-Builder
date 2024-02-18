import Resume from "@components/Resume/Index";
import UserForm from "@form/UserForm";

const App = () => {
	return (
		<body className="flex ">
			<aside className="bg-[#0D1117] text-white p-4 w-72">
				<UserForm />
			</aside>
			<main className="h-full w-full">
				<Resume />
			</main>
		</body>
	);
};

export default App;
