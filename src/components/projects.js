import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">

          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(/images/memeGen.png)"
              }}
            >
              
            </CardTitle>
            <CardText>
              Randomly generates a humorous picture for you to add your own commentary
            </CardText>
            <CardActions border>
              <a colored href="https://github.com/peteraugros/memeGen">GitHub</a>
              <a colored href="https://guarded-tundra-82525.herokuapp.com/">Live Demo</a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: "url(/images/notes.png)"
            }}
          >
            
          </CardTitle>
          <CardText>
            Handy note taking app to help you organize your thoughts and inspirations
          </CardText>
          <CardActions border>
            <a colored href="https://github.com/peteraugros/noteTaker">GitHub</a>
            <a colored href="https://mighty-coast-98430.herokuapp.com/">Live Demo</a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
            }}
          >
            React Project #2
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
            }}
          >
            React Project #3
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
          </CardMenu>
        </Card>
      </div>
    );
  } else if (this.state.activeTab === 2) {
    return (
      <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: "url(/images/umbrella.png)"
              
            }}
          >
           
          </CardTitle>
          <CardText>
            Find the weather quickly and easily in all major cities around the world
          </CardText>
          <CardActions border>
            <a colored href="https://github.com/peteraugros/WeatherApp">GitHub</a>
            <a colored href="https://peteraugros.github.io/WeatherApp/">Live Demo</a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
          </CardMenu>
        </Card>
        
        {/* Project 2 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(/images/calendar.png)"
            }}
          >
           
          </CardTitle>
          <CardText>
           Plan your day with this time saving online organizer
          </CardText>
          <CardActions border>
            <a colored href="https://github.com/peteraugros/calendar">GitHub</a>
            <a colored href="https://peteraugros.github.io/calendar/">Live Demo</a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(/images/barTinder.png)"
            }}
          >
           
          </CardTitle>
          <CardText>
           Can's decide what to drink? Let BarTinder decide for you!
          </CardText>
          <CardActions border>
            <a colored href="https://github.com/levgir/BarTinder">GitHub</a>
            <a colored href="https://levgir.github.io/BarTinder/main.html">Live Demo</a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
          </CardMenu>
        </Card>
        
      </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
           {/* Project 1 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(/images/dumbbell.png)"
            }}
          >
           
          </CardTitle>
          <CardText>
           The gym is hard enough without having to keep track of everything, let this app do some of the heavy lifting
          </CardText>
          <CardActions border>
            <a colored href="https://github.com/peteraugros/workoutTracker">GitHub</a>
            <a colored href="https://desolate-depths-50174.herokuapp.com/">Live Demo</a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
          </CardMenu>
        </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Node</Tab>
          <Tab>Javascript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
