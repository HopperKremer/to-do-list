import React from 'react';
import { Link } from "react-router-dom";
import './nav.css'

class Nav extends React.Component{

    
    render(){
       
        return(
            <nav>     
                 <ul>
                    <Link  to='/'>
                        <li>
                            Home
                        </li>
                    </Link>
                    
                    <Link  to='/list'>
                        <li>
                            List
                        </li>
                    </Link>   
                </ul>
            </nav>
        )
    }
}

export default Nav