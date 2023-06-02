import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { api } from '../../services/api';
import { Character } from '../../types/Character.type';
import { CharacterContainer, Container } from './styles';

export default function CharacterPage() {
  const [data, setData] = useState<Character>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  const getCharacterData = useCallback(async () => {
    try {
      const response = await api.get(`/people/${id}`);
      setData(response.data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getCharacterData();
  }, [getCharacterData]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <CharacterContainer>
          <div className="character-data">
            <div className="character-data-details">
              <h1>{data?.name}</h1>
              <p>
                <b> Data de nascimento:</b>
                <span>{data?.birth_year}</span>
              </p>
              <p>
                <b>Altura:</b>
                <span>
                  {data?.height}
                  cm
                </span>
              </p>
            </div>
          </div>

          <div className="character-image">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt={`Imagem de ${data?.name}`}
            />
          </div>
        </CharacterContainer>
      )}
    </Container>
  );
}
