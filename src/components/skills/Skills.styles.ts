import styled from 'styled-components'
import { flexCenter, primaryColor } from '../../Global.styles'

export const SkillTitle = styled.span`
    ${flexCenter}
    color: white;
`

export const Skill = styled.div`
    ${flexCenter}
    flex-direction: column;
    width: 200px;
    padding: 20px;

    .canvas{
    }
`

export const SkillsWrap = styled.div`
    ${flexCenter}
    max-width: 800px;
    flex-wrap: wrap;
`