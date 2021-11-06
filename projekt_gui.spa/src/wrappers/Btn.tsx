import React from "react";
import { Button, ButtonAppearance, IconButton } from 'evergreen-ui';
import PropTypes from 'prop-types';

interface BtnProps {
    label?: string;
    size?: BtnPropsSize;
    apperance?: ButtonAppearance;
}

interface Props<BtnProps> {
    data: BtnProps;
}

const defaultBtnProps: BtnProps = {
    label: 'Default label',
    size: 'small',
    apperance: 'primary'
}

type BtnPropsSize = 'small' | 'medium' | 'large';

const Btn = ({data}: Props<BtnProps>) => {

        const css = `.btn {
            outline: none;
        }
        
        .btn:before {
            backgroud-color: none;
        }
        `;

        return (
            <Button appearance={data.apperance} size={data.size} className="btn">
                {data.label}
            </Button>
        )
}

Btn.defaultProps = {
    label: 'Default label',
    size: 'small',
    apperance: 'primary'
};

export default Btn;