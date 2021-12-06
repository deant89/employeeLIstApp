import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
const mockdata = [
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Valentine",
            "last": "Perrin"
        },
        "location": {
            "street": {
                "number": 717,
                "name": "Avenue Goerges Clémenceau"
            },
            "city": "Poitiers",
            "state": "Loire-Atlantique",
            "country": "France",
            "postcode": 86512,
            "coordinates": {
                "latitude": "0.7472",
                "longitude": "128.9275"
            },
            "timezone": {
                "offset": "+3:30",
                "description": "Tehran"
            }
        },
        "email": "valentine.perrin@example.com",
        "login": {
            "uuid": "fc4911b9-d41e-4b2a-9251-0daae0cc1d9c",
            "username": "bigbear879",
            "password": "fright",
            "salt": "pg6SiMgl",
            "md5": "2a9c6cbed18efe4688cc05b413a9680e",
            "sha1": "41f750843a3ca6fcbd00b1532ed74f2344197039",
            "sha256": "12bc72e00f55e178e5419c40888606db0cb1e113f9e1bea99f6aa8eeb2c33ba2"
        },
        "dob": {
            "date": "1979-06-09T08:43:10.383Z",
            "age": 42
        },
        "registered": {
            "date": "2014-03-05T06:46:09.077Z",
            "age": 7
        },
        "phone": "01-77-08-67-08",
        "cell": "06-30-97-06-82",
        "id": {
            "name": "INSEE",
            "value": "2NNaN17342178 84"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/86.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/86.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
        },
        "nat": "FR"
    },
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Gonca",
            "last": "Toraman"
        },
        "location": {
            "street": {
                "number": 912,
                "name": "Abanoz Sk"
            },
            "city": "Kastamonu",
            "state": "Karaman",
            "country": "Turkey",
            "postcode": 31017,
            "coordinates": {
                "latitude": "-80.2990",
                "longitude": "125.6483"
            },
            "timezone": {
                "offset": "-4:00",
                "description": "Atlantic Time (Canada), Caracas, La Paz"
            }
        },
        "email": "gonca.toraman@example.com",
        "login": {
            "uuid": "51eb0bd3-3c56-431c-9d9f-97c14167d33d",
            "username": "redgorilla360",
            "password": "franks",
            "salt": "l1EAqbHC",
            "md5": "70d15479b48e4c0c633f66a1e82e8e7a",
            "sha1": "1cd240d3ad792f38ef9bb4f4c5375541d349d885",
            "sha256": "b9e670d1673e46dfe31f42763a43495dbbf6d16dc196a41cc1ebbe48a313e645"
        },
        "dob": {
            "date": "1957-02-19T21:11:16.003Z",
            "age": 64
        },
        "registered": {
            "date": "2018-02-19T03:28:46.709Z",
            "age": 3
        },
        "phone": "(302)-184-3865",
        "cell": "(873)-065-0978",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/73.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
        },
        "nat": "TR"
    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Janis",
            "last": "Rocha"
        },
        "location": {
            "street": {
                "number": 6441,
                "name": "Rua São José "
            },
            "city": "Londrina",
            "state": "Rio de Janeiro",
            "country": "Brazil",
            "postcode": 59050,
            "coordinates": {
                "latitude": "-2.1316",
                "longitude": "-28.1927"
            },
            "timezone": {
                "offset": "-1:00",
                "description": "Azores, Cape Verde Islands"
            }
        },
        "email": "janis.rocha@example.com",
        "login": {
            "uuid": "40875a64-3ec6-4042-875e-99eb50980fce",
            "username": "bigwolf334",
            "password": "clippers",
            "salt": "vjZjTByW",
            "md5": "2b8b57b982c416c60b6b651e964a8da2",
            "sha1": "d6c1bb117f549a95091100d25491a7bddbc9f4eb",
            "sha256": "a881e0d774f051312e382961f2e5029f75393468a4f2e4a73a83c263faccbbcf"
        },
        "dob": {
            "date": "1967-02-04T06:50:21.076Z",
            "age": 54
        },
        "registered": {
            "date": "2013-08-16T01:14:07.622Z",
            "age": 8
        },
        "phone": "(89) 4559-2065",
        "cell": "(35) 8326-4071",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/7.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
        },
        "nat": "BR"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Adonias",
            "last": "Lopes"
        },
        "location": {
            "street": {
                "number": 7250,
                "name": "Rua José Bonifácio "
            },
            "city": "Lauro de Freitas",
            "state": "Amazonas",
            "country": "Brazil",
            "postcode": 11838,
            "coordinates": {
                "latitude": "-72.6967",
                "longitude": "43.7739"
            },
            "timezone": {
                "offset": "+5:00",
                "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
            }
        },
        "email": "adonias.lopes@example.com",
        "login": {
            "uuid": "7df6ac7a-852d-42b7-ac31-f46a1de698f3",
            "username": "yellowostrich589",
            "password": "christopher",
            "salt": "nZuQqVPI",
            "md5": "900553a389bd7b9d378f19e60c06181b",
            "sha1": "ec1916ae151ca8d45d96e6208a18593b4f8a97bf",
            "sha256": "d3ba0edfe5d4d95ae4e733bd3a6cdf1dd7cc475a9037a35308b67d37ea2e6800"
        },
        "dob": {
            "date": "1958-11-09T18:22:20.226Z",
            "age": 63
        },
        "registered": {
            "date": "2017-07-25T21:33:53.413Z",
            "age": 4
        },
        "phone": "(85) 4357-0324",
        "cell": "(58) 8015-2392",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/24.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
        },
        "nat": "BR"
    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Fabiën",
            "last": "Prent"
        },
        "location": {
            "street": {
                "number": 6382,
                "name": "De Oldehofstede"
            },
            "city": "Zeist",
            "state": "Groningen",
            "country": "Netherlands",
            "postcode": 97913,
            "coordinates": {
                "latitude": "-88.4257",
                "longitude": "50.8390"
            },
            "timezone": {
                "offset": "+9:00",
                "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
            }
        },
        "email": "fabien.prent@example.com",
        "login": {
            "uuid": "958d64a6-1b21-4608-bb57-103d5b4ca83f",
            "username": "bigbird597",
            "password": "husker",
            "salt": "Ueq0vXSb",
            "md5": "9ff6e3ebf5ec7d26e8508c654c40224c",
            "sha1": "32f91a791ad21c3dea11f97d9509100527ad9b9f",
            "sha256": "12b8f0e62286a84fda85ca40a4f25dd1088d774e8860d0af165e890a1c3b43dc"
        },
        "dob": {
            "date": "1963-08-15T23:06:29.761Z",
            "age": 58
        },
        "registered": {
            "date": "2008-06-19T04:38:53.283Z",
            "age": 13
        },
        "phone": "(702)-729-8182",
        "cell": "(790)-082-8324",
        "id": {
            "name": "BSN",
            "value": "96326479"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/0.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/0.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
        },
        "nat": "NL"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Carl",
            "last": "Thomsen"
        },
        "location": {
            "street": {
                "number": 3554,
                "name": "Højgårdstoften"
            },
            "city": "Aarhus",
            "state": "Syddanmark",
            "country": "Denmark",
            "postcode": 78688,
            "coordinates": {
                "latitude": "28.1674",
                "longitude": "15.9759"
            },
            "timezone": {
                "offset": "+5:00",
                "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
            }
        },
        "email": "carl.thomsen@example.com",
        "login": {
            "uuid": "4e3e8759-c154-478d-9128-35f3be48fea5",
            "username": "brownbutterfly959",
            "password": "franks",
            "salt": "943uTocp",
            "md5": "de2468a1d799840402aca9cf7801e721",
            "sha1": "59b23d91ec0f53af97b2f09974bfb1f38bb2a917",
            "sha256": "dd3f5c37cc308dc2e9f37b30f5753a8e02d9b253d3bf6c2571e9108b843d0dc0"
        },
        "dob": {
            "date": "1951-12-26T00:58:41.458Z",
            "age": 70
        },
        "registered": {
            "date": "2014-06-20T11:55:09.681Z",
            "age": 7
        },
        "phone": "62019249",
        "cell": "14099113",
        "id": {
            "name": "CPR",
            "value": "261251-4613"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/7.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/7.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/7.jpg"
        },
        "nat": "DK"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Nicolas",
            "last": "Andersen"
        },
        "location": {
            "street": {
                "number": 7128,
                "name": "Dieppe Ave"
            },
            "city": "Tecumseh",
            "state": "Nunavut",
            "country": "Canada",
            "postcode": "X7R 7W8",
            "coordinates": {
                "latitude": "85.2231",
                "longitude": "-44.7922"
            },
            "timezone": {
                "offset": "+5:00",
                "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
            }
        },
        "email": "nicolas.andersen@example.com",
        "login": {
            "uuid": "fc14f5cb-0720-4855-8c13-c3fd2e4bf10e",
            "username": "blackrabbit141",
            "password": "super",
            "salt": "Jyd4u9q3",
            "md5": "58303bf52d8c9c35ac1f027b5f0ffaa5",
            "sha1": "9dbe8b886f87cee1437cd84bc2676f9efa1bb0c4",
            "sha256": "4eb8cbacd0bc3475847f1f5d5a9009a25c4005a19e796d5e0c574bc944a7c746"
        },
        "dob": {
            "date": "1984-11-05T14:55:03.071Z",
            "age": 37
        },
        "registered": {
            "date": "2011-02-08T07:31:24.920Z",
            "age": 10
        },
        "phone": "152-860-1211",
        "cell": "446-561-9804",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/2.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
        },
        "nat": "CA"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Cecil",
            "last": "Reed"
        },
        "location": {
            "street": {
                "number": 5190,
                "name": "James St"
            },
            "city": "Warrnambool",
            "state": "Australian Capital Territory",
            "country": "Australia",
            "postcode": 5545,
            "coordinates": {
                "latitude": "-47.6371",
                "longitude": "122.8532"
            },
            "timezone": {
                "offset": "-11:00",
                "description": "Midway Island, Samoa"
            }
        },
        "email": "cecil.reed@example.com",
        "login": {
            "uuid": "537fa63a-7be5-472f-a550-fcfee5b30353",
            "username": "brownbird344",
            "password": "tasha1",
            "salt": "NOQNzq7J",
            "md5": "b47a9c09c813ab61450e08e08b821692",
            "sha1": "9747cbfe7c6d11b24add480f3fa4074645de2483",
            "sha256": "7f528c012921649b23697a0f88bee3844d53d27e716a9b348cce2e8328d34652"
        },
        "dob": {
            "date": "1949-03-08T18:06:45.170Z",
            "age": 72
        },
        "registered": {
            "date": "2015-12-08T15:34:47.321Z",
            "age": 6
        },
        "phone": "06-8587-7735",
        "cell": "0475-291-279",
        "id": {
            "name": "TFN",
            "value": "823789644"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/64.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/64.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/64.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Topias",
            "last": "Saarinen"
        },
        "location": {
            "street": {
                "number": 2729,
                "name": "Verkatehtaankatu"
            },
            "city": "Haapajärvi",
            "state": "North Karelia",
            "country": "Finland",
            "postcode": 11456,
            "coordinates": {
                "latitude": "-76.0899",
                "longitude": "163.8365"
            },
            "timezone": {
                "offset": "+5:30",
                "description": "Bombay, Calcutta, Madras, New Delhi"
            }
        },
        "email": "topias.saarinen@example.com",
        "login": {
            "uuid": "2b19311e-47f3-461e-b225-7a1425a0ab5e",
            "username": "ticklishfrog859",
            "password": "123aaa",
            "salt": "6bwShUYJ",
            "md5": "1acffbbf46727a2cea07e8b8abb9e1f4",
            "sha1": "8c0f9736196ca184a556111f274feb0ab7aec3b9",
            "sha256": "a0d0cc0b8698f3b64380e8718c6ce64cab9d737d638f588a215939ed37924679"
        },
        "dob": {
            "date": "1952-11-18T12:05:44.181Z",
            "age": 69
        },
        "registered": {
            "date": "2006-09-13T08:09:52.047Z",
            "age": 15
        },
        "phone": "05-505-764",
        "cell": "045-275-79-89",
        "id": {
            "name": "HETU",
            "value": "NaNNA137undefined"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/38.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
        },
        "nat": "FI"
    },
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Julie",
            "last": "Nordmo"
        },
        "location": {
            "street": {
                "number": 7688,
                "name": "Uelands gate"
            },
            "city": "Sunndalsøra",
            "state": "Akershus",
            "country": "Norway",
            "postcode": "0661",
            "coordinates": {
                "latitude": "10.0115",
                "longitude": "55.0090"
            },
            "timezone": {
                "offset": "+5:30",
                "description": "Bombay, Calcutta, Madras, New Delhi"
            }
        },
        "email": "julie.nordmo@example.com",
        "login": {
            "uuid": "960e5f4e-d2c0-4b80-b94d-b023236799a2",
            "username": "angrysnake893",
            "password": "printer",
            "salt": "cDPgdyjl",
            "md5": "b0d5da110ebe7cd1581f3d964b39d308",
            "sha1": "ce8c263a0a517081b4270f8f9046542db573b45c",
            "sha256": "942595a5021c7a2ad5c658a53f6ffa60d40237d94f164dea2df0c351d22b4308"
        },
        "dob": {
            "date": "1972-07-12T02:24:11.937Z",
            "age": 49
        },
        "registered": {
            "date": "2008-12-28T06:03:10.344Z",
            "age": 13
        },
        "phone": "78585656",
        "cell": "46879745",
        "id": {
            "name": "FN",
            "value": "12077233669"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/65.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
        },
        "nat": "NO"
    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Megan",
            "last": "Macdonald"
        },
        "location": {
            "street": {
                "number": 4297,
                "name": "Pine Rd"
            },
            "city": "Chelsea",
            "state": "British Columbia",
            "country": "Canada",
            "postcode": "O0R 7N0",
            "coordinates": {
                "latitude": "74.8334",
                "longitude": "123.1900"
            },
            "timezone": {
                "offset": "-10:00",
                "description": "Hawaii"
            }
        },
        "email": "megan.macdonald@example.com",
        "login": {
            "uuid": "17ebabdd-012b-4086-b06a-aaa64f9e3041",
            "username": "whitepanda298",
            "password": "maxine",
            "salt": "HPc29InY",
            "md5": "e022c1a72f65ecbc86c0ab4b58aeddab",
            "sha1": "a803da98236baa3de31b2c2f696ed97a166c1a55",
            "sha256": "5ce4bbb33b8689efde2381e45ae0ea483a37913f0302ac3c1023b0fb57109544"
        },
        "dob": {
            "date": "1981-03-25T17:38:17.562Z",
            "age": 40
        },
        "registered": {
            "date": "2006-04-25T23:30:39.174Z",
            "age": 15
        },
        "phone": "132-933-2275",
        "cell": "328-988-7329",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/16.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
        },
        "nat": "CA"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Anielo",
            "last": "Rezende"
        },
        "location": {
            "street": {
                "number": 304,
                "name": "Beco dos Namorados"
            },
            "city": "Cachoeiro de Itapemirim",
            "state": "Tocantins",
            "country": "Brazil",
            "postcode": 73746,
            "coordinates": {
                "latitude": "50.9689",
                "longitude": "51.9294"
            },
            "timezone": {
                "offset": "+9:00",
                "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
            }
        },
        "email": "anielo.rezende@example.com",
        "login": {
            "uuid": "ad8cccb6-8c84-4f24-8fd4-5cdf976867ed",
            "username": "saddog822",
            "password": "mitch",
            "salt": "Q1Dl3Qmd",
            "md5": "be7a15f5cd26729133d269a849fd60fd",
            "sha1": "168d1059f96cf6444800ffdf1d05f949ba8a1743",
            "sha256": "fe01e5091df9d85d03d5e52b04b6f8671cbe547a0eaaca0d0c99a9e732070c89"
        },
        "dob": {
            "date": "1960-06-12T14:01:28.706Z",
            "age": 61
        },
        "registered": {
            "date": "2016-12-27T20:10:47.979Z",
            "age": 5
        },
        "phone": "(16) 5043-1119",
        "cell": "(89) 4269-8707",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/4.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
        },
        "nat": "BR"
    },
    {
        "gender": "male",
        "name": {
            "title": "Monsieur",
            "first": "Ramadan",
            "last": "Masson"
        },
        "location": {
            "street": {
                "number": 5959,
                "name": "Avenue de la République"
            },
            "city": "Riva San Vitale",
            "state": "Glarus",
            "country": "Switzerland",
            "postcode": 9728,
            "coordinates": {
                "latitude": "37.0094",
                "longitude": "-81.7642"
            },
            "timezone": {
                "offset": "0:00",
                "description": "Western Europe Time, London, Lisbon, Casablanca"
            }
        },
        "email": "ramadan.masson@example.com",
        "login": {
            "uuid": "f050e05b-1cc9-40d5-9246-7818ba793b8b",
            "username": "sadladybug745",
            "password": "klaus",
            "salt": "njXvGoaE",
            "md5": "50a2012b1940120b9ae3c64138d33e51",
            "sha1": "b4789e16e546eafabc530a63e7cfc0f91d402d54",
            "sha256": "fe9b2369b0bfa8b732d96987c022fd0ff86cf3064bca138cfeeabee7ee6b0fe2"
        },
        "dob": {
            "date": "1957-10-20T17:10:08.544Z",
            "age": 64
        },
        "registered": {
            "date": "2019-06-05T11:47:12.274Z",
            "age": 2
        },
        "phone": "077 171 02 85",
        "cell": "079 242 06 71",
        "id": {
            "name": "AVS",
            "value": "756.1671.7553.46"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/80.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/80.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/80.jpg"
        },
        "nat": "CH"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Marjorie",
            "last": "Hudson"
        },
        "location": {
            "street": {
                "number": 8456,
                "name": "Oak Lawn Ave"
            },
            "city": "Milwaukee",
            "state": "Washington",
            "country": "United States",
            "postcode": 59270,
            "coordinates": {
                "latitude": "78.3998",
                "longitude": "134.8668"
            },
            "timezone": {
                "offset": "-8:00",
                "description": "Pacific Time (US & Canada)"
            }
        },
        "email": "marjorie.hudson@example.com",
        "login": {
            "uuid": "f25acd79-5bce-4c0c-87a1-0623b0ce86ad",
            "username": "angryfish778",
            "password": "viking",
            "salt": "0v3Wp9En",
            "md5": "25011d7b9bd58977f348481b205e6091",
            "sha1": "84bcfd9117edb49c58eba57ef11187426666d566",
            "sha256": "08f246c88764ab29e9c68d37fe5f830cf3c8565767900fa9359b1d33ab06767b"
        },
        "dob": {
            "date": "1958-02-22T04:20:33.139Z",
            "age": 63
        },
        "registered": {
            "date": "2010-08-03T02:27:13.210Z",
            "age": 11
        },
        "phone": "(420)-572-3526",
        "cell": "(684)-355-3489",
        "id": {
            "name": "SSN",
            "value": "015-06-5352"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/59.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "female",
        "name": {
            "title": "Madame",
            "first": "Viktoria",
            "last": "Rousseau"
        },
        "location": {
            "street": {
                "number": 8293,
                "name": "Rue du 8 Mai 1945"
            },
            "city": "Daillens",
            "state": "Genève",
            "country": "Switzerland",
            "postcode": 3287,
            "coordinates": {
                "latitude": "55.2771",
                "longitude": "12.0915"
            },
            "timezone": {
                "offset": "-7:00",
                "description": "Mountain Time (US & Canada)"
            }
        },
        "email": "viktoria.rousseau@example.com",
        "login": {
            "uuid": "e8a8a6ac-cfc7-4851-aad9-b16b2248a0df",
            "username": "redmeercat345",
            "password": "peanut1",
            "salt": "WwFwJMnF",
            "md5": "889d15d50d832f544c6ec4a621ff055b",
            "sha1": "ee94b3cd00e545e60d6b0cb86b85d45da53eadba",
            "sha256": "8ebea35083fbfa94c0366b5a569fbd992c4a1ec4e0ab1602a3e0123bc11f80e9"
        },
        "dob": {
            "date": "1960-07-01T21:47:24.396Z",
            "age": 61
        },
        "registered": {
            "date": "2006-08-10T07:53:44.172Z",
            "age": 15
        },
        "phone": "078 173 30 44",
        "cell": "078 037 19 30",
        "id": {
            "name": "AVS",
            "value": "756.7044.7097.44"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/76.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/76.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/76.jpg"
        },
        "nat": "CH"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Wayne",
            "last": "Boyd"
        },
        "location": {
            "street": {
                "number": 9038,
                "name": "The Green"
            },
            "city": "Kilcoole",
            "state": "Tipperary",
            "country": "Ireland",
            "postcode": 15538,
            "coordinates": {
                "latitude": "9.3873",
                "longitude": "-99.0747"
            },
            "timezone": {
                "offset": "+3:30",
                "description": "Tehran"
            }
        },
        "email": "wayne.boyd@example.com",
        "login": {
            "uuid": "d9eb3a32-264f-4564-8b84-4cfddb54e81a",
            "username": "ticklishcat750",
            "password": "boston1",
            "salt": "CaHXc0jb",
            "md5": "8646e81119886c8ab1e2bf13dd5e4b17",
            "sha1": "a0983547c0fe41b0ce2f2e630b1026baf8885eb1",
            "sha256": "4fd5c9d6403e4f19a3bd55b721a14e7dd89d61366052e02de9d918d4e84f7eaa"
        },
        "dob": {
            "date": "1973-10-06T21:42:35.830Z",
            "age": 48
        },
        "registered": {
            "date": "2013-05-26T21:50:28.546Z",
            "age": 8
        },
        "phone": "031-467-5460",
        "cell": "081-072-6381",
        "id": {
            "name": "PPS",
            "value": "0942371T"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/25.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
        },
        "nat": "IE"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Ahmet",
            "last": "Aybar"
        },
        "location": {
            "street": {
                "number": 1803,
                "name": "Mevlana Cd"
            },
            "city": "Ankara",
            "state": "Samsun",
            "country": "Turkey",
            "postcode": 20831,
            "coordinates": {
                "latitude": "48.0136",
                "longitude": "13.1452"
            },
            "timezone": {
                "offset": "-3:00",
                "description": "Brazil, Buenos Aires, Georgetown"
            }
        },
        "email": "ahmet.aybar@example.com",
        "login": {
            "uuid": "0121dd01-2fba-4d73-aa30-9b2c4d029817",
            "username": "yellowduck371",
            "password": "rosie",
            "salt": "IOPo8h07",
            "md5": "213ede5de94ad5b12141e4f053de7ada",
            "sha1": "c603f49e3f6901fedcd3fdc242b80143b8b8ce77",
            "sha256": "cc3d49f227a1c6af1a67cac92cfe83e3bf08a0cbf0f0712a59d42956be805191"
        },
        "dob": {
            "date": "1959-10-22T23:24:47.688Z",
            "age": 62
        },
        "registered": {
            "date": "2017-12-29T12:01:43.328Z",
            "age": 4
        },
        "phone": "(723)-369-8530",
        "cell": "(767)-679-9496",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/25.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
        },
        "nat": "TR"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Arron",
            "last": "Lynch"
        },
        "location": {
            "street": {
                "number": 3130,
                "name": "Grove Road"
            },
            "city": "Portmarnock",
            "state": "Galway City",
            "country": "Ireland",
            "postcode": 87147,
            "coordinates": {
                "latitude": "-24.3076",
                "longitude": "-119.8701"
            },
            "timezone": {
                "offset": "-8:00",
                "description": "Pacific Time (US & Canada)"
            }
        },
        "email": "arron.lynch@example.com",
        "login": {
            "uuid": "22eef749-fdb0-4b32-8a79-0b5532c58307",
            "username": "purplemouse426",
            "password": "ladder",
            "salt": "3QEBapdl",
            "md5": "07c78365c4468c4b4b63c768e16a8c8f",
            "sha1": "c3ea6c7b3c58e63fc5542c721b894adc7c5bbce9",
            "sha256": "147d27252ec53717e5423a5662c9d10cf6e725e23f8952989746b13b4eaa7f74"
        },
        "dob": {
            "date": "1980-12-09T05:47:07.117Z",
            "age": 41
        },
        "registered": {
            "date": "2006-06-09T02:01:27.134Z",
            "age": 15
        },
        "phone": "041-011-8366",
        "cell": "081-413-5937",
        "id": {
            "name": "PPS",
            "value": "1309133T"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/97.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/97.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/97.jpg"
        },
        "nat": "IE"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Gonzalo",
            "last": "Arias"
        },
        "location": {
            "street": {
                "number": 3950,
                "name": "Calle de Argumosa"
            },
            "city": "Torrevieja",
            "state": "Melilla",
            "country": "Spain",
            "postcode": 99888,
            "coordinates": {
                "latitude": "3.4281",
                "longitude": "75.6354"
            },
            "timezone": {
                "offset": "+9:00",
                "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
            }
        },
        "email": "gonzalo.arias@example.com",
        "login": {
            "uuid": "7b3fcf72-b213-4e8d-8730-ab11ac1b9967",
            "username": "blueelephant344",
            "password": "blackie",
            "salt": "ZV1K7nyI",
            "md5": "bc3b9051495d859fec94705116b791c3",
            "sha1": "e1e48bbd363cf0f339e7fc0d860bfb796d673d7a",
            "sha256": "99297ea1047d425ce0296d2a9ab6269d4b1668be31b358a7d02709ef5a9fff74"
        },
        "dob": {
            "date": "1995-09-06T17:44:17.131Z",
            "age": 26
        },
        "registered": {
            "date": "2013-10-06T19:29:21.831Z",
            "age": 8
        },
        "phone": "921-075-053",
        "cell": "654-311-352",
        "id": {
            "name": "DNI",
            "value": "92759559-O"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/52.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
        },
        "nat": "ES"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mademoiselle",
            "first": "Sheila",
            "last": "Gauthier"
        },
        "location": {
            "street": {
                "number": 576,
                "name": "Avenue des Ternes"
            },
            "city": "Guttet-Feschel",
            "state": "Graubünden",
            "country": "Switzerland",
            "postcode": 9068,
            "coordinates": {
                "latitude": "34.1481",
                "longitude": "165.9069"
            },
            "timezone": {
                "offset": "+3:00",
                "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
            }
        },
        "email": "sheila.gauthier@example.com",
        "login": {
            "uuid": "ca6a2d98-f8f5-4ec3-b73f-04c3797308c4",
            "username": "smallbear779",
            "password": "williams",
            "salt": "r0YHIDms",
            "md5": "f0b11daeeacb54ed0ac4d7257648677f",
            "sha1": "23f13564dc4d2f877b18a96078f0a10e4cc14c29",
            "sha256": "a6f3450d88efc53163fcfb081df5dcc6c3efb37d2ff86b22af928fe0d5d6e9a9"
        },
        "dob": {
            "date": "1947-11-11T20:49:59.549Z",
            "age": 74
        },
        "registered": {
            "date": "2015-03-25T09:41:32.047Z",
            "age": 6
        },
        "phone": "077 473 67 92",
        "cell": "076 249 77 65",
        "id": {
            "name": "AVS",
            "value": "756.7215.9886.08"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/65.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
        },
        "nat": "CH"
    }
]
test('renders pagiation', () => {
  render(<Pagination pageNumbers={[1,2,3,4]} people={mockdata} />);
});
