import PropTypes from 'prop-types';

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from 'react';

import agentDetails from '../../content/meta/agents';

const style = css`
  margin-bottom: 30px;

  .agents {
      margin-top: 10px;
  }

  .agent-image {
      border-radius: 50%;
  }
`;

const PipelineAgents = props => {
    const { agentList, themeStyle = style, customStyle = '' } = props;
    // const agents = agentList?.reduce((a, curItem) => {
    //     if(agentDetails.find(agent => agent.name === curItem)) {
    //         return agent;
    //     }
    // });

    const agents = agentList?.map(item => {
        return agentDetails.find(agent => agent.name === item);
    });

    return (
      
        <div css={[themeStyle, customStyle]}>
            <h3>Pipeline Agents</h3>
            <div className="agents">
                { agents && (agents.length > 0) ? ( 
                    agents.map(item => {
                        return (<img className="agent-image" src={`agent-${item.type}`} alt={item.name} />)
                    })
                    ) : (  
                        <span>Not specified</span>
                    )
                }
            </div>
        </div>
      );
  
  
};

PipelineAgents.propTypes = {
  agentList: PropTypes.array,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default PipelineAgents;
