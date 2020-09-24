import React from "react";

class Carousel extends React.Component {

    constructor(props){
    super(props);
    this.state = [
        {
            id: 0,
            title: "GitHub",
            subTitle: "Repository",
            link: "https://github.com/Rkaylor",
            selected: false

        },
        {
            id: 1,
            title: "Linkden",
            subTitle: "My Personal Linkden",
            link: "https://www.linkedin.com/in/robert-kaylor12/",
            selected: false

        },
        {
            id: 2,
            title: "Projects",
            subTitle: "My Projects",
            link: "https://high-score-quiz-game.herokuapp.com/",
            selected: false

        },
    ]
}

    render() {
        return(
            
            <p>Carousel Works!</p>
            
        );
    }
}
    export default Carousel;