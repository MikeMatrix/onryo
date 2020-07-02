import {defaultTo, toNumber} from 'lodash'
import React from 'react'
import './NavigationHeader.css'

const hpPercentFormat = new Intl.NumberFormat(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})

const NavigationHeader = ({target}) => {
    const hp = toNumber(target?.CurrentHP)
    const maxHp = toNumber(target?.MaxHP)

    const hpPercent = hpPercentFormat.format((((hp || 0) / (maxHp || 0)) || 0) * 100)

    return (
        <nav className="navHeader">
            <div className="description">
                <div className="name">
                    <i className="icon material-icons">gps_fixed</i>
                    {defaultTo(target?.Name, '--')}
                </div>
            </div>
            <div className="details">
                <div className="hp">
                    {defaultTo(hp, '--')} / {defaultTo(maxHp, '--')} ( {defaultTo(hpPercent, '--')}% )
                </div>
                <div className="distance">
                    {defaultTo(target?.Distance, '-- ')}m
                    ( {defaultTo(target?.EffectiveDistance, '-- ')}m )
                </div>
            </div>
        </nav>
    )
}

export default NavigationHeader
