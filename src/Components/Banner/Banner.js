import React, { Component} from 'react';
/*import Data from '../Banner/moke';*//*
import es6-promise from 'prollyfill';
import isomorphic-fetch from 'isomorphic-fetch';*/
 
class Banner extends Component {
    state = {
        backgroundImage:this.props.data.BanneImage
    }
    /*this.fetch('../Banner/mokeup2')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
        console.log(stories);
    });*/

  render() {
    let DiagVariable = this.props.data;
    let imageBackground = this.state.backgroundImage;
    let buttonText = this.props.data.buttonLabel;
    let styleBanner;
    styleBanner = {
                background:`url(${imageBackground})`
            }
    return (
      <div className="Banner">
        <div className="row">
            <div className="col-lg-12 BanneImage" style={styleBanner}>
            <h1 className="heading"><small>{DiagVariable.headerTitle}</small></h1> 
            <div className="row"> 
                <div className="col-lg-8">
                    <div className="bannerComponetText">
                        <h2 className="subheading">{DiagVariable.subHeading}</h2>
                        <p className="BannerText p-1 m-0" dangerouslySetInnerHTML={ {__html: DiagVariable.teaser} }/>
                        <button className="setButtonPosition btn btn-info btn-block" >{buttonText} <i className="fa fa-envelope-open-o" aria-hidden="true"></i>...
                        </button>
                    </div>
                </div>
                <div className="col-lg-4 hidden-lg-down">
                    <img className="mx-auto d-block img-fluid ImageClass"src={DiagVariable.ImgSrc} alt={this.props.data.altText}/>
                </div>
            </div>
        </div>    
    </div>
</div>
    );
  }
}

export default Banner;