import React, { useState, useEffect } from "react";

const Home = () => {

	const [seconds, setSeconds] = useState(50)
	const [minutes, setMinutes] = useState(59)
	const [hours, setHours] = useState(0)

	const unitSeconds = seconds % 10;
	const tenSeconds = Math.floor(seconds / 10) % 10;
	const unitMinutes = minutes % 10;
	const tenMinutes = Math.floor(minutes / 10) % 10;
	const unitHours = hours % 10;
	const tenHours = Math.floor(hours / 10) % 10;

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prev => prev + 1)
		}, 1000)
	}, [])

	useEffect(() => {
		if (seconds === 60) {
			setMinutes(prev => prev + 1)
			setSeconds(0)
		}
		if (minutes === 60) {
			setHours(prev => prev + 1)
			setMinutes(0)
		}
	}, [seconds])





	return (

		<div className="container vh-100 d-flex justify-content-center align-items-center">
			<div className="row">
				<div className="col-auto">
					<div className="card bg-dark text-white text-center border-light shadow-lg p-2 mb-1">
						<div className="card-body fs-3 fw-bold">
							<p><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
								<path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
								<path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
							</svg></p>
						</div>
					</div>
				</div>

				<div className="col-auto">
					<div className="card bg-dark text-white text-center border-light shadow-lg p-3 mb-3">
						<div className="card-body fs-1 fw-bold">
							{tenHours}
						</div>
					</div>
				</div>
				<div className="col-auto">

					<div className="card bg-dark text-white text-center border-light shadow-lg p-3 mb-3">
						<div className="card-body fs-1 fw-bold">
							{unitHours}
						</div>
					</div>
				</div>
				<div className="col-auto">

					<div className="card bg-dark text-white text-center border-light shadow-lg p-3 mb-3">
						<div className="card-body fs-1 fw-bold">
							{tenMinutes}
						</div>
					</div>
				</div>
				<div className="col-auto">

					<div className="card bg-dark text-white text-center border-light shadow-lg p-3 mb-3">
						<div className="card-body fs-1 fw-bold">
							{unitMinutes}
						</div>
					</div>
				</div>
				<div className="col-auto">
					<div className="card bg-dark text-white text-center border-light shadow-lg p-3 mb-3">
						<div className="card-body fs-1 fw-bold">
							{tenSeconds}
						</div>
					</div>
				</div>
				<div className="col-auto">
					<div className="card bg-dark text-white text-center border-light shadow-lg p-3 mb-3">
						<div className="card-body fs-1 fw-bold">
							{unitSeconds}
						</div>
					</div>
				</div>



			</div>

		</div>
	);
};

export default Home;
