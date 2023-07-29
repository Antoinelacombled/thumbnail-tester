import React from 'react'
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import Video from '../Video/Video';
import './app.scss';


const App = () => {

    return (
        <div>
            <Header />
            <Categories />
            <Video />
        </div>
    );

}

export default App