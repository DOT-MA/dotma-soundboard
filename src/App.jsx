import * as React from "react";
import * as ReactDOM from "react-dom";
import Navigation from "components/Navigation";
import SoundGroup from "containers/SoundGroup";
import config from "config";

class App extends React.Component {
    constructor(props) {
        super(props);
        let totalSounds = 0;
        for (const group of config.data) {
            totalSounds += group.sounds.length;
        }
        this.state = {
            title: "DOTMA SOUNDBOARD",
            soundGroups: config.data,
            totalSounds,
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
                    <div className="align-horizontal">
                        <a className="align-vertical" href="https://github.com/DOT-MA/dotma_soundboard" target="_blank"><ion-icon name="logo-github"></ion-icon>GitHub</a>
                    </div>
                    <div className="stats align-horizontal">
                        <p><span>{this.state.totalSounds}</span> High Quality Sounds Available.</p>
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
