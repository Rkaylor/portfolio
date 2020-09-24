import React from "react";

import github from '../images/github.jpg'
// import github from '../images/github.jpg'
// import github from '../images/github.jpg'



class Carousel extends React.Component {

    constructor(props){
    super(props);
    this.state = {
        items: [
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
}

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true 

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, event, e))} key={item.id} />
        })
    }

    render() {
        return(
            
            <p>Carousel Works!</p>
            
        );
    }
}
    export default Carousel;