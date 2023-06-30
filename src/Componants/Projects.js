
import {Container , Row ,Col,Nav,Tab} from 'react-bootstrap';
import projImg1 from "../Imges/pro-img4.png"
import projImg2 from "../Imges/pro-img5.png"
import projImg3 from "../Imges/pro-img6.png"
import ProjectCard from "./ProjectCard";


function Projects (){
    const projects = [
        {
            title: "Business Startup",
            description: "Design &  Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design &  Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design &  Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design &  Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design &  Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design &  Development",
            imgUrl: projImg3,
        },
    ];

    return(
        <section className="projects" id="projects">
             <Container>
                <Row>
                    <Col>
                       <h2 className="projects-title">Projects</h2>
                       <p>Importing CSS requires a CSS loader if you're using create-react-app</p>
                       <Tab.Container id="projects-tabs" defaultActiveKey="sec-1">
                            <Nav variant="pills" className="nav-pills mb-5 ">
                               <Nav.Item>
                                  <Nav.Link eventKey="sec-1">sec-1</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                  <Nav.Link eventKey="sec-2">sec-2</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                  <Nav.Link eventKey="sec-3">sec-3</Nav.Link>
                               </Nav.Item>
                           </Nav>
                           <Tab.Content>
                            <Tab.Pane eventKey="sec-1">
                                <Row>
                                    {
                                        projects.map((project,index) => {
                                            return(
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sec-2"></Tab.Pane>
                            <Tab.Pane eventKey="sec-3">No projects yet but i still working....</Tab.Pane>
                           </Tab.Content>
                       </Tab.Container>
                    </Col>
                </Row>
             </Container>
        </section>
    )
}

export default Projects ;