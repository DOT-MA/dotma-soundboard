import * as React from "react";
import config from "config"

export default class SoundButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
        }
    }

    render() {
        const classes = "item col col-xl-3 col-md-12 col-sm-12 col-12 animation-prop";
        return (
            <div className={classes + (this.state.isPlaying ? " is-playing" : "")} onClick={() => {this.playSound(this.props.audioPath)}}>
                <header className="align-horizontal">
                    <h1>{this.props.index}</h1>
                </header>
                <header className="align-horizontal">
                    <p>{this.props.audioName}</p>
                </header>
                <div className="align-horizontal">
                    <div className="play align-horizontal align-vertical animation-prop">
                        <ion-icon name="volume-high"></ion-icon>
                    </div>
                </div>
            </div>
        );
    }

    playSound(path) {
        const audio = new Audio(config.soundDirectory + this.props.groupName + path);
        this.setState({isPlaying: true});
        audio.play();
        audio.onended = () => {
            this.setState({isPlaying: false});
        };
    }
}
