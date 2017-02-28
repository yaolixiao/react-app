import React, {Component} from 'react';
import NoteList from './Notelist.js';

class Notes extends Component{

    /*static propTypes = {
        username:PropTypes.string.isRequired,
        notes:PropTypes.array.isRequired
    }*/

    render(){
        return (
            <div>
                <h3>对{this.props.username}的评论：</h3>
                <NoteList notes={this.props.notes} />
            </div>

        )
    }
}

export default Notes;