import React, {Component} from "react";
import "./NavigationHeader.css";
import * as _ from "lodash/util";

class NavigationHeader extends Component {
    render() {
        return (
            <nav className="navHeader">
                <div className="row">
                    <div className="name col-xs"><i className="icon material-icons">gps_fixed</i>{_.defaultTo(this.props.target.Name, '--')}</div>
                </div>
                <div className="row between-xs">
                    <div className="hp col-xs">{_.defaultTo(this.props.target.CurrentHP, '--')} / {_.defaultTo(this.props.target.MaxHP, '--')} ( {_.defaultTo(this.props.target.HPPercent, '--')}% )
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
