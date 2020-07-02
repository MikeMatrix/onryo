import React from 'react'
import EnmityListEntry from '../EnmityListEntry/EnmityListEntry'
import './EnmityList.css'

const EnmityList = ({entries}) => {
    return (
        <div className="enmity-list">
            {entries.map(entry => <EnmityListEntry key={entry.ID} entry={entry}/>)}
        </div>
    )
}

export default EnmityList
