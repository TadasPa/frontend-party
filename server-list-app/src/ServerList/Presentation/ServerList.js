import React, { Component } from "react";
import "./ServerList.scss";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

class ServerListPresentation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.retrieveServerList();
    }

    render() {
        const serverLines = this.props.serverList
        .sort((serverItemA, serverItemB)=>{ 
            if (serverItemA.distance === serverItemB.distance) {
                return serverItemA.name > serverItemB.name ? 1 : serverItemA.name === serverItemB.name ? 0 : -1
            } else {
                return serverItemA.distance - serverItemB.distance }
            })
        .map((serverItem, idx) => {
            return (
                <div key={idx} className="server-list-row">
                    <div className="server-name">{serverItem.name}</div>
                    <div className="server-distance">{serverItem.distance} km</div>
                </div>
            );
        });

        return (
            <div className="server-list-container">
                <div className="server-list-row server-list-header">
                    <div className="server-name">SERVER</div>
                    <div className="server-distance">DISTANCE</div>
                </div>
                {serverLines}
                <LoadingSpinner isLoading={this.props.isLoading} />
            </div>
        );
    }

}

export default ServerListPresentation;