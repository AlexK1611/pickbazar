import styled from 'styled-components'

export const TextComponent = styled.span<{
    fontSize: string,
    color: string
}>`
    font-size: ${props => props.fontSize || '15px'};
    font-weight: 700;
    color: ${props => props.color || '#000'};
    text-decoration: underline;
    margin-left: 5px;
    cursor: pointer;
`