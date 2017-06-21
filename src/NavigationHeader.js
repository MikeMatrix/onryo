import React, {Component} from "react";
import "./NavigationHeader.css";

class NavigationHeader extends Component {
    render() {
        return (
            <nav>
                <div className="row">
                    <div className="name col-xs"><i className="icon material-icons">gps_fixed</i>{this.props.target.Name}</div>
                </div>
                <div className="row between-xs">
                    <div className="hp col-xs">{this.props.target.CurrentHP} / {this.props.target.MaxHP} ( {this.props.target.HPPercent}% )
                    </div>
                    <div className="distance col-xs">{this.props.target.Distance}m
                        ( {this.props.target.EffectiveDistance}m )
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationHeader;
