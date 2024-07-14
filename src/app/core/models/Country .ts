// Enum defining continents
export enum Continent {
  Africa = 'Africa',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America'
}

// Interface defining the structure of a Country object
export interface Country {
  name: string;         // Name of the country
  population: number;   // Population of the country
  area: number;         // Area of the country in square kilometers
  continent: Continent; // Continent where the country is located (enum Continent)
  gdp: number;          // GDP of the country in US dollars
  image: string;        // name of the image of the country
}