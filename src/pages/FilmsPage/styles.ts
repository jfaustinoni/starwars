import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;

  @media screen and (max-width: 480px) {
    padding: 1rem 0;
  }
`;

export const CharacterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .film-image {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .films-data {
    width: 100%;
    margin-right: 3rem;

    &-details {
      h1 {
        font-weight: 500;
        font-size: 2rem;
        display: inline-block;
        color: ${({ theme }) => theme.colors.primary.main};
      }

      p {
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }   

    &-characters {
      overflow: hidden;
      margin-top: 1rem;
      border-radius: 0.5rem;
      flex: 1;
      padding: 1rem;

      h2 {
        display: inline-block;
        color: #F0A500
      }

      ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 1rem;

        li {
          display: flex;
          align-items: center;
          list-style: none;
          flex: 1 0 25%;

          a {
            display: flex;
            align-items: center;
            color: #F0A500
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    .film-image {
      margin-top: 2rem;
    }

    .film-data {
      margin-right: 0;

      &-others {
        flex-direction: column;

        &-data {
          margin-top: 1rem;
        }
      }
    }
  }
`;
