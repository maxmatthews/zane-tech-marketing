import React from "react";
import "./App.scss";
import slackTunesLogo from "./headphones-solid4.png";

const SlackTunesInstalled = () => {
	return (
		<div>
			<img
				src={slackTunesLogo}
				className={"logo slacktunes"}
				alt={"SlackTunes Logo"}
			/>
			<p>Thanks for installing SlackTunes!</p>
		</div>
	);
};

export default SlackTunesInstalled;
