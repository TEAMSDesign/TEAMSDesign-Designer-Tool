import React from "react";
import '../components/Microsite.css'
import '../index.css'
import defaultImage from '../images/default-image.png'
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import AutoModeOutlinedIcon from '@mui/icons-material/AutoModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react'

// import ImageCard from './ImageCard';

// Tabs
    const openContent = (event, areaContent) => {
    var k, tabContent, tabItem;
    console.log(event);
    console.log(areaContent);
    
    tabContent = document.getElementsByClassName("tab-content");
    for (k = 0; k < tabContent.length; k++) {
        tabContent[k].style.display = "none";
    }

    tabItem = document.getElementsByClassName("tab-item");
    for (k = 0; k < tabItem.length; k++) {
      tabItem[k].className = tabItem[k].className.replace(" active", "");
    }

    document.getElementById(areaContent).style.display = "block";
    event.currentTarget.className += " active";
}

// export default function Microsite() {

// }

const Microsite = (props) => {

const [showNavClose, setShowNavClose] = useState(false);
const [showNavMenu, setShowNavMenu] = useState(true);

const handleNavClose = event => {
    setShowNavClose(true);
    setShowNavMenu(false);
    document.getElementById("closeIcon").style.display = "block";
    document.getElementById("menuIcon").style.display = "none";
    document.getElementById("NavbarCollapse").style.display = "block";
}

const handleNavMenu = event => {
    setShowNavClose(false);
    setShowNavMenu(true);
    document.getElementById("closeIcon").style.display = "none";
    document.getElementById("menuIcon").style.display = "block";
    document.getElementById("NavbarCollapse").style.display = "none";
}

    return (
      <div className="editable-layout" style={{width: props.toolClosed ? `100vw` : `calc(100vw - 320px)`}}>
        <header>
          <nav class="navbar">
            <a href="#" className="logo">Brand Logo</a>
            <button id="NavbarToggle" class="navbar-toggle" type="button" onClick={showNavClose ? handleNavMenu : handleNavClose}>
              {/* <span id="menuIcon" class="material-icons">menu</span>
              <span id="closeIcon"  class="material-icons">close</span> */}
              <span id="menuIcon"><MenuOutlinedIcon /></span>
              <span id="closeIcon"><CloseOutlinedIcon /></span>
            </button>
            <div id="NavbarCollapse" class="navbar-collapse">
              <ul>
                <li><a href="#" type="button">link 1</a></li>
                <li><a href="#" type="button">link 2</a></li>
                <li><a href="#" type="button">link 3</a></li>
                <li><a href="#" type="button">link 4</a></li>
                <li><a class="icon-button" href="#" type="button"><SearchOutlinedIcon /></a></li>
              </ul>
            </div>
          </nav>
        </header>

        <main>
            <div class="hero">
            {/* Add image in css file */}
            <div class="hero__text-container">
                <h1>The basics of responsive layout</h1>
                <h4>When adapting the layout grid for larger screens, divide content and elements into columns.</h4>
                <button class="button-primary">Learn More</button>
            </div>
            </div>

            <div class="jumbo-card">
            <div class="jumbo-card__image-container">
                <img src={defaultImage} alt="" />
            </div>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div class="tabs">
                <h3>Lorem Ipsum is simply dummy text of the typesetting industry</h3>
                <div class="tab-menu">
                    <button class="tab-item active" onClick={event => openContent(event, 'tab1')}>Tab 1</button>
                    <button class="tab-item" onClick={event => openContent(event, 'tab2')}>Tab 2</button>
                    <button class="tab-item" disabled onClick={event => openContent(event, 'tab3')}>Tab 3</button>
                </div>
                <div id="tab1" class="tab-content" style={{display: "block"}}>
                    <table class="table-wide table-border table-height-md">
                    <tr>
                        <th>Table item name</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                    </tr>
                    </table>
                    <div class="paragraph-medium">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div id="tab2" class="tab-content">
                    <table class="table-wide table-border table-height-md">
                    <tr>
                        <th>Table item name</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                    </tr>
                    </table>
                    <div class="paragraph-medium">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <div id="tab3" class="tab-content">tab 3</div>
            </div>

            <div class="horizontal-card">
                <div class="hotizontal-card__content">
                <div class="horizontal-card__text-container">
                    <h5>Feature name</h5>
                    <p>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</p>
                </div>
                <div class="horizontal-card__text-container">
                    <h5>Feature name</h5>
                    <p>Many say exploration is part of our destiny, but it’s actually our duty to future generations.</p>
                </div>
                <div class="horizontal-card__text-container">
                    <h5>Feature name</h5>
                    <p>We predict too much for the next year and yet far too little for the next ten.</p>
                </div>
                <div class="horizontal-card__text-container">
                    <h5>Feature name</h5>
                    <p>Man must explore, and this is exploration at its greatest.</p>
                </div>
                </div>
                <div class="horizontal-card__image-container">
                <img class="horizontal-card__imgae" src={defaultImage} alt="" />
                </div>
            </div>

            <div class="table-wide__container">
                <table class="table-wide table-multiselect table-border table-height-lg">
                <tr>
                    <th class="table-multiselect__checkbox-container">
                        <input type="checkbox" />
                    </th>
                    <th>Table item name</th>
                    <th scope="row">Value</th>
                    <th scope="row">Value</th>
                    <th scope="row">Value</th>
                    <th scope="row">Value</th>
                    <th scope="row">Value</th>
                    <th scope="row">Value</th>
                    <th scope="row">Value</th>
                    <th scope="row">Value</th>
                    <th scope="row">Value</th>
                </tr>
                <tr>
                    <td class="table-multiselect__checkbox-container">
                        <input type="checkbox" />
                    </td>
                    <td>Table item name</td>
                    <td>237</td>
                    <td>237</td>
                    <td>237</td>
                    <td>237</td>
                    <td>237</td>
                    <td>237</td>
                    <td>237</td>
                    <td>237</td>
                    <td>237</td>
                </tr>
                <tr>
                    <td class="table-multiselect__checkbox-container">
                        <input type="checkbox" />
                    </td>
                    <td>Table item name</td>
                    <td>262</td>
                    <td>262</td>
                    <td>262</td>
                    <td>262</td>
                    <td>262</td>
                    <td>262</td>
                    <td>262</td>
                    <td>262</td>
                    <td>262</td>
                </tr>
                <tr>
                    <td class="table-multiselect__checkbox-container">
                        <input type="checkbox" />
                    </td>
                    <td>Table item name</td>
                    <td>450</td>
                    <td>450</td>
                    <td>450</td>
                    <td>450</td>
                    <td>450</td>
                    <td>450</td>
                    <td>450</td>
                    <td>450</td>
                    <td>450</td>
                </tr>
                <tr>
                    <td class="table-multiselect__checkbox-container">
                        <input type="checkbox" />
                    </td>
                    <td>Table item name</td>
                    <td>159</td>
                    <td>159</td>
                    <td>159</td>
                    <td>159</td>
                    <td>159</td>
                    <td>159</td>
                    <td>159</td>
                    <td>159</td>
                    <td>159</td>
                </tr>
                </table>
            </div>

            <div class="icon-card-group">
                <div class="icon-card  icon-card-react">
                    <OfflineBoltOutlinedIcon className="icon-card__icon" />
                    <h5>Feature name</h5>
                    <p>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</p>
                </div>
                <div class="icon-card icon-card-react">
                    <FaceOutlinedIcon />
                    <h5>Feature name</h5>
                    <p>Many say exploration is part of our destiny, But it’s actually our duty to future generations.</p>
                </div>
                <div class="icon-card icon-card-react">
                    <OfflineBoltOutlinedIcon />
                    <h5>Feature name</h5>
                    <p>We predict too much for the next year and yet far too little for the next ten.</p>
                </div>
                <div class="icon-card icon-card-react">
                    <AutoModeOutlinedIcon />
                    <h5>Feature name</h5>
                    <p>Man must explore, and this is exploration at its greatest.</p>
                </div>
            </div>

            <div class="jumbo-image">
                <img src={defaultImage} alt="" />
            </div>

            <div class="grid-text">
                <div class="grid-text-title">
                    <h3>Lorem Ipsum is simply dummy text of the typesetting industry</h3>
                </div>
                <div class="grid-text__child-grid">
                    <p class="grid-text-one">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p class="grid-text-two">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p class="grid-text-three">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>

            <div class="section-title">
                <h2>Lorem Ipsum is simply dummy text of the typesetting industry</h2>
            </div>

            <div class="card-group">
                <div class="card">
                    <div>
                    <img src={defaultImage} alt="" />
                    </div>
                    <div class="card-text__container">
                    <h4>Card name</h4>
                    <p>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</p>
                    </div>
                </div>
                <div class="card">
                    <div>
                    <img src={defaultImage}  alt="" />
                    </div>
                    <div class="card-text__container">
                    <h4>Card name</h4>
                    <p>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</p>
                    </div>
                </div>
                <div class="card">
                    <div>
                    <img src={defaultImage}  alt="" />
                    </div>
                    <div class="card-text__container">
                    <h4>Card name</h4>
                    <p>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</p>
                    </div>
                </div>
                <div class="card">
                    <div>
                    <img src={defaultImage}  alt="" />
                    </div>
                    <div class="card-text__container">
                    <h4>Card name</h4>
                    <p>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</p>
                    </div>
                </div>
                <div class="card">
                    <div>
                    <img src={defaultImage}  alt="" />
                    </div>
                    <div class="card-text__container">
                    <h4>Card name</h4>
                    <p>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</p>
                    </div>
                </div>
                <div class="card">
                    <div>
                    <img src={defaultImage}  alt="" />
                    </div>
                    <div class="card-text__container">
                    <h4>Card name</h4>
                    <p>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</p>
                    </div>
                </div>
            </div>

            <div class="sticky-scroll">
                <div class="sticky-content">
                    <img src={defaultImage} alt="" />
                    <h3>Lorem Ipsum is simply dummy text</h3>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="sticky-scroll-images">
                    <img src={defaultImage} alt="" />
                    <img src={defaultImage} alt="" />
                    <img src={defaultImage} alt="" />
                </div>
            </div>

            <div class="grid-2x1 grid-buttons">
                <div class="grid-buttons__text">
                    <h3>Lorem Ipsum is simply dummy text of the typesetting industry</h3>
                </div>
                <div class="grid-buttons__buttons">
                    <button class="button-primary">Primary</button>
                    <button class="button-secondary">Secondary</button>
                </div>
            </div>
            
            <div class="large-table__container">
                <h4>Lorem Ipsum is simply dummy text</h4>
                <div class="large-table__table-content">
                    <table class="table-height-sm">
                    <caption></caption>
                    <tr>
                        <th>Table item name</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                        <th scope="row">Value</th>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                        <td>262</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>450</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                        <td>159</td>
                    </tr>
                    <tr>
                        <td>Table item name</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                        <td>237</td>
                    </tr>
                    </table>
                </div>
            </div>
            <div>
                {/* <ImageCard /> */}
            </div>

            <div class="form__conatiner">
                <h3>Headline area</h3>
                <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula</p>
                <form action="">
                    <label for="">Label</label>
                    <input type="text" placeholder="Input text" />
                    <label for="">Label</label>
                    <input type="text" placeholder="Input text" />
                    <label for="">Label</label>
                    <input type="text" placeholder="Input text" />
                    <label for="">Label</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Input text..."></textarea>
                    <div class="form__buttons">
                        <button class="button-primary">Primary</button>
                        <button class="button-secondary">Secondary</button>
                    </div>
                </form>
            </div>
        </main>

        <footer class="container">
    <div class="footer__content">
      <div class="three columns">
        <h6>Product</h6>
        <div class="footer__link-list">
          <a href="">Prcing</a>
          <a href="">Teams</a>
          <a href="">Updates</a>
          <a href="">Features</a>
          <a href="">Integrations</a>
          <a href="">Support</a>
        </div>
      </div>
      <div class="three columns">
        <h6>Developers</h6>
        <div class="footer__link-list">
          <a href="">Documentation</a>
          <a href="">API reference</a>
          <a href="">API status</a>
          <a href="">Open source</a>
        </div>
      </div>
      <div class="three columns">
        <h6>Resources</h6>
        <div class="footer__link-list">
          <a href="">Tutorials</a>
          <a href="">Docs</a>
          <a href="">Community</a>
          <a href="">Case studies</a>
          <a href="">Help center</a>
        </div>
      </div>
      <div class="three columns">
        <h6>About</h6>
        <div class="footer__link-list">
          <a href="">Company</a>
          <a href="">Customers</a>
          <a href="">Careers</a>
          <a href="">Edication</a>
          <a href="">Our story</a>
          <a href="">Press kit</a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__division-line"></div>
      <a href="">&copy; myWebsite</a>
      <div class="footer-legal">
        <a href="">Imprint</a> |
        <a href=""> Privacy policy</a>
      </div>
    </div>
  </footer>

      </div>
    )
}

export default Microsite;