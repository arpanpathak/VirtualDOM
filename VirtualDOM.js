/***
 * VirtualDOM
 * 
 * @version 0.0.1
 */



 // Node of Virtual DOM tree
 const H = function(type,props, ...children) {
     return {type,props,children};
 }

 const VirtualDOM = function(appReferenceId) {

    // Stores the actual DOM div rereference
    this.appReference = document.querySelector(appReferenceId);
    


 }


 let myElement = 
    H ('ul',  {class: 'my-list'},
        H('li', {class: 'my-li'},
            H('a',{href: "https://www.google.com"})
        ),

        H('li', {class: 'my-li'},
            H('a',{href: "https://www.google.com"})
        ),

        H('li', {class: 'my-li'},
            H('a',{href: "https://www.google.com"})
        )
    );

// console.log(myElement);

