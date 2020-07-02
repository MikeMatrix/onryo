import React from 'react'
import {toJobName, toRoleName} from '../../helper/Job'
import './EnmityListEntry.css'

const enmityFormat = new Intl.NumberFormat()

const EnmityListEntry = ({entry}) => {
    const role = toRoleName(entry)
    const job = toJobName(entry)

    return (
        <div className="entry">
            <div className={'bar job-' + job}/>
            <div
                className={'gauge role-' + role}
                style={{width: `${entry?.HateRate ?? 0}%`}}
            />
            <div className="name">
                {entry?.isMe ? 'YOU' : entry?.Name}
            </div>
            <div className="enmity-value">
                {enmityFormat.format(entry?.Enmity || 0)}
            </div>
        </div>
    )
}

export default EnmityListEntry
