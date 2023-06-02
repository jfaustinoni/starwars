import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`;

export const CharacterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .character-image {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .character-data {
    width: 100%;
    margin-right: 3rem;

    &-details {
      padding: 1rem;
      width: 100%;

      h1 {
        font-weight: 500;
        font-size: 2rem;
        margin-bottom: 2rem;
        display: inline-block;
        color: ${({ theme }) => theme.colors.primary.main};
      }

      p {
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    .character-image {
      margin-top: 2rem;
    }

    .character-data {
      margin-right: 0;
    }
  }

`;
