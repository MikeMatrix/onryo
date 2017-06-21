import React, {Component} from "react";
import "./App.scss";
import NavigationHeader from "./NavigationHeader";
import EnmityList from "./EnmityList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: {},
            entries: {}
        };
    }

    render() {
        return (
            <div><NavigationHeader target={this.state.target}/><EnmityList entries={this.state.entries}/></div>
        );
    }

    componentDidMount() {
        document.addEventListener('onOverlayDataUpdate', this.updateData);
    }

    componentWillUnmount() {
        document.removeEventListener('onOverlayDataUpdate', this.updateData);
    }

    updateData(data) {
        this.setState({
            target: data.detail.Enmity.Target,
            entries: data.detail.Enmity.Entries
        });
    }
}

export default App;
