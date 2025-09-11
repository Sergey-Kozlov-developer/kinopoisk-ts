export interface Person {
	id: number;
	name: string;
	enName: string;
	photo: string;
	sex: string;
	birthday: string;
	movies: Array<{
		id: number;
		name: string;
		alternativeName: string;
		rating: number;
		enProfession: string;
	}>;
}

/**
 * 
 * {
  "id": 54,
  "name": "Мишель Вейслер",
  "enName": "Michele Weisler",
  "photo": null,
  "sex": "Женский",
  "growth": null,
  "birthday": null,
  "death": null,
  "age": null,
  "birthPlace": [],
  "deathPlace": [],
  "spouses": [],
  "countAwards": null,
  "profession": [],
  "facts": [],
  "movies": [
    {
      "id": 1045479,
      "name": "Унабомбер",
      "alternativeName": "Unabomb",
      "rating": null,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 4698700,
      "name": "Дарби и мертвецы",
      "alternativeName": "Darby and the Dead",
      "rating": 5.74,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 1396212,
      "name": "Калейдоскоп поцелуев 3",
      "alternativeName": "The Kissing Booth 3",
      "rating": 6.037,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 1237316,
      "name": "Калейдоскоп поцелуев 2",
      "alternativeName": "The Kissing Booth 2",
      "rating": 6.434,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 1024882,
      "name": "Калейдоскоп поцелуев",
      "alternativeName": "The Kissing Booth",
      "rating": 6.387,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 909716,
      "name": "Звук",
      "alternativeName": "The Sound",
      "rating": 4.134,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 683746,
      "name": "Женщина в золотом",
      "alternativeName": "Woman in Gold",
      "rating": 7.367,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 739593,
      "name": "Пробуждение тьмы",
      "alternativeName": "Dark Awakening",
      "rating": null,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 634232,
      "name": "Крученый мяч",
      "alternativeName": "Trouble with the Curve",
      "rating": 7.078,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 582109,
      "name": "Гончие собаки",
      "alternativeName": "Hound Dogs",
      "rating": null,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 81750,
      "name": "Короли улиц",
      "alternativeName": "Street Kings",
      "rating": 7.227,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 61305,
      "name": "Звонок 2",
      "alternativeName": "The Ring Two",
      "rating": 6.296,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 804,
      "name": "Звонок",
      "alternativeName": "The Ring",
      "rating": 7.251,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 1555,
      "name": "Семнадцатилетние",
      "alternativeName": "Try Seventeen",
      "rating": 6.295,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 766,
      "name": "Новокаин",
      "alternativeName": "Novocaine",
      "rating": 6.398,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 11115,
      "name": "Бессмертные души",
      "alternativeName": "Soul Survivors",
      "rating": 5.349,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 11016,
      "name": "Отзвуки эха",
      "alternativeName": "Stir of Echoes",
      "rating": 6.847,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 3626,
      "name": "Поли",
      "alternativeName": "Paulie",
      "rating": 7.842,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 4172,
      "name": "Хлопушка и Вонючки",
      "alternativeName": "Slappy and the Stinkers",
      "rating": 6.594,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 2381,
      "name": "Эффект спускового курка",
      "alternativeName": "The Trigger Effect",
      "rating": 6.192,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 2998,
      "name": "Смерть на виду",
      "alternativeName": "Dead on Sight",
      "rating": 5.683,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 17442,
      "name": "Святые и грешники",
      "alternativeName": "Saints and Sinners",
      "rating": null,
      "general": false,
      "description": null,
      "enProfession": "producer"
    },
    {
      "id": 23278,
      "name": "Манчи",
      "alternativeName": "Munchie",
      "rating": 5.491,
      "general": false,
      "description": null,
      "enProfession": "producer"
    }
  ],
  "createdAt": "2025-01-19T12:36:27.644Z",
  "updatedAt": "2025-07-01T17:52:14.001Z"
 */
