
# iTube
#### Fullstack Project
##### A YouTube Inspired React.js Application


* [Backend Routes](https://github.com/luqven/iTube/wiki/Backend-Routes)
* [DB Schema](https://github.com/luqven/Fullstack_Project/wiki/Database-Schema)
* [Frontend Routes](https://github.com/luqven/iTube/wiki/Frontend-Routes)
* [MVP List](https://github.com/luqven/Fullstack_Project/wiki/MVP)
* [Sample State](https://github.com/luqven/Fullstack_Project/wiki/Sample-State)


# Welcome to iTube

Hi! This is the README for **iTube**. iTube is a React-Redux app that allows users to share videos with one another. The goal of this app is to display the power of the React-Redux cycle using AWS S3 APIs for video hosting, and a Rails backend for database management.

#### Progress

- [x] Hosting on Heroku
- [x] Video 
- [x] Likes
- [ ] Comments
- [ ] Play-count 
- [x] Channels


# Libraries & technologies

**iTube** makes use of:
- React for componenet creation
- Redux for state management
- NodeJs for NPM packages like WebPack
- Rails for dabaase management
- HTML 5 for canvas rendering
- CSS

# Functionalities

iTube allows users to upload, view, like, and comment on videos. User's videos get added to their channels, and channels can have many subscribed users. The user can view his channel and his subscribed channels.

iTube stores files on the web, so take appropriate precautions, as files will live on the AWS server until the database is re-seeded.

## Responsive design
![responsive design giph](https://media.giphy.com/media/ygBEzlThonWREEjbhm/giphy.gif)

iTube is designed to accomodate for most laptop & desktop screen sizes. Mobile responsiveness varies.

## Video Carousel
![video carousel giph](https://media.giphy.com/media/64atx7V5NBfxDURWBJ/giphy.gif)

iTube's video carousel was built form scratch to be responsive and easy to use.

This componenent took quite some time and iterations to get right. It was not, at first, obvious how to make the li of video previews scroll by a responsively defined amount. With some tinkering, it became clear that using it's container's width as the offset ammount would be the best approach, since @media CSS queries would allow me to know what that might be well ahead of time.

``` javascript
handleClick(e, type){
    // if first time button was clicked
    if (this.state.carouselClicks === 0) {
      let leftBtn = document.getElementById(`leftArr${this.props.channel.owner_id}`);
      leftBtn.classList = leftBtn.classList = "home-channel-scroll-btn inactive"
    }
    let button = e.currentTarget;
    let offset = this.containerWidth;
    if (type === 'left') { offset = offset * - 1}
    this.car = document.querySelectorAll(".preview-carousel")[this.props.classId];
  
    this.car.scrollBy({
      top: offset,
      left: 0,
      behavior: 'smooth'
    });
    // set background of button to grey
    button.classList = "home-channel-scroll-btn active";
    // set background transparent again
    setTimeout(() => { button.classList = "home-channel-scroll-btn inactive"}, 200);
  };
```

## Channels
![channels component giph](https://media.giphy.com/media/WwdYhnJvQyzFCVobul/giphy.gif)

iTube gives every user a channel that displays all his / her videos

## User Authentication
![user auth giph](https://media.giphy.com/media/fMAKVTPqQdEqPzo45i/giphy.gif)

iTube makes use of hashing to store password_digests, so that user's can be sure that any login attempts will be authenticated in the back end in a secure way.

## Search & Auto Complete
![autocomplete gif giph](https://media.giphy.com/media/E0Rl6gNKudCK4xjQBS/giphy.gif)

Type the video title or topic you have in mind in the **Search** field, and iTube will fetch the most relevant results. You can select the one that most suits your needs.

Some of the relevant code that was implemented to make this possible can be found bellow. Subsequent iterations would ideally move away from simple substring matching on all titles to something more reliable; like next-word probability relationships given user's search history implementing markov-chains [HackerNews](https://news.ycombinator.com/item?id=19204186)

```javascript
// search hash of {title: video_id} for matching substring
  handleInput(){
    let currentInput = this.state.searchStr.toLowerCase();
    // return null if searchStr is empty: backspacing and first render
    if(currentInput === "" || currentInput.length < 1) {return null};
    let matchedSearch = [];
    // get array of all titles in state
    let allTitles = Object.keys(this.props.search);
    // add titles that match search string to matchedSearch arr
    for (let i = 0; i < allTitles.length; i++) {
      const curTitle = allTitles[i];
      // push into array if title matched
      if (curTitle.toLowerCase().includes( currentInput )) {
         matchedSearch.push(curTitle);
        };
    }
    // store array of title components
    let titles = [];
    let indexes = ""; // for other searchResults component that relies on url
    let cursorPos = this.state.cursorPos; // current pos of cursor
    for (let i = 0; i < this.state.matchedSearch.length; i++) {
      const curTitle = this.state.matchedSearch[i];
      const curIndex = this.props.search[curTitle]["id"];
      indexes = indexes.concat(`_id_${curIndex}`);
      titles.push(
        <li className={`search-auto-li ${cursorPos === curIndex ? 'selected' : null }`} 
        onClick={this.handleClick} key={i}> {curTitle} </li>
        )
      };
    // store the array of lis inside a ul element
    let titlesComponents;
    // if no matches, do not render ul
    if (titles.length < 1) {
      titlesComponents = null
      } else {
        titlesComponents = (<ul>{titles}</ul>)
      }
    // store the created ul component in state
    this.setState({
      matchedSearch: matchedSearch,
      matchedIds: indexes,
      titleComponents: titlesComponents,
    })
  };
```

# Main Components

- ``root.jsx`` Component that wraps the rest in the Provider and HashRouter.
- ``app.jsx`` Component that provied the store the rest of the components, manages Redirect logic.
- ``home.js`` Home page component
- ``Videos``
  - ``video_form_container.jsx`` container for the edit and upload video forms.
  - ``video_edit_container.jsx`` container for the edit form.
  - ``video_upload_container.jsx`` container for the upload form.
  - ``video_preview_container.jsx`` container for the video preview componenet
  - ``video_show_container.jsx`` container for the video show componenet
  - ``video_form.jsx`` form for editing & uploading videos
  - ``video_preview.jsx`` component that render preview image, title, and more for an individual video.
  - ``video_show.jsx`` component that render video file, description, title, likes, and comments.

  Other notable components:
- ``channel.jsx`` Channel component that renders `VideoPreview` components for each video in channel's slice of state.
- ``like_button.jsx`` Component that renders a like button that on click adds likes to the backend. Displays a video's number of total likes.
- ``nav_bar.jsx``  Component that renders `modal.jsx` and `dropdown.jsx`.




