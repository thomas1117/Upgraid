var React = require('react');

var GroupsBtn = React.createClass({
	getInitialState: function(){
		return {
			themeName: null
		}
	},
	componentWillMount: function(){
		switch(this.props.theme){
			case 1:
				this.setState({themeName: 'Skills'});
				break;
			case 2:
				this.setState({themeName: 'Habits'});
				break;
			case 3:
				this.setState({themeName: 'Health'});
				break;

		}
	},
	_GroupsNav: function(e) {

		e.preventDefault();

		this.props.router.navigate('group/'+ this.props.id , {trigger:true})
	},
	render:function(){

		return(<span>{(this.props.completed ? null :<button className="group" onClick={this._GroupsNav}><span className="groupName">Group:</span>{this.props.title}</button>)}</span>)
	}
});

module.exports = GroupsBtn;
