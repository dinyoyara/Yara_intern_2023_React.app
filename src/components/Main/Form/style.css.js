import styled from 'styled-components';

const StyledForm = styled('form')`
    width: ${(p) => p.width};
    margin: 20px 50px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default StyledForm;
