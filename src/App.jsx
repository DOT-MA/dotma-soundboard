import * as React from "react";
import * as ReactDOM from "react-dom";
import Navigation from "components/Navigation";
import SoundGroup from "containers/SoundGroup";
import config from "config";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "DOTMA SOUNDBOARD",
            soundGroups: config.data,
        }
    }
    render() {
        return (
            <div>
                <Navigation title={this.state.title} headers={this.state.soundGroups}/>
                <header>
                    <div className="align-horizontal">
                        <h1><span>DOTMA</span> SOUNDBOARD</h1>
                    </div>
                    <div className="align-horizontal">
                        <p>SOUNDS OF DOTMA</p>
                    </div>
                </header>
                <hr />
                {
                    this.state.soundGroups.map(element => {
                        return <SoundGroup groupData={element} key={element.name}/>
                    })
                }
            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(React.createElement(App), document.getElementById("app"));
});
