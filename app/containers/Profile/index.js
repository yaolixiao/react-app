import React,{Component} from 'react';
import {UserInfo, UserCode, Notes} from '../../components';
import { mixin } from 'core-decorators';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import getGithubInfo from '../../utils/helper.js';

@mixin(ReactFireMixin)
class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                username: 'yaolixiao'
            },
            notes: ['1111'],
            codes: ['a']
        }
    }

    componentDidMount() {
        //为了读写数据，创建firebase的数据库的引用
        //this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
        //调用child来往引用地址后面追加请求，获取数据
        //var childRef = this.ref.child(this.props.params.username);
        //将获取的数据转换成数组，赋值给this.state.notes
        //this.bindAsArray(childRef, 'notes');

        getGithubInfo(this.props.params.username)
            .then((data)=> {
                console.log(data)
                this.setState({
                    codes: data.codes,
                    userInfo: data.userInfos
                })
            })
    }

    componentWillUnMount() {
        //this.unbind('notes');
    }

    render() {
        return (
            <div className="col-sm-12">
                <div className="col-sm-4">
                    <UserInfo username={this.props.params.username} userInfo={this.state.userInfo}/>
                </div>
                <div className="col-sm-4">
                    <UserCode username={this.props.params.username} codes={this.state.codes}/>
                </div>
                <div className="col-sm-4">
                    <Notes username={this.props.params.username} notes={this.state.notes}/>
                </div>
            </div>
        )
    }
}

export default Profile;