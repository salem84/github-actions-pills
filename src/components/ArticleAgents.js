import PropTypes from 'prop-types';

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from 'react'
import Image from 'gatsby-image'

const style = css`
  margin-bottom: 30px;

  .agents {
      margin-top: 10px;
      display: flex;
  }

  .agent-image {
      border-radius: 50%;
  }
`;

const ArticleAgents = props => {
    const { agentList, themeStyle = style, customStyle = '' } = props;
    // const agents = agentList?.reduce((a, curItem) => {
    //     if(agentDetails.find(agent => agent.name === curItem)) {
    //         return agent;
    //     }
    // });

    // const agents = agentList?.map(item => {
    //     return agentDetails.find(agent => agent.name === item);
    // });

    return (
      
        <div css={[themeStyle, customStyle]}>
            <h3>Pipeline Agents</h3>
            <div className="agents">
                { agentList && (agentList.length > 0) ? ( 
                    agentList.map(agent => {
                        // TODO: set width on GraphQL
                        return (
                            <Image 
                            fluid={agent.icon.childImageSharp.fluid}
                            alt={agent.id}
                            style={{
                                width: 40
                            }}
                            />
                        )
                    })
                    ) : (  
                        <span>Not specified</span>
                    )
                }
            </div>
        </div>
      );
  
  
};

ArticleAgents.propTypes = {
  agentList: PropTypes.array,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default ArticleAgents;
