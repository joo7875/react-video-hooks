import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

// Use useEffect when there is componentDidMount (lifecycle)

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]); // anytime we get a new list of videos, run useEffect function

  

  // useEffect(() => {
  //   onTermSubmit('buildings');
  // }, []); // empty array means run this useEffect function only one time, same as componentDidMount()

  // const onTermSubmit = async (term) => {
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term,

  //     },
  //   });

  //   setVideos(response.data.items);
  //   setSelectedVideo(response.data.items[0]);
  // };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {/* <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} /> */}
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="ui container">
  //     <SearchBar onFormSubmit={onTermSubmit} />
  //     <div className="ui grid">
  //       <div className="ui row">
  //         <div className="eleven wide column">
  //           <VideoDetail video={selectedVideo} />
  //         </div>
  //         <div className="five wide column">
  //           {/* <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} /> */}
  //           <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default App;

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   componentDidMount() {
//     this.onTermSubmit('buildings');
//   }

//   onTermSubmit = async term => {
//     const reponse = await youtube.get('/search', {
//       params: {
//         q: term
//       }
//     });

//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0]
//     });

//   }

//   onVideoSelect = video => {
//     this.setState({ selectedVideo: video });
//   }

// }