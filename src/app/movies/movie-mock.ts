import { Movie } from './movie.interface';

export const MOVIES: Movie[] = [
    {
        id: 1,
        title: "Fight Club",
        subtitle: "",
        cover: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        director: "David Fincher",
        writer: 
        [
          "Chuck Palahniuk", 
          "Jim Uhls"
        ],
        cast: 
        [
          "Edward Norton",
          "Brad Pitt",
          "Meat Loaf",
          "Zach Grenier",
          "Richmond Arquette",
          "David Andrews",
          "George Maguire",
          "Eugenie Bondurant",
          "Helena Bonham Carter"
        ],
        releaseDate: "15 October 1999 (USA)",
        duration: 139,
        watched: true,
        watchedDate: 
        [
          "01.01.2007"
        ]
    },
    {
        id: 2,
        title: "Sinsegye",
        subtitle: "New World",
        cover: "https://m.media-amazon.com/images/M/MV5BMTYxODg5ODMxOV5BMl5BanBnXkFtZTcwNzkwMzYyOQ@@._V1_SY1000_CR0,0,676,1000_AL_.jpg",
        director: "Hoon-jung Park",
        writer: 
        [
          "Hoon-jung Park"
        ],
        cast: 
        [
          "Jung-jae Lee", 
          "Min-sik Choi", 
          "Jung-min Hwang"
        ],
        releaseDate: "21 February 2013 (South Korea)",
        duration: 135,
        watched: true,
        watchedDate: 
        [
          "01.01.2014"
        ]
    },
    {
        id: 3,
        title: "Inception",
        subtitle: "",
        cover: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        director: "Christopher Nolan",
        writer: 
        [
          "Christopher Nolan"
        ],
        cast: 
        [
          "Leonardo DiCaprio", 
          "Joseph Gordon-Levitt", 
          "Ellen Page",
          "Tim Hardy"
        ],
        releaseDate: "16 July 2010 (USA)",
        duration: 148,
        watched: true,
        watchedDate: 
        [
          "01.01.2011"
        ]
    },
    {
        id: 4,
        title: "Gisaengchung",
        subtitle: "Parasite",
        cover: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        director: "Bong Joon Ho",
        writer: 
        [
          "Bong Joon Ho"
        ],
        cast: 
        [
          "Kang-ho Song", 
          "Sun-kyun Lee", 
          "Yeo-jeong Jo "
        ],
        releaseDate: "8 November 2019 (USA)",
        duration: 132,
        watched: false,
        watchedDate: 
        [
          ""
        ]
    },
    {
        id: 5,
        title: "Joker",
        subtitle: "",
        cover: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        director: "Todd Phillips",
        writer: 
        [
          "Todd Phillips", 
          "Scott Silver"
        ],
        cast: 
        [
          "Joaquin Phoenix", 
          "Robert De Niro", 
          "Zazie Beetz"
        ],
        releaseDate: "4 October 2019 (USA)",
        duration: 122,
        watched: true,
        watchedDate: 
        [
          "01.04.2020"
        ]
    },
    {
        id: 6,
        title: "Ajeossi",
        subtitle: "The Man from Nowhere",
        cover: "https://m.media-amazon.com/images/M/MV5BMTgzMTkxNjAxNV5BMl5BanBnXkFtZTgwMDU3MDE0MjE@._V1_SY1000_CR0,0,697,1000_AL_.jpg",
        director: "Jeong-beom Lee",
        writer: 
        [
          "Jeong-beom Lee"
        ],
        cast: 
        [
          "Won Bin", 
          "Sae-ron Kim", 
          "Tae-hoon Kim"
        ],
        releaseDate: "5 August 2010 (South Korea)",
        duration: 119,
        watched: true,
        watchedDate: 
        [
          "01.01.2019"
        ]
    },
    {
        id: 7,
        title: "The Lincoln Lawyer",
        subtitle: "",
        cover: "https://m.media-amazon.com/images/M/MV5BMTQ4NDE4NTY5MV5BMl5BanBnXkFtZTcwODQyMTkxNA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        director: "Brad Furman",
        writer: 
        [
            "John Romano (screenplay)", 
            "Michael Connelly (novel)"
        ],
        cast: 
        [
          "Matthew McConaughey", 
          "Marisa Tomei", 
          "Ryan Phillippe"
        ],
        releaseDate: "18 March 2011 (USA)",
        duration: 118,
        watched: true,
        watchedDate: 
        [
          "01.01.2018"
        ]
    },
    {
        id: 8,
        title: "Inglourious Basterds",
        subtitle: "",
        cover: "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX675_AL_.jpg",
        director: "Quentin Tarantino",
        writer: 
        [
          "Quentin Tarantino"
        ],
        cast: 
        [
          "Brad Pitt", 
          "Diane Kruger", 
          "Eli Roth"
        ],
        releaseDate: "21 August 2009 (USA)",
        duration: 153,
        watched: true,
        watchedDate: 
        [
          "01.01.2012"
        ]
    },
    {
        id: 9,
        title: "Django Unchained",
        subtitle: "",
        cover: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        director: "Quentin Tarantino",
        writer: 
        [
          "Quentin Tarantino"
        ],
        cast: 
        [
          "Jamie Foxx", 
          "Christoph Waltz", 
          "Leonardo DiCaprio"
        ],
        releaseDate: "25 December 2012 (USA)",
        duration: 165,
        watched: true,
        watchedDate: 
        [
          "01.01.2013"
        ]
    },
    {
        id: 10,
        title: "The Dark Knight",
        subtitle: "",
        cover: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        director: "Christopher Nolan",
        writer: 
        [
          "Jonathan Nolan (screenplay)", 
          "Christopher Nolan (screenplay)"
        ],
        cast: 
        [
          "Christian Bale", 
          "Heath Ledger", 
          "Aaron Eckhart"
        ],
        releaseDate: "18 July 2008 (USA)",
        duration: 162,
        watched: true,
        watchedDate: 
        [
          "01.01.2009"
        ]
    }
];