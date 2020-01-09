import React, {Component} from "react";
import "./NavigationHeader.css";
import * as _ from "lodash";

class NavigationHeader extends Component {
    hpPercentFormat = new Intl.NumberFormat(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2});

    render() {
        const {target} = this.props;

        const {CurrentHP, MaxHP, Distance, EffectiveDistance} = target;

        const hp = _.toNumber(CurrentHP) || 0;
        const maxHp = _.toNumber(MaxHP) || 0;
        const HPPercent = this.hpPercentFormat.format((hp / maxHp) || 0) * 100;

        return (
            <nav className="navHeader">
                <div className="description">
                    <div className="name">
                        <i className="icon material-icons">gps_fixed</i>{_.defaultTo(this.props.target.Name, '--')}
                    </div>
                </div>
                <div className="details">
                    <div className="hp">
                        {_.defaultTo(CurrentHP, '--')} / {_.defaultTo(MaxHP, '--')} ( {_.defaultTo(HPPercent, '--')}% )
                    </div>
                    <div className="distance">
                        {_.defaultTo(Distance, '-- ')}m
                        ( {_.defaultTo(EffectiveDistance, '-- ')}m )
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationHeader;
