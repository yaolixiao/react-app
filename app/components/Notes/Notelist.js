import React, {Component} from 'react';

export default class Notelist extends Component {
    render() {
        let notes = this.props.notes.map((note, index)=> {
            return <li className="list-group-item" key="index">{}</li>
        })
        return (
            <ul className="list-group">
                {notes}
            </ul>
        )
    }
}