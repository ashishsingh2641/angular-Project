import React from 'react';
import ReactDOM from 'react-dom';
import componentClasses from './ComponentList'; 

var componentClassFromName = componentName => {
		return componentClasses[componentName];
}

var createReactElement = (componentName,properties) => {
                return React.createElement(componentClassFromName(componentName), properties, null);
}

var CreateReactComponent = (componentName,id,data) => {
    ReactDOM.render(createReactElement(componentName,data), 
        document.getElementById(id));
}

window.createReactComponent = CreateReactComponent;

