import * as React from "react";
import SoundButton from "components/SoundButton";

export default class SoundGroup extends React.Component {
    constructor(props) {
        super(props)
        const ROW_LENGTH = 4;
        const arr = [];
        for (let i = 0; i < this.props.groupData.sounds.length; i += ROW_LENGTH) {
            arr.push(this.props.groupData.sounds.slice(i, i + ROW_LENGTH))
        }
        this.state = {
            soundData: arr,
            counter: 0,
        }
    }

    render() {
        return (
            <main id={this.props.groupData.name}>
                <section>
                    <header className="align-horizontal">
                        <h1>{this.props.groupData.name}</h1>
                    </header>
                    <div className="align-horizontal">
                        <p>{this.props.groupData.description}</p>
                    </div>
                    <section className ="container">
                    {
                        this.state.soundData.map(sounds => {
                            return (
                                <div className="row" key={sounds.toString()}>
                                {
                                    sounds.map(sound => {
                                        this.state.counter++;
                                        return (
                                            <SoundButton audioName={sound[0]} audioPath={sound[1]} groupName={this.props.groupData.folderName} index={this.state.counter} key={sound.toString()}/>
                                        )
                                    })
                                }
                                </div>
                            )
                        })
                    }
                    </section>
                </section>
            </main>
        );
    }
}