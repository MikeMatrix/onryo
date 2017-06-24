import React, {Component} from "react";
import "./EnmityListEntry.css";
import Job from "./Job";

class EnmityListEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            role: Job.toRoleName(this.props.entry),
            job: Job.toJobName(this.props.entry)
        }
    }

    render() {
        return (
            <div className={"entry"}>
                <div className={"bar job-" + this.state.job}/>
                <div className={"gauge role-" + this.state.role}
                     style={{width: this.props.entry.HateRate + "%"}}/>
                <div className="name">
                    {this.props.entry.isMe ? 'YOU' : this.props.entry.Name}
                    </div>
                <div className="enmity-value">
                    {this.props.entry.EnmityString}</div>
            </div>
        );
    }
}

export default EnmityListEntry;
