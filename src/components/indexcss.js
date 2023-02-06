body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  
  .App {
    margin: 0% 5% 0% 5%;
    text-align: center;
  }
  
  .TwirlyPig {
    transition: all 3s ease-in-out;
    display: inline;
  }
  
  .TwirlyPig:hover {
    transform: scale(1.5);
  }
  
  .navWrapper {
    margin-bottom: 2%;
  }
  
  .filterWrapper {
    margin: 2% 0% 2% 0%;
  }
  
  .headerText {
    color: #F5A9BC;
    font-size: 3em;
    margin: 0% 2% 0% 2%;
  }
  
  .largeHeader {
    font-size: 3.5em;
    font-weight: bold;
    color: #3B0B0B;
  }
  
  .smallHeader {
    font-size: 1.75em;
    font-weight: bold;
    color: #3B0B0B;
  }
  
  .normalText {
    font-family: Georgia, serif;
    font-size: .75em;
  }
  
  .hoggyText {
    font-size: 1.5em;
  }
  
  .achievementText {
    color: purple;
  }
  
  ul {
    list-style-type: none;
    list-style: none;
  }
  
  .normalText ul {
    font-family: Georgia, serif;
    font-size: .75em;
    text-align: left;
  }
  
  .subtleText {
    color: #D1D1D1;
    font-size: .75em;
  }
  
  
  .indexWrapper {
    margin: auto;
  }
  
  
  .pigTile {
    display: inline;
    background-repeat: no-repeat;
    background-position: center 90%;
    float: left;
    margin: 2%;
    padding: 1%;
    outline: #3B0B0B dotted thick;
    transition: 0.75s;
    opacity: 1;
  }
  
  .minBackgroundSneak {
    position: absolute;
    width: inherit;
    height: inherit;
    background-size: cover;
    z-index: -3;
  }
  
  .maxBackgroundSneak {
    position: absolute;
    width: inherit;
    height: inherit;
    background-size: cover;
    z-index: -3;
    opacity: 0.75;
  }
  
  .pigTile h3 {
    color: #FBB;
  }
  
  .minPigTile {
    width: 250px;
    height: 250px;
    background-size: cover;
  }
  
  .maxPigTile {
    background-size: cover;
    width: 500px;
    height: 500px;
  }
  
  .pigTile:hover {
    transform: scale(1.05);
  }
  
  
  .App-logo {
    animation: App-logo-spin infinite 5s linear;
    height: 80px;
    transition: all .2s ease-in-out;
  }
  
  .footer {
    padding: 1%;
    clear: both;
  }
  
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
  
    to {
      transform: rotate(360deg);
    }
  }