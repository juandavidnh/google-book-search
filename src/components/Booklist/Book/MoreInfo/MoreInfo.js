import React from 'react';
import './MoreInfo.css';

class MoreInfo extends React.Component{
    render(){
        return(
            <div className="moreinfo_button">
                <p><a href={this.props.link} target="_blank">More Info</a></p>
            </div>
        )
    }
}

export default MoreInfo;