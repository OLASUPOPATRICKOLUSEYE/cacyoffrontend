import React from 'react'
import Welcome from './Welcome';
import ChurchHistory from './ChurchHistory';
import MissionVision from './Mission';
import LeadershipTeam from './LeadershipTeam';
import StatementOfFaith from './StatementofFaith';
import OutreachAndCommunity from './OutreachCommunity';
import Facilities from './Facility';
import Mission from './Mission';
import Vision from './Vision';

const aboutUs = () => {
  return (
    <>
    <Welcome/>
    <ChurchHistory/>    
    <Mission/>
    <Vision/>
    <LeadershipTeam/>
    <StatementOfFaith/>
    <OutreachAndCommunity/>
    <Facilities/>
    </>
  )
}

export default aboutUs;