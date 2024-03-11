/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";

function Bar() {
	return (
		<div className="bar">
			<div>
				<BsSearch />
				<input type="text" placeholder="Search Owners..." />
			</div>
			<article>
				{/* <i>
					<IoMdMail />
				</i> */}
				<i>
					<IoIosSettings />
				</i>
				<i>
					<FaBell />
				</i>
				<img
					src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/640px-IMG_Academy_Logo.svg.png"
					alt="user iamge"
				/>
				<div>
					<h5>Marvin</h5>
					<p>sales</p>
				</div>
			</article>
		</div>
	);
}

export default Bar;
