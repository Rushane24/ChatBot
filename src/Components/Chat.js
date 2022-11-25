import React, { Component } from "react"
import "./chat.css"
export class Chat extends React.Component {
    componentDidMount() {
        (function (d, m){
            var kommunicateSettings =
                { "appId": "384943e75e0667de0d3ab8d6d44d314b1", "popupWidget": true, "automaticChatOpenOnNavigation": true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
    render() {
        return (
            <div>
                something
            </div>
        )
    }
}
export default Chat;