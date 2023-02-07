import { Link } from 'react-router-dom';
import { useChampions } from '../hooks';
import { ChampionCard, ChampionCardDescription, ChampionCardTitle } from '../styled-components';

export const ChampionsList = () => {
  const { champions, isLoading } = useChampions();
 
	return (
		<>
			{isLoading ? (
				<div>Cargando...</div>
			) : (
				<>
            {champions.map(({ id, title, ImageUrl, name }) => (
              <Link key={id} to={`/champion/${id}`} >
						<ChampionCard image={ImageUrl}>
							<ChampionCardTitle>{name}</ChampionCardTitle>
							<ChampionCardDescription>{title}</ChampionCardDescription>
						</ChampionCard>
            </Link>
					))}
				</>
			)}
		</>
	);
};