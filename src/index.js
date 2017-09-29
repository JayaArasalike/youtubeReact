import _ from 'lodash'
import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'


const API_KEY = 'AIzaSyDpiNBF3kszt93BTzJ5X_Hr9dAZTfJf6ow';



//Create a new component. This component should produce some HTML
// const App = () => {
// 	return(
// 		 <div>
// 			<SearchBar />
// 		</div>
// 	);
// }
//App can keep track of list of videos by recording its state
//whenver user conducts a new search, we do a new search and set results to state
//We move search to the constructor as we don't want an empty list
//when we have key and the value same name, we use curly braces and name 
//of the vairable

//debounce takes the function passed and calls it every 300 millisecs
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [] ,
			selectedVideo: null
		};

	this.videoSearch('surfboards');
}

videoSearch(term) {	
	YTSearch({key: API_KEY, term: term}, (videos) =>{
		this.setState({ 
			videos: videos,
			selectedVideo: videos[0]
		});
	});
}


	render() {

		const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
		return(
			<div>
				<SearchBar onSearchTermChange = {videoSearch}/>
				<VideoDetail video = {this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
					videos = {this.state.videos} />

			</div>
		);
	}
}
//Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
