import React from "react";
import Card from "./Card";
import GitHub from '../images/github.jpg';
import Linkden from '../images/linkden.png';
import Projects from '../images/MyProject.png';
import { Container, Row } from "react-bootstrap";
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
            imgSrc: GitHub,
            link: "https://github.com/Rkaylor",
            selected: false

        },
        {
            id: 1,
            title: "Linkden",
            subTitle: "My Personal Linkden",
            ImgSrc: Linkden, 
            link: "https://www.linkedin.com/in/robert-kaylor12/",
            selected: false

        },
        {
            id: 2,
            title: "Projects",
            subTitle: "My Projects",
            imgSrc: Projects, 
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
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
            
        );
    }
}
    export default Carousel;