import React, {Component} from 'react';

class UserCode extends Component{

  /*  static propTypes={
        codes:PropTypes.array.isRequired
    }*/

    render(){

        let codes = this.props.codes.map((code,index)=>{
            return (
                <li className="list-group-item" key={index}>
                    {code.html_url && <a href={code.html_url}>{code.name}</a>}
                    {code.description && <p>{code.description}</p>}
                </li>
            )
        })

        return (
            <div>
                <h3>{this.props.username} 的代码仓库：</h3>
                <ul className="list-group">
                    {codes}
                </ul>
            </div>
        )
    }
}

export default UserCode;