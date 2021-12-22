import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getIpAddressInformation} from "./actions/ipActions";

const mapStoreToProps = (store) => {
    return {
        addressInformation: store.ip.ipResponse,
        loading: store.ip.fetchingAddress
    }
}

class App extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getIpAddressInformation());
    }

    render() {
        console.log("APP PROPS => ", this.props);
        return (
            <div className="App">
                <h2>Jestem w App</h2>
            </div>
        );
    }
}

export default compose(
    connect(mapStoreToProps)
)(App);
