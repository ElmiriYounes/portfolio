import styled from 'styled-components'
import { flexCenter, SubTitle } from '../../Global.styles'

export const Hobbies = styled.div`
    ${flexCenter}
    flex-wrap: wrap;

    .canvas{
        width: 100px !important;
        margin: 20px 20px 0 20px !important;
    }

    .canvas:last-child{
        width: 250px !important;
    }
`

export const AboutWrap = styled.div`
    max-width: 800px;

    p{
        margin-top: 20px;
    }

    ${SubTitle}{
        margin-top: 20px;
        width: fit-content;
    }

    ${SubTitle}:first-child{
        margin-top: inherit;
    }
`