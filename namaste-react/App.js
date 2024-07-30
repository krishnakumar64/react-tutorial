// Create element with text
// const heading=React.createElement('h1',{
//     className:'aaya',
//     id:"heading1",
//     dataURL:"google.com"
// },'Text from React JS')

// Create Nested Element with text only in child
// const nestedStructure=React.createElement('div',
//     {id:'parent'},
//     React.createElement('div',
//         {id:'child'},
//         React.createElement('div',
//             {id:'element'},
//             "I am the element"
//         ),
        
//     ),
// )

// Create Nested Element with text in all elements
// const nestedStructure=React.createElement('div',
//     {id:'parent'},
//     React.createElement('div',
//         {id:'child'},
//         React.createElement('div',
//             {id:'element'},
//             "I am the element"
//         ),
//         "I am the child element"
        
//     ),
//     "I am the parent element"
// )

// Create Nested Element with siblings
const nestedStructure=React.createElement('div',{
    id:'parent'
},
    [
    React.createElement('div',{id:'child1'},'I am child 1'),
    React.createElement('div',{id:'child2'},'I am child 2')]
)



const root=ReactDOM.createRoot(document.getElementById('root'))
//root.render(heading)
root.render(nestedStructure)
