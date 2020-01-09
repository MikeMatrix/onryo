import React, {Component} from "react";
import "./App.css";
import NavigationHeader from "./component/NavigationHeader/NavigationHeader";
import EnmityList from "./component/EnmityList/EnmityList";
import * as _ from "lodash/util";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            target: {},
            entries: {},
            isLocked: false
        };

        this.updateData = this.updateData.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    render() {
        return (
            <div className={"app " + (this.state.isLocked ? 'hide-resize' : '')}>
                <NavigationHeader target={this.state.target}/>
                <EnmityList entries={this.state.entries}/>
            </div>
        );
    }

    componentDidMount() {
        window.addOverlayListener('EnmityTargetData', this.updateData);
        window.addOverlayListener('onOverlayStateUpdate', this.updateState);
        window.startOverlayEvents();
    }

    componentWillUnmount() {
        window.removeOverlayListener('EnmityTargetData', this.updateData);
        window.removeOverlayListener('onOverlayStateUpdate', this.updateState);
    }

    updateData(enmity) {
        console.log(enmity)
        if (enmity.Entries === null) {
            enmity.Entries = [];
        }

        this.setState({
            target: _.defaultTo(enmity.Target, {}),
            entries: _.defaultTo(enmity.Entries, {})
        });
    }

    updateState(event) {
        this.setState({
            isLocked: _.defaultTo(event.detail.isLocked, false)
        });
    }
}

export default App;
