import React from "react";
import './video.scss';

const Video = () => {
    return (

        <div className="video-container">
            <div className="video-info">
                <div className="video-thumbnail">
                    <div className="video-duration">12:34</div>
                </div>

                <div className="container-info">
                    <div>
                        <div className="profile-pic"></div>
                    </div>
                    <div>
                        <div className="video-title">I met neymar and this is cool</div>
                        <div className="channel-name">iShowSpeed</div>
                        <div className="video-views-time">
                            1,1 M de vues - il y a 4 heures
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-info">
                <div className="video-thumbnail">
                    <div className="video-duration">12:34</div>
                </div>

                <div className="container-info">
                    <div>
                        <div className="profile-pic"></div>
                    </div>
                    <div>
                        <div className="video-title">I met neymar and this is cool</div>
                        <div className="channel-name">iShowSpeed</div>
                        <div className="video-views-time">
                            1,1 M de vues - il y a 4 heures
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
    );
};

export default Video;
