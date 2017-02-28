import React, {Component}from 'react';
import { browserHistory } from 'react-router';

class SearchGithub extends Component {

    getRef(ref){
        //console.log(ref);
        this.usernameRef=ref;
    }

    handleSubmit(event){
        const username = this.usernameRef.value;
        this.usernameRef.value='';

        let path = `/profile/${username}`;
        browserHistory.push(path);
    }

    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={()=>this.handleSubmit()}>
                    <div className="form-group col-sm-7">
                        <input className="form-control" type="text" ref={(ref)=>this.getRef(ref)} placeholder="GitHub 用户名"/>
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-primary">搜GitHub</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchGithub;