import PropTypes from 'prop-types';

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from 'react'

const style = css`

`;

const ArticleTags = props => {
    const { tagList, themeStyle = style, customStyle = '' } = props;
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
            <h3>Tags</h3>
            <div className="tags">
                { tagList && (tagList.length > 0) ? ( 
                    tagList.map(tag => {
                        return (
                            <span>{tag}</span>
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

ArticleTags.propTypes = {
  tagList: PropTypes.array,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default ArticleTags;
