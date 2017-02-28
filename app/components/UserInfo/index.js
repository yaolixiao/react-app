import React, {Component} from 'react';

class UserInfo extends Component{

    /*static propTypes={
        username:PropTypes.string.isRequired,
        userInfo:PropTypes.object.isRequired
    }*/

    render(){
        let userInfo = this.props.userInfo;
        return (
            <div>
                <h3>用户信息</h3>
                <ul className="list-group">
                {userInfo.avatar_url && <li className="list-group-item"> <img src={userInfo.avatar_url} className="img-rounded img-responsive"/></li>}
                {userInfo.name && <li className="list-group-item">Name: {userInfo.name}</li>}
                {userInfo.login && <li className="list-group-item">Username: {userInfo.login}</li>}
                {userInfo.email && <li className="list-group-item">Email: {userInfo.email}</li>}
                {userInfo.location && <li className="list-group-item">Location: {userInfo.location}</li>}
                {userInfo.company && <li className="list-group-item">Company: {userInfo.company}</li>}
                {userInfo.followers && <li className="list-group-item">Followers: {userInfo.followers}</li>}
                {userInfo.following && <li className="list-group-item">Following: {userInfo.following}</li>}
                {userInfo.public_repos && <li className="list-group-item">Public Repos: {userInfo.public_repos}</li>}
                {userInfo.blog && <li className="list-group-item">Blog: <a href={userInfo.blog}> {userInfo.blog}</a></li>}
                </ul>
            </div>
        )
    }
}

export default UserInfo;