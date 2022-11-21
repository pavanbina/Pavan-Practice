var HelloReact = React.createClass({
    render: function () {
        return (<div>Hello React App</div>);
    }
});
React.render(<HelloReact />, document.getElementById("reactdiv"))