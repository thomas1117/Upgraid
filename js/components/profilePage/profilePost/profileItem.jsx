var React = require('react');
var ProfilePost = require('./profilePost.jsx');

var ProfileItem = React.createClass({
	
	render: function() {
		var props=this.props;
		
			return(<div id="profilePostContainer">
					{this.props.data.map(function(obj){
						return(<ProfilePost key={obj.id} addInput={props.addInput} title={obj.title} description={obj.description} datas={props.data} groupId={obj.id} user={obj.user} postId = {obj.id} comments ={obj.comment_set}/>)
					})}
					</div>
				)
		
		
	}
});

module.exports = ProfileItem;