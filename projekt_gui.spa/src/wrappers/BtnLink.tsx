import React from "react";
import { Button, ButtonAppearance, IconButton } from 'evergreen-ui';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

interface BtnProps {
    label?: string;
    size?: BtnPropsSize;
    apperance?: ButtonAppearance;
    link?: string;
}

interface Props<BtnProps> {
    data: BtnProps;
}

type BtnPropsSize = 'small' | 'medium' | 'large';

const BtnLink = ({data}: Props<BtnProps>) => {

        const css = `.btn {
            outline: none;
        }
        
        .btn:before {
            backgroud-color: none;
        }
        `;

        return (
            <Button appearance={data.apperance} size={data.size} className="btn" is={Link} to={data.link ?? '/'}>
                {data.label}
            </Button>
        )
}

BtnLink.defaultProps = {
    label: 'Default label',
    size: 'small',
    apperance: 'primary',
    link: '/'
};

export default BtnLink;