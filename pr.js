//* ui components
const Button = () => {
	// return <button>{{}}</button>
};

// custom components
function FromGroup(props) {
	return (
		<>
			<label htmlFor="exampleInputEmail1">{props.type} address</label>
			<input
				type={props.type}
				className="form-control"
				id="exampleInputEmail1"
				aria-describedby="emailHelp"
				placeholder={props.placeholder}
			/>
			{props.smallText === "" ? null : (
				<small
					id="emailHelp"
					className="form-text text-muted">
					{props.smallText}
				</small>
			)}
		</>
	);
}

function Form() {
	return (
		<form className="w-75">
			<div className="form-group">
				<FromGroup
					type="email"
					placeholder="Enter Email"
					smallText="Enter the Email Bish!!!"
				/>
			</div>
			<div className="form-group">
				<FromGroup
					type="password"
					placeholder="Enter password"
					smallText=""
				/>
			</div>
			<div className="form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="exampleCheck1"
				/>
				<label
					className="form-check-label"
					htmlFor="exampleCheck1">
					Check me out
				</label>
			</div>
			<button
				type="submit"
				className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}

//* layout component
function Layout() {
	return <Form />;
}

//* root component
const App = () => <Layout />;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
