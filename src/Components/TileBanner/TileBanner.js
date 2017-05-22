import React, { Component} from 'react';

class TileBanner extends Component {
  render() {
    let dialogVariable = this.props.data;
    let structure;
    if (dialogVariable.class === "tileBanner") {
      structure = (
        <div className="row">
            <div className="col-lg-12 tilePadding">
                <div className="tileBanner">
                  <img className="IconImg img-fluid mx-auto d-block" src={dialogVariable.ImageSrc} alt={dialogVariable.ImageAlt}/>
                  <div className="IconText">
                    <h4>{dialogVariable.ImageTitle}</h4>
                    <p>{dialogVariable.ImageDesc}</p>
                  </div>
                </div>
            </div>
        </div>        
      )
    } else {
      structure = (
        <div className="row">
            <div className="col-lg-12 tilemarginCircle">
                <div className="row">
                    <div className="col-4">
                        <img className="IconImg img-fluid mx-auto d-block img-thumbnail" src={dialogVariable.ImageSrc} alt={dialogVariable.ImageAlt}/>
                    </div>
                    <div className="col-8">
                        <div className="IconText">
                            <b>{dialogVariable.ImageTitle}</b>
                            <p dangerouslySetInnerHTML={ {__html: dialogVariable.ImageDesc} }/>
                            <a href={dialogVariable.LinkSrc}>{dialogVariable.LinkText}</a>
                        </div>
                    </div>    
                </div>
            </div>
        </div>    
      )
    }

    return(
      <div>
        { structure }
      </div>
    );
  }
}

export default TileBanner;