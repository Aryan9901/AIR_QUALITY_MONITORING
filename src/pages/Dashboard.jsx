/* eslint-disable react/prop-types */
import AdminSidebar from "../components/AdminSidebar";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { IoIosPartlySunny, IoIosSettings } from "react-icons/io";
import Bar from "../components/Bar";
import { useState } from "react";
import { FaCloud, FaLocationArrow, FaSun } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { MdWaterDrop } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
	return (
		<div className="admin-container">
			<AdminSidebar />
			<main className="dashboard">
				<Bar />
				{/* <section className="widget-container">
					<WidgetItem percent={2.8} value={340000} heading="Income" color="rgba(0,115,255)" />
					<WidgetItem percent={-2.5} value={400} heading="Paid" color="rgba(0,198,202)" />
					<WidgetItem percent={4} value={23000} heading="Invoices" color="rgba(0,115,255)" />
				</section> */}
				<section className="mapContainer">
					<div className="HomeCard">
						<div className="header">
							<h3>
								<FaLocationArrow />
								Home
							</h3>
							<button>Moderate</button>
						</div>
						<div className="maindata">
							<div className="graph">
								<CircularProgressbar value={80} text={`${80}%`} />
								<div className="g1">
									<IoIosPartlySunny /> 22 C
								</div>
								<div className="g2">
									<MdWaterDrop /> 66 C
								</div>
							</div>
							<div className="data">
								<AqiLevel value={25} unit="ug/m^2" parameter="PM 2.5" color={"yellow"} />
								<AqiLevel value={55} unit="ug/m^2" parameter="PM 2.5" color={"red"} />
								<AqiLevel value={86} unit="ug/m^2" parameter="PM 2.5" color={"green"} />
								<AqiLevel value={43} unit="ug/m^2" parameter="PM 2.5" color={"salmon"} />
								<AqiLevel value={69} unit="ug/m^2" parameter="PM 2.5" color={"cyan"} />
							</div>
						</div>
					</div>
					<section className="cityCard">
						<div className="header">
							<h3>
								<FaLocationArrow />
								Home
							</h3>
							<button>Moderate</button>
						</div>
						<p>AQI trend in last 24 hrs</p>
						<div className="maindata">
							<div className="graph">
								<CircularProgressbar value={80} text={`${80}%`} />
							</div>
							<div className="data">
								<AqiLevel value={25} unit="ug/m^2" parameter="PM 2.5" color={"yellow"} />
								<AqiLevel value={55} unit="ug/m^2" parameter="PM 2.5" color={"red"} />
								<AqiLevel value={86} unit="ug/m^2" parameter="PM 2.5" color={"green"} />
								<AqiLevel value={43} unit="ug/m^2" parameter="PM 2.5" color={"salmon"} />
								<AqiLevel value={69} unit="ug/m^2" parameter="PM 2.5" color={"cyan"} />
							</div>
						</div>
					</section>
				</section>
			</main>
		</div>
	);
};

export const AqiLevel = ({ value, unit, parameter, color }) => {
	return (
		<div className="aqiLevel">
			<ProgressBar bgColor={color} completed={value} className="wrapper" maxCompleted={100} customLabel=" " />
			<h3>
				{value} {unit}
			</h3>
			<p>{parameter}</p>
		</div>
	);
};

export const WidgetItem = ({ heading, value, percent }) => {
	const [selectedOption, setSelectedOption] = useState("Today");
	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value);
	};
	return (
		<article className="widget">
			<div>
				<i>
					<IoIosSettings />
				</i>
				<h4>{heading}</h4>
				<p>
					<select value={selectedOption} onChange={handleOptionChange}>
						<option value="Today">Today</option>
						<option value="LastWeek">Last Week</option>
						<option value="LastMonth">Last Month</option>
						<option value="LastYear">Last Year</option>
						<option value="All">All</option>
					</select>
				</p>
			</div>
			<h2>&#8377; {Math.abs(value)}</h2>
			{percent > 0 ? (
				<h5 className="green">
					<HiTrendingUp /> + {percent}%
				</h5>
			) : (
				<h5 className="red">
					<HiTrendingDown /> {Math.abs(percent)}%
				</h5>
			)}
		</article>
	);
};

export default Dashboard;
