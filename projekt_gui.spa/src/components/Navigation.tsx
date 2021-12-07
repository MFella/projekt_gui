import { Menu } from 'evergreen-ui';
import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import { default as Btn } from '../wrappers/Btn';
import { default as BtnLink} from '../wrappers/BtnLink';
import Home from './Home';
import Panel from './Panel';
import Auth from './Auth';

export class Navigation extends React.Component<{}, {}> {
    render() {
        const css = `
        .Navbar {
            display: flex;
            flex-direction: row; 
            align-items: center;
            justify-content: center;
            height: 3rem;
            border-bottom: 1px solid rgba(0,0,0,.2);
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }

        .menu-group-container {
            max-height: 3rem;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }

        Menu.Group {
            width: 100%;
        }

        .root-container {
            padding-top: 2rem;
        }
        `;

    return (
        <Router>
            <style>
                {css}
            </style>
        <div className='Navbar'>
            <div className="menu-group-container">
                <BtnLink data={{label: 'Home', size: 'small', apperance: 'minimal', link: '/'}}/>
                <BtnLink data={{label: 'Panel', size: 'medium', apperance: 'default', link: '/panel'}}/>
                <BtnLink data={{label: 'Auth', size: 'large', apperance: 'primary', link: '/auth'}}/>
            </div>
        </div>
        <div className="root-container">
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Home />
                </Route>
                <Route path="/panel" element={<Panel/>}>
                    <Panel />
                </Route>
                <Route path="/auth" element={<Auth/>}>
                    <Auth />
                </Route>
            </Routes>
        </div>
      </Router>
    )
    }
}
export default Navigation;