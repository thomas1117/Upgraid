var React = require('react');
var PostListApp = require('../profilePage/post/PostListApp.jsx');
var UserList = require('./userList/userList.jsx');
var Nav = require('../nav/nav.jsx');

var GroupApp = React.createClass({
	render:function() {
		return(<div>
				<Nav router={this.props.router} username={this.props.username}/>
				<UserList users={this.props.users} router={this.props.router}/>
				<PostListApp posts={this.props.posts}/>
				
			</div>)
	}
});

module.exports = GroupApp;

//<PusherChat groupId = {this.props.groupId} channel={this.props.channel} chatInit={this.props.chatInit} chatList={this.props.chatList}/>