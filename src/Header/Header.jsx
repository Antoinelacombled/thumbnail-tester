import React from "react";
import './header.scss';
import logoYouTube from '../../img/Youtube-Logo-White-PNG.png';
import searchIcon from '../../img/your_search_icon.png';
import profileImage from '../../img/bob.jpg'

const Header = () => {
    return (
        <header>
            <img src={logoYouTube} alt='logo' style={{ width: '100px', height: '63px' }} />
            <div className="search-container">
                <input className="rounded-input" placeholder="Rechercher" />
                <img className="search-icon" src={searchIcon} alt="search-icon" />
            </div>
            <div>mic</div>
            <div>import video</div>
            <div>cloche</div>
            <div className="profile-image-container">
                <img className="profile-image" src={profileImage} alt="profile" />
            </div>
        </header>
    )
};

export default Header;
