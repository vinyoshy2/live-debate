import React from 'react';
import {
	Link
} from "react-router-dom";
import "./second-instructions.css"
import screenshot from "../../data/images/interface_screenie.png";
import candidates from "../../data/images/candidates.png";

export default class SecondInstructions extends React.Component {
    render() {
	if (this.props.mode == 1) {
            return (
                <div class="SecondInstructions">
                    <h1>Video Instructions</h1>
		    <div class="InstWrapper">
	                <ol>
		            <li>The video you are about to watch is a clip from a previous Democratic debate with discussion around healthcare policy. The following candidates will speak in the video:<br/><img src={candidates} height="150px"/> </li>
	                    <li>On the right is a screenshot of the interface you will see on the next page. Comments will auto-load every few seconds around 1 minute into the video. You may press the "Refresh comments" button to have comments load in more frequently. </li> 
	                    <li><b>Please browse the comments while watching the video.</b> </li> 
	                    <li>The video will begin to play as soon as you hit next. <b>Make sure your audio is on</b>, and that you are on a desktop computer. </li>
	                </ol>
		        <img src={screenshot} id="example"/>
		    </div>
                    <Link to="/video-comments">
                        <button class="button-second">
	                     Next
	                </button>
	            </Link>
                </div>
            );
	} else {
            return (
                <div class="SecondInstructions">
		    <h1>Video Instructions</h1>
	            <ol>
		            <li>The video you are about to watch is a clip from a previous Democratic debate with discussion around healthcare policy. The following candidates will speak in the video:<br/><img src={candidates} height="150px"/> </li>
	                <li>The video will begin to play as soon as you hit next. <b>Make sure your audio is on</b>, and that you are on a desktop computer. </li>
			<li>You will be able to proceed to the comments section once the video has completed. You do not need to read every comment word-for-word, but please spend a few minutes reading through the comments.</li>
	            </ol>
                    <Link to="/video">
                        <button class="button-second">
	                    Next
	                </button>
	            </Link>
                </div>

	    );
	}
    }
}

