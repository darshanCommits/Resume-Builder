import Resume from "@components/Resume/Index";

import UserForm from "@form/UserForm";
import { Allotment } from "allotment";

// <aside className="bg-[#0D1117] text-white p-4 w-72"></aside>
// <main className="h-full w-full"></main>
const App = () => {
	return (
		<body className="h-screen w-screen">
			<Allotment>
				<Allotment.Pane maxSize={250}>
					<UserForm />
				</Allotment.Pane>
				<Resume />
			</Allotment>
		</body>
	);
};

export default App;
