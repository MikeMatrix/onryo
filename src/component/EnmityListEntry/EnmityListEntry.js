import React, {Component} from "react";
import "./EnmityListEntry.css";
import Job from "../../helper/Job";

class EnmityListEntry extends Component {
    enmityFormat = new Intl.NumberFormat()

    render() {
        const role = Job.toRoleName(this.props.entry);
        const job = Job.toJobName(this.props.entry);

        return (
            <div className={"entry"}>
                <div className={"bar job-" + job}/>
                <div className={"gauge role-" + role}
                     style={{width: this.props.entry.HateRate + "%"}}/>
                <div className="name">
                    {this.props.entry.isMe ? 'YOU' : this.props.entry.Name}
                    </div>
                <div className="enmity-value">
                    {this.enmityFormat.format(this.props.entry.Enmity || 0)}</div>
            </div>
        );
    }
}

export default EnmityListEntry;
