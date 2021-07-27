import { css } from '@emotion/react';

const categoriesListbox=css`
    text-align: center;

    h2 {
        
    }

    .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    .grid a {
        border-radius: 8px;
        padding: 20px 12px;
        margin-bottom: 6px;
        text-decoration: none;
        
    }

    .grid a:hover {
        background-color: #eee;
    }
`;

export default categoriesListbox;