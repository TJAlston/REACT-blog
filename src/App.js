import React, { Component } from 'react'
import logo from './logo.svg'
import './Header.css'
import './Footer.css'
import twitter from './twitterbutton.png'
import instagram from './instagrambutton.png'
import blogger from './bloggerbutton.png'

class App extends Component {
  render() {
    return (
      // class and for are already classified in JS so when writing in JSX we have to put class
      <div className="App">
        <div className="App-header">
          <h1>WELCOME TO TJ ALSTON'S BLOG</h1>
        </div>
        <div className="App-image"></div>
        <p className="App-intro">
        REACT will change the way I build my website by making it easier
        for me to create it and organize within it.  At first, it was difficult figuring out how to maneuver around because I was unorganized when starting my files.  Once I understood how much easier it would be to separate the components and style them, it became a little bit easier to understand how to get around the page. Slowly but progressively I'm getting a gasp of it.  The only issue I am still having trouble with is trying to figure out operating the flexbox even though thats just me and has nothing to do with REACT, it's still a pain in the neck! LOL Other than that, hopefully it'll make understanding the functions a bit easier since I'm not even 50% confident in programming.  I still don't think what I've done so far is too shabby.  Especially knowing that I just learned REACT a couple of hours ago.
        </p>
        <div className="App-footer"> FOLLOW ME AND MY LIFE ON:
        <div className="App-logo">
        <a href="https://twitter.com/Mirage_Music">
        <img src={twitter} alt='' height="40" width="40"/>
        </a>
        
        <a href="https://www.instagram.com/tamekaj.alston">
        <img src={instagram} alt='' height="40" width="40"/>
        </a>

        <a href="https://tjalston82.blogspot.com">
        <img src={blogger} alt='' height="40" width="40"/>
        </a>
        </div>
        </div>
      </div>

    )
  }
}

export default App
