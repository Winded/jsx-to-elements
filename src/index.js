'use strict'

const React = {
    createElement(component, props, ...children) {
        /** @type {HTMLElement|null} */
        let element = null;
        if (typeof component == 'function') {
            element = component(props);
        } else {
            element = document.createElement(component);
            for (let propName in props) {
                if (propName == 'className') {
                    propName = 'class';
                }
                element.setAttribute(propName, props[propName]);
            }
        }

        children = children.flat();

        element.append(...children);

        return element;
    }
};

module.exports = React;
