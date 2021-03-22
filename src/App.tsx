import Board from "./components/Board/Board";

const App = () => {
	return (
		<div
			style={{ background: "#0079bf", maxWidth: "1440px" }}
			className="w-screen relative pt-4 max-h-full h-screen"
		>
			<div className="w-11/12 mx-auto relative z-50">
				<h1 className="text-2xl md:text-4xl text-blue-300 mb-6 font-bold text-center ">
					Trello Clone
				</h1>
				<div className="flex lg:justify-between justify-center flex-wrap lg:flex-nowrap">
					<Board title="Backlog" />
					<Board title="TO DOs" />
					<Board title="DOING" />
					<Board title="DONE" />
				</div>
			</div>
		</div>
	);
};

export default App;
