import React, { Component } from "react";
import logo from "./logo.svg";
import { render } from "react-dom";
import "./Leaderboard.css";
import "./p.css";
// import LeaderBoardForm from "./LeaderBoardForm";
import firebase from "./Firebase";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Topbar from "./Topbar.js";

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  bigroot: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: 1000
  }),
  rootcard: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: 500
  }),
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },

  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },

  root: theme.mixins.gutters({
    display: "flex",
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: theme.spacing.unit * 3,
    width: 400
  }),
  rank: {
    width: 100,
    height: 100
  },
  cover: {
    width: 80,
    height: 100
  },
  card: {
    display: "flex",
    width: 250,
    height: 100
  },
  yellow: {
    color: "yellow",
    font_size: 100
  },
  gray: {
    color: "gray"
  },
  brown: {
    color: "brown"
  }
});
class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cycles: 0,
      gender: "",
      picture: "",
      rank: "",
      color: "",
      array: [],
      one: [],
      two: [],
      three: []
    };
  }
  updateField = (field, newValue) => {
    this.setState({ [field]: newValue });
  };
  handleClick = event => {
    event.preventDefault();

    var object = {
      name: this.state.name,
      cycles: parseInt(this.state.cycles),
      gender: this.state.gender,
      rank: this.state.rank,
      color: this.state.color,
      picture: this.state.picture
    };
    var array2 = this.state.array;
    array2.push(object);
    this.setState({ array: array2 });

    const list = firebase.database().ref();
    list.push(object);
  };

  componentDidMount() {
    const list = firebase.database().ref();
    list.on("value", snapshot => {
      let objects = snapshot.val();
      console.log(snapshot.val());
      let sorted = [];
      var pictures = [
        "https://lh3.googleusercontent.com/-inZL_LqORKc/WBUmuFQ7TRI/AAAAAAAAE68/nw5n2k9aGyY72RFidHMZ66_SBrXdB1-AgCJoC/w530-h859-n/Poptropica%2BOctavian.png",
        "http://poptropicahelpblogcomau.weebly.com/uploads/3/9/8/5/39850733/7461098.png?182",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16re6iIV57VR7HFE3-qyhiRkEFd_0q18ZsloKmwp_6c1p1sLP",
        "http://poptropica.files.wordpress.com/2008/12/hold-a-cup-cheat1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IR7fBH1afgPvRfQWVx2Tl9tYXmvm4-vn1FQKM5a8rtgYhYf0",
        "http://4.bp.blogspot.com/--xB9rqx25qA/Tl7HSayX54I/AAAAAAAAADM/JReFox-WjYc/s1600/poptropican.jpg",
        "https://vignette.wikia.nocookie.net/poptropica-help/images/c/cf/Bikini_Girl.png/revision/latest?cb=20120219212518",
        "http://2.bp.blogspot.com/-CHQQlyivID0/TlgbfxBiCJI/AAAAAAAAADE/sO9VStpoPAA/s1600/poptropican.jpg",
        "https://poptropicaoutfitblog.files.wordpress.com/2011/07/poptropican9.jpg",
        "https://poptropica.files.wordpress.com/2009/03/hold-a-cup-cheat2.jpg",
        "http://iblogaboutpoptropica.files.wordpress.com/2012/01/blueice.jpg",
        "https://poptropicahelpblogcomau.weebly.com/uploads/3/9/8/5/39850733/7461098.png?182",
        "http://images6.fanpop.com/image/photos/40500000/Poptropica-Girl-poptropica-40557205-183-264.jpg",
        "https://magicalpoptropicahelp.files.wordpress.com/2013/06/poptropican-4.jpg",
        "https://poptropicahelpblogcomau.weebly.com/uploads/3/9/8/5/39850733/9343350.png?190",
        "http://poptropica.files.wordpress.com/2008/12/hold-a-cup-cheat1.jpg",
        "https://orig00.deviantart.net/6c7c/f/2010/262/b/6/poptropica_avatar_by_homertheman-d2z3jnr.jpg",
        "https://vignette.wikia.nocookie.net/poptropica/images/6/6e/Charlie_bucket.jpg/revision/latest?cb=20121116031040",
        "https://vignette.wikia.nocookie.net/poptropicafashion/images/b/bc/Mystery_Murderer_Boys.jpg/revision/latest?cb=20120701020637",
        "https://lh3.googleusercontent.com/-inZL_LqORKc/WBUmuFQ7TRI/AAAAAAAAE68/nw5n2k9aGyY72RFidHMZ66_SBrXdB1-AgCJoC/w530-h859-n/Poptropica%2BOctavian.png",
        "http://1.bp.blogspot.com/-In9KukHrJGI/Tl7HT6i5kTI/AAAAAAAAADQ/-0JxyuulMME/s1600/poptropican2.jpg",
        "https://vignette.wikia.nocookie.net/poptropica/images/3/34/Thomas_Edison_%28Mystery_Train%29.jpg/revision/latest?cb=20120507174114",
        "http://poptropicahelpblogcomau.weebly.com/uploads/3/9/8/5/39850733/7461098.png?182",
        "https://i.pinimg.com/736x/c0/0f/ff/c00fff91b85c4181c81dc55cb789f314--poptropica-fairy-outfits.jpg",
        "https://poptropica.files.wordpress.com/2008/10/tinker.png"
      ];
      var count = 1;

      for (let obj in objects) {
        var pic = pictures[Math.floor(Math.random() * pictures.length)];
        objects[obj].picture = pic;
        sorted.push(objects[obj]);
      }
      sorted.sort(function(a, b) {
        return b.cycles - a.cycles;
      });
      for (let obj in sorted) {
        if (count == 1) sorted[obj].color = "yellow";
        else if (count == 2) {
          sorted[obj].color = "gray";
          var x = sorted[obj];
        } else if (count == 3) {
          sorted[obj].color = "brown";
          var y = sorted[obj];
        } else if (count == 4) {
          sorted[obj].color = "black";
          var z = sorted[obj];
        } else sorted[obj].color = "black";

        sorted[obj].rank = count;
        count++;
      }
      var top3 = sorted.splice(0, sorted.indexOf(z));
      var one = top3.splice(0, top3.indexOf(x));
      var two = top3.splice(0, top3.indexOf(y));

      this.setState({ array: sorted });
      this.setState({ one: one });
      this.setState({ two: two });
      this.setState({ three: top3 });
    });
  }
  render() {
    const { classes, theme } = this.props;
    return (
      <div className="App">
        <Topbar />
        <br />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <center>
          <div class="pagebox">
            <p class="w3-jumbo0">Leaderboard:</p>

            <div class="top3box">
              Top 10:
              {this.state.one.map(entry => (
                <center>
                  <Paper className={classes.root} elevation={4}>
                    <Paper className={classes.rank}>
                      <div class="square1">
                        <p class="w3-jumbo1">{entry.rank}</p>
                      </div>
                    </Paper>
                    <img className={classes.cover} src={entry.picture} />
                    <Card className={classes.card}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="headline" class="userinfo">
                            User: {entry.name}
                          </Typography>
                          <Typography
                            variant="subheading"
                            color="textSecondary"
                            class="userinfo2"
                          >
                            Cycles: {entry.cycles}
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Paper>
                </center>
              ))}
              {this.state.two.map(entry => (
                <center>
                  <Paper className={classes.root} elevation={4}>
                    <Paper className={classes.rank}>
                      <div class="square2">
                        <p class="w3-jumbo2">{entry.rank}</p>
                      </div>
                    </Paper>
                    <img className={classes.cover} src={entry.picture} />
                    <Card className={classes.card}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="headline" class="userinfo">
                            User: {entry.name}
                          </Typography>
                          <Typography variant="subheading" class="userinfo2">
                            Cycles: {entry.cycles}
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Paper>
                </center>
              ))}
              {this.state.three.map(entry => (
                <center>
                  <Paper className={classes.root} elevation={4}>
                    <Paper className={classes.rank}>
                      <div class="square3">
                        <p class="w3-jumbo3">{entry.rank}</p>
                      </div>
                    </Paper>
                    <img className={classes.cover} src={entry.picture} />
                    <Card className={classes.card}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="headline" class="userinfo">
                            User: {entry.name}
                          </Typography>
                          <Typography variant="subheading" class="userinfo2">
                            Cycles: {entry.cycles}
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Paper>
                </center>
              ))}
              <center />
              {this.state.array.map(entry => (
                <center>
                  <Paper className={classes.root} elevation={4}>
                    <Paper className={classes.rank}>
                      <div class="square">
                        <p class="w3-jumbo">{entry.rank}</p>
                      </div>
                    </Paper>
                    <img className={classes.cover} src={entry.picture} />
                    <Card className={classes.card}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="headline" class="userinfo">
                            User: {entry.name}
                          </Typography>
                          <Typography variant="subheading" class="userinfo2">
                            Cycles: {entry.cycles}
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Paper>
                </center>
              ))}
            </div>
          </div>
        </center>
      </div>
    );
  }
}

Leaderboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(Leaderboard);
