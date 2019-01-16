import * as React from "react";
import Scrollchor from "react-scrollchor";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="animation-prop">
                <header className="align-vertical">
                    <h1>{this.props.title}</h1>
                </header>
                <ul>
                    {
                        this.props.headers.map(element => {
                            return (
                                <Scrollchor key={element.name} to={"#" + element.name}>
                                    <li className="align-vertical align-horizontal animation-prop">
                                        <p>{element.name}</p>
                                    </li>
                                </Scrollchor>
                            )
                        })
                    }
                </ul>
            </nav>
        );
    }
}