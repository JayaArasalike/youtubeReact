import React, { Component } from 'react';
//const Component = React.Component;

//Render function must return some JSX. Whenver some text on serach field call 
//onInputChange(), then pass the event handler to the element
//event object describes the context about the event occured
//onChange is react property

//So, constructor gets called whenever new instance of SearchBar is creatd in 
//in index.js. Constructor function is reserved for initializing state and variables

//We can call parent class(Component) methods, by calling super()

//Whenever we use state, we initilaize it by creating a new object and assigning 
//it to this.state
//The object we pass contains properties(property term) we want to record on the state
//Whenver the user updates the search i/p, term is the property we want to update
//or record the change on

//As user starts typing in the serch box, we want to update the this.state.term
//to the vlaue of user input

//Whenever component calles render method, the value of , value = { this.state.term }
//is empty...component waits for user entering some text...as user inputs, state
//gets updated to new value by this.setState({ term: event.target.value })
//At this time value of the input is not changed

//Whenver typed something, they dint change the i/p value, but they only triggered 
//the event, bcoz we updated the state with that event, that causes i/p to change

//This way it allows us to set the default value to the search box


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div className = "search-bar">
				<input 
					value = { this.state.term }
					onChange = { (event) => this.onInputChange(event.target.value) } 
				/>
			</div>
		);
	}
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	
}

export default SearchBar;