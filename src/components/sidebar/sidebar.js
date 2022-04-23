import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--dark-grey);
    height: 100vh;
    width: 15%;
    
`;
export const Container = styled.div`
    background-color: var(--bg-color);
    width: 98%;
    height: 100vh;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
`;
export const Logo = styled.div`
    height: 6rem;
    width: 100%;
    display:flex ;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;

    img{
        height: 5rem;
        width: 5rem;
    }
    p{
        font-weight: 900;
        font-size: 2.5rem;
        margin-left: 1rem;
    }
`;
export const List = styled.ul`
    margin-top: 5rem;
    width: 100%;
`;
export const ListItem = styled.li`
    display:flex ;
    /* justify-content: center; */
    align-items: center;
    margin-top: 4rem;
    background-color: var(--dark-grey);
    width: 90%;
    margin-left:auto ;
    padding:.7rem 0rem .7rem 1.5rem ;
    border-top-left-radius: 21px;
    border-bottom-left-radius: 11px;

    img{
        height: 4rem;
        width: 4rem;
    }
    p{
        color: var(--font--black);
        font-size: 1.65rem;
        font-weight: 900;
        margin-left: 2rem;
        user-select: none;
    }
`;
export const Dis = styled.div``;
export const Auth = styled.div``;