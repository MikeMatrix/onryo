import React, {Component} from "react";
import "./EnmityList.css";
import * as _ from "lodash/collection";
import EnmityListEntry from "./EnmityListEntry";

class EnmityList extends Component {
    render() {
        let list = _.map(this.props.entries, (entry) => <EnmityListEntry key={entry.ID} entry={entry}/>);

        return (
            <div className="enmity-list">{list}</div>
        );
    }
}

export default EnmityList;
