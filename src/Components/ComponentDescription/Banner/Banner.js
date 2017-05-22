import React, { Component} from 'react';
import Data from '../Banner/moke';

class Banner extends Component {
    state = {
        backgroundImage:Data.BanneImage
    }
  render() {
    let imageBackground = this.state.backgroundImage;
    var buttonText = Data.buttonLabel;
    let styleBanner;
    styleBanner = {
                background:`url(${imageBackground})`
            }
    return (
      <div className="Banner" style={styleBanner}>
        <div className="row">
            <div className="col-lg-12 BanneImage">
            <h1 className="heading"><small>{Data.headerTitle}</small></h1> 
            <div className="row"> 
                <div className="col-lg-6 hidden-lg-down mapLocator">
                    <img className="mx-auto d-block img-fluid ImageClass"src={Data.ImgSrc} alt={Data.altText}/>
                    <i className="fa fa-map-marker first" aria-hidden="true"></i>
                    <i className="fa fa-map-marker second" aria-hidden="true"></i>
                    <i className="fa fa-map-marker third" aria-hidden="true"></i>
                    <i className="fa fa-map-marker four" aria-hidden="true"></i>
                    <i className="fa fa-map-marker five" aria-hidden="true"></i>
                    <i className="fa fa-map-marker six" aria-hidden="true"></i>
                    <i className="fa fa-map-marker seven" aria-hidden="true"></i>
                </div>
                <div className="col-lg-6">
                    <div className="bannerComponetText">
                        <h4 className="subheading small">{Data.subHeading}</h4>
                        <p className="p-1 m-0" dangerouslySetInnerHTML={ {__html: Data.teaser} }/>
                        <button className="setButtonPosition btn btn-info btn-block" >{buttonText} <i className="fa fa-envelope-open-o" aria-hidden="true"></i>...
                        </button>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</div>
    );
  }
}

export default Banner;