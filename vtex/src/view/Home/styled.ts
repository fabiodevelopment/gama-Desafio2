import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    
    section { 
        height: 100vh;
        width: 100%;
        background: #e2e2;
        display: flex;

        .product-content {
            display: grid;
            text-align: center;
            height: 300px;
            background: #FFFFFF;
            border-radius: 5px;
            padding: 12px;
        }
    }
`