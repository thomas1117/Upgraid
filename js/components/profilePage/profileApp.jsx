var React = require('react');
var Nav = require('../nav/nav.jsx');
var Greeting =require('./greeting.jsx');
var GoalListApp = require('./goalList/goalListApp.jsx');
var Friends = require('./friends/friends.jsx');
var Group = require('./groups/groups.jsx');
var AvatarRankXp = require('./avatarRankXp/avatarRankXp.jsx');
var FriendRequest = require('./friends/friendRequest.jsx');

// var PostListApp = require('./post/postListApp.jsx');

var ProfileApp = React.createClass({
	render: function() {
		
		return(<div>
				<FriendRequest userID={this.props.uid} />
				<Nav router={this.props.router} username={this.props.username}/>
				<AvatarRankXp rank={this.props.rank} exp={this.props.exp}/>
				<Greeting name={this.props.name}/>
				<GoalListApp goals={this.props.goals} router={this.props.router}/>
				<Friends fromFriends={this.props.fromFriends} toFriends={this.props.toFriends} router={this.props.router}/>
				<Group groups={this.props.groups} router={this.props.router}/>
				</div>)
	}
})

module.exports = ProfileApp;
