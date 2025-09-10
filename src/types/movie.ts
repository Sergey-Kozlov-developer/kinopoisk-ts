export interface Movie {
	id: number;
	name: string;
	alternativeName: string;
	type: string;
	year: number;
	movieLength: number;
	description: string;
	rating: {
		kp: number;
		imdb: number;
		filmCritics: number;
		russianFilmCritics: number;
		await: number;
	};
	ageRating: number;
	poster: {
		url: string;
		previewUrl: string;
	};
	genres: Array<{
		name: string;
	}>;
	countries: Array<{
		name: string;
	}>;
	persons: Array<{
		name: string;
		photo: string;
	}>;
}
