import PropTypes from 'prop-types';

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from 'react';

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
    return (
      
        <div css={[themeStyle, customStyle]}>
            <h3>Pipeline Agents</h3>
            <div className="agents">
                {agentList ? ( 
                        <React.Fragment>
                            {
                                agentList.map(item => {
                                    return (<img className="agent-image" src={`agent-${item}`} alt={item} />)
                                })
                            }
                        </React.Fragment>
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
