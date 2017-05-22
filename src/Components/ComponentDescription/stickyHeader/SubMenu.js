import React,{Component} from 'react';

export default class SubMenu extends Component {
  	render(props) {
    	let list = this.props.subMenuData.map((el, i) => {
      return <li key={i}><a href={el.sublink}>{el.sublinkText}</a></li>;	
    });
    	return(
    		<ul className="submenuLink">{ list }</ul>
    	)
  	}
}