import React, {Component, PropTypes } from "react";
import VoterGuideStore from "../stores/VoterGuideStore";
import VoterGuideItem from "../components/VoterGuide/VoterGuideItem";

{/* VISUAL DESIGN HERE: https://invis.io/TR4A1NYAQ */}

export default class Opinions extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  constructor (props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount () {
    VoterGuideStore.initialize( voter_guide_list => this.setState({ voter_guide_list }));
  }

  render () {
    const { voter_guide_list } = this.state;

    console.log(voter_guide_list);

    const opinions =
      <div>
        <div className="container-fluid well gutter-top--small fluff-full1">
          <h3 className="text-center">More Opinions I Can Follow</h3>
          {/*
            <input type="text" name="search_opinions" className="form-control"
                 placeholder="Search by name or twitter handle." />
          */}
          <p>
            These organizations and public figures have opinions about items on your
                      ballot. Click the "Follow" button to pay attention to them.
          </p>

          <div className="voter-guide-list">
            { voter_guide_list ? voter_guide_list
                .map( item => <VoterGuideItem key={item.we_vote_id} {...item} /> ) :
                <div className="box-loader">
                  <i className="fa fa-spinner fa-pulse"></i>
                  <p>Loading ... One Moment</p>
                </div>
            }
          </div>
        </div>
      </div>;

    return opinions;
  }
}
