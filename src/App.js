import React, { useEffect, useState } from 'react'
import './App.css'

const test = {
	width: '650px',
	height: '500px',
	position: 'relative',
	left: '-105px',
	top: '-50px',
	opacity: 0.8,
}

function App() {
	useEffect(() => {
		setTimeout(() => {
			window.google.charts.load('current', {
				packages: ['corechart'],
			})
			window.google.charts.setOnLoadCallback(drawChart)
		}, 1000)
	})

	const [category, setCategory] = useState('')
	const [month, setMonth] = useState('')
	const [value, setValue] = useState(0)
	const [dataTable, setDataTable] = useState([
		['Transport', '2021-01', 100],
		['Other', '2021-01', 359],
		['University', '2021-02', 500],
		['Financial', '2021-04', 600],
	])
	const [expenseData, setExpenseData] = useState([
		['Task', 'Hours per Day'],
		['Transport', 100],
		['Other', 359],
		['University', 500],
		['Financial', 600],
	])

	function handleClick(e) {
		e.preventDefault()
		if (expenseData.map((item) => item[0]).indexOf(category) === -1) {
			setExpenseData((prevState) => [
				...prevState,
				[category, parseInt(value)],
			])
		} else {
			expenseData.splice(
				expenseData.map((item) => item[0]).indexOf(category),
				1
			)

			setExpenseData((prevState) => [
				...prevState,
				[category, parseInt(value)],
			])
		}

		setDataTable((prevState) => [
			...prevState,
			[category, month, parseInt(value)],
		])
	}

	function drawChart() {
		var data = window.google.visualization.arrayToDataTable(expenseData)

		var options = {
			pieHole: 0.4,
		}

		var chart = new window.google.visualization.PieChart(
			document.getElementById('donutchart')
		)
		chart.draw(data, options)
	}

	return (
		<div className="App">
			<div className="expense-tracker-container">
				<div id="donutchart" style={test}></div>
				<div className="data-container">
					<div className="table-container">
						<table>
							<thead>
								<tr>
									<th>Category</th>
									<th>Date</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								{dataTable.map((item, index) => {
									return (
										<tr key={index}>
											<td>{item[0]}</td>
											<td>{item[1]}</td>
											<td>{item[2]} USD</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>

					<form onSubmit={(e) => handleClick(e)}>
						<input
							type="text"
							onChange={(e) => setCategory(e.target.value)}
							placeholder="Category"
							required
						/>

						<input
							type="number"
							min="0"
							onChange={(e) => setValue(e.target.value)}
							placeholder="Value"
							required
						/>

						<input
							type="month"
							onChange={(e) => setMonth(e.target.value)}
							required
						/>

						<button type="submit">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="button-icon"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</button>
					</form>
				</div>
			</div>
			<svg
				id="iPhone_12_Pro"
				data-name="iPhone 12 Pro"
				xmlns="http://www.w3.org/2000/svg"
				height="100vh"
				viewBox="0 0 1452 2942"
			>
				<defs>
					<clipPath id="clip-path">
						<path
							id="Mask"
							d="M240,2942c-127.026,0-230-102.974-230-230V1180H7a5,5,0,0,1-5-5V966a5,5,0,0,1,5-5h3V900H7a5,5,0,0,1-5-5V686a5,5,0,0,1,5-5h3V580H5a5,5,0,0,1-5-5V474a5,5,0,0,1,5-5h5V230C10,102.974,112.974,0,240,0h972c127.025,0,230,102.974,230,230V756h5a5,5,0,0,1,5,5v340a5,5,0,0,1-5,5h-5V2712c0,127.026-102.974,230-230,230Z"
							fill="#363941"
						/>
					</clipPath>
				</defs>
				<g id="Device">
					<g id="Shape_Enhancement" data-name="Shape Enhancement">
						<path
							id="Mask-2"
							data-name="Mask"
							d="M240,2942c-127.026,0-230-102.974-230-230V1180H7a5,5,0,0,1-5-5V966a5,5,0,0,1,5-5h3V900H7a5,5,0,0,1-5-5V686a5,5,0,0,1,5-5h3V580H5a5,5,0,0,1-5-5V474a5,5,0,0,1,5-5h5V230C10,102.974,112.974,0,240,0h972c127.025,0,230,102.974,230,230V756h5a5,5,0,0,1,5,5v340a5,5,0,0,1-5,5h-5V2712c0,127.026-102.974,230-230,230Z"
							fill="#363941"
						/>
						<g
							id="Shape_Enhancement-2"
							data-name="Shape Enhancement"
							clipPath="url(#clip-path)"
						>
							<path
								id="Details"
								d="M286,2941v-22h21v22Zm1124-301v-20h22v20ZM0,2640v-21H22v21ZM0,316V295H23v21Zm1410-1V295h22v20ZM1123,22V0h22V22Z"
								transform="translate(10 1)"
								fill="#4e505e"
							/>
						</g>
					</g>
					<path
						id="Combined_Shape"
						data-name="Combined Shape"
						d="M206,0h976c113.771,0,206,92.229,206,206V2692c0,113.771-92.229,206-206,206H206C92.229,2898,0,2805.771,0,2692V206C0,92.229,92.229,0,206,0Z"
						transform="translate(32 22)"
						fill="#18181d"
					/>
				</g>
				<g id="Screen" transform="translate(78 71)">
					<path
						id="Mask-3"
						data-name="Mask"
						d="M0,1399.019q0-585.154,0-1170.313c0-29.285-.3-58.6,3.32-87.737,4.54-36.591,17-69.612,43.985-95.967C70.525,22.321,98.907,10.346,130.4,4.953A319.212,319.212,0,0,1,179.075.671c32.613-.549,65.218-.678,97.84-.2,12.795.183,20.7,9.05,21.233,20.193.441,9.246.682,18.524,2.634,27.749a72.376,72.376,0,0,0,63.109,56.618c9.3.928,18.579,1.331,27.895,1.331q256.134.006,512.263-.017c12.974,0,25.923-.166,38.593-3.587,31.124-8.4,51.733-35.934,53.276-68.206a174.866,174.866,0,0,1,1.431-17.9c1.356-8.946,7.694-14.763,16.635-15.782a99.468,99.468,0,0,1,10.96-.678c35.28-.1,70.582-.712,105.829,1.015,28.049,1.373,55.648,5.813,81.071,18.637,41.347,20.85,65.622,54.9,75.858,99.592,5.16,22.531,6.221,45.45,6.736,68.414.32,14.305.341,28.623.341,42.937q.044,1172.818.046,2345.631c0,27.291.058,54.6-3.324,81.745-4.569,36.587-17.039,69.625-44.01,95.959-21.637,21.121-47.93,33.109-77.243,38.913-25.24,5.006-50.863,5.933-76.5,5.971q-118.33.162-236.661.079-321.038.006-642.08.013c-26.3,0-52.6-.254-78.691-4.02-40.611-5.867-75.8-21.953-101.6-55.153-15.866-20.409-24.824-43.806-29.384-69.021C.093,2641.919.106,2612.6.093,2583.317q-.125-240.156-.05-480.312-.006-351.989,0-703.986Z"
						fill="#383c47"
						opacity="0.436"
					/>
				</g>
				<g
					id="Speaker_Camera"
					data-name="Speaker + Camera"
					transform="translate(653 73)"
				>
					<circle
						id="Oval"
						cx="27"
						cy="27"
						r="27"
						transform="translate(193)"
						fill="#2d2e35"
					/>
					<circle
						id="Oval-2"
						data-name="Oval"
						cx="14"
						cy="14"
						r="14"
						transform="translate(206 13)"
						fill="rgba(33,34,39,0.23)"
					/>
					<rect
						id="Rectangle"
						width="151"
						height="24"
						rx="12"
						transform="translate(0 16)"
						fill="#2d2e35"
					/>
				</g>
			</svg>
		</div>
	)
}

export default App
