/**
 * Zipkin-ui BrowserContainer
 *
 * @Author : Mayank Sindwani
 * @Date   : 2017-12-07
 *
 * Description : Main application container.
 **/

import Header from '../components/common/Header.jsx';
import Sidebar from '../components/common/Sidebar.jsx';
import Browser from '../components/browser/Browser.jsx'
import React from 'react';

const BrowserContainer = () => (
    <div className="zk-ui-container">
        <Sidebar />
        <div className="zk-ui-content">
            <Header />
            <Browser />
        </div>
    </div>
);

export default BrowserContainer;