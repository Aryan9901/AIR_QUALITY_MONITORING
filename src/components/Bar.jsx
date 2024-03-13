/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";

function Bar() {
	return (
		<div className="bar">
			<div>
				<BsSearch />
				<input type="text" placeholder="Search Location City or Area" />
				<BiTargetLock style={{ color: "blue", fontSize: "2.4rem" }} />
			</div>
			<article>
				<i>
					<MdGTranslate />
				</i>
				<i>
					<FaBell />
				</i>
				<img
					src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/640px-IMG_Academy_Logo.svg.png"
					alt="user iamge"
				/>
				<button>Login</button>
			</article>
		</div>
	);
}

export default Bar;
