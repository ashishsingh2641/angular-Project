import React,{Component} from 'react';

export default class SubMenu extends Component {
  	render(props) {
  		let link = [];
  		if (this.props.subMenuData === '') {
  			link = ''	
  		} else  {
  		link = this.props.subMenuData.map((el, i) => {	
    	 		return <li  className="col-lg-3 text-center SubMenuList"key={i}><a className="SubMenuLabel" href={el.sublink}>{el.sublinkText}</a>
              <ul className="subMenuchild">    
                {this.props.subMenuData[i].subchildlink === '' ? '' :
                    this.props.subMenuData[i].subchildlink.map((child, j) =>  
                      <li key={j}><a href={child.sublink}>{child.sublinkText}</a></li>
                    )}
              </ul>
          </li>;	
  			});
  		}
    	return(
                <ul className="SubMenu"> { link }</ul>
    	)
  	}
}