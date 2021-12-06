import { render, screen } from '@testing-library/react';
import List from './List';
const options = [
    "Name",
    "Location",
    "Email",
    "DOB",
    "Gender"
];
const items = [
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Fatih",
            "last": "Köybaşı"
        },
        "location": {
            "street": {
                "number": 2716,
                "name": "Bağdat Cd"
            },
            "city": "Kars",
            "state": "Kayseri",
            "country": "Turkey",
            "postcode": 53082,
            "coordinates": {
                "latitude": "68.8819",
                "longitude": "-89.7966"
            },
            "timezone": {
                "offset": "-1:00",
                "description": "Azores, Cape Verde Islands"
            }
        },
        "email": "fatih.koybasi@example.com",
        "login": {
            "uuid": "6964d777-52f4-480b-b69f-a83d4401ead8",
            "username": "purplewolf685",
            "password": "gangster",
            "salt": "wk0sGcUn",
            "md5": "f9aa303488d1e7ea7d679f8739b00108",
            "sha1": "17ab3bcd29ca4447a23a22ef4a49cc9865d5489a",
            "sha256": "3d9df4b4f23d827fc4ae5d54d5074fbf74b4f86d02740dbe1c794de13b1543b1"
        },
        "dob": {
            "date": "1974-01-25T12:27:31.361Z",
            "age": 47
        },
        "registered": {
            "date": "2006-05-15T23:11:01.694Z",
            "age": 15
        },
        "phone": "(220)-196-8568",
        "cell": "(965)-303-1147",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/86.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/86.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/86.jpg"
        },
        "nat": "TR"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "John",
            "last": "Ross"
        },
        "location": {
            "street": {
                "number": 9700,
                "name": "Lone Wolf Trail"
            },
            "city": "Bowral",
            "state": "Northern Territory",
            "country": "Australia",
            "postcode": 3063,
            "coordinates": {
                "latitude": "34.4406",
                "longitude": "125.2228"
            },
            "timezone": {
                "offset": "-11:00",
                "description": "Midway Island, Samoa"
            }
        },
        "email": "john.ross@example.com",
        "login": {
            "uuid": "fa951512-7c05-48c0-b724-2599b784348e",
            "username": "lazytiger458",
            "password": "demon",
            "salt": "uILRBHsm",
            "md5": "0bf9d0b3ac17db31f34413318344ccd5",
            "sha1": "1a7d0c5aa8b1091fb805aab862d4fa14ba4f6d85",
            "sha256": "7825aea31ef9b78511d38e75a9951143c835a047cd38ad2a53fcf1d7b5101547"
        },
        "dob": {
            "date": "1990-01-12T04:57:15.355Z",
            "age": 31
        },
        "registered": {
            "date": "2009-12-18T23:34:22.375Z",
            "age": 12
        },
        "phone": "08-6005-4313",
        "cell": "0436-965-524",
        "id": {
            "name": "TFN",
            "value": "478894934"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/49.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/49.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Brayden",
            "last": "Murray"
        },
        "location": {
            "street": {
                "number": 8743,
                "name": "Station Road"
            },
            "city": "Arklow",
            "state": "Carlow",
            "country": "Ireland",
            "postcode": 24895,
            "coordinates": {
                "latitude": "-18.3452",
                "longitude": "121.9947"
            },
            "timezone": {
                "offset": "-10:00",
                "description": "Hawaii"
            }
        },
        "email": "brayden.murray@example.com",
        "login": {
            "uuid": "77da0187-5254-4bea-8937-7cddf7f57496",
            "username": "goldenbird897",
            "password": "wildone",
            "salt": "4bEHiaUH",
            "md5": "205fd59a52ab43b825e8f9deb2eaae5f",
            "sha1": "dab687a59c215ce4e022d0929251436537fbb03b",
            "sha256": "79ed8a8709c07ea1958a65dc1b62a13616446b21101d06270729cb4496ff10f0"
        },
        "dob": {
            "date": "1976-09-12T23:12:39.682Z",
            "age": 45
        },
        "registered": {
            "date": "2011-05-12T22:12:58.888Z",
            "age": 10
        },
        "phone": "071-812-8192",
        "cell": "081-443-1423",
        "id": {
            "name": "PPS",
            "value": "7794127T"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/31.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/31.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg"
        },
        "nat": "IE"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Megan",
            "last": "Van den Burg"
        },
        "location": {
            "street": {
                "number": 6635,
                "name": "Kelderswerf"
            },
            "city": "Hindeloopen",
            "state": "Drenthe",
            "country": "Netherlands",
            "postcode": 60139,
            "coordinates": {
                "latitude": "-71.1896",
                "longitude": "52.5193"
            },
            "timezone": {
                "offset": "-6:00",
                "description": "Central Time (US & Canada), Mexico City"
            }
        },
        "email": "megan.vandenburg@example.com",
        "login": {
            "uuid": "1dc002e0-7820-4b8f-90e9-85ee24d3f366",
            "username": "bigmeercat310",
            "password": "mnbv",
            "salt": "FZ8S3fcV",
            "md5": "1e2b8427bce6ee73a1ae77d64fcca8ce",
            "sha1": "dca9bd91ac551f6545ef77c951e98e3f655303d4",
            "sha256": "00a425527bc65466cc7bfd7538e86a4d8bd5fb8452a4ad327ddf7f5c0003be8a"
        },
        "dob": {
            "date": "1966-06-21T18:58:18.101Z",
            "age": 55
        },
        "registered": {
            "date": "2007-10-16T20:29:42.949Z",
            "age": 14
        },
        "phone": "(524)-469-1646",
        "cell": "(948)-008-5844",
        "id": {
            "name": "BSN",
            "value": "65736762"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/29.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
        },
        "nat": "NL"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Keith",
            "last": "Steward"
        },
        "location": {
            "street": {
                "number": 3641,
                "name": "Central St"
            },
            "city": "Dubbo",
            "state": "Western Australia",
            "country": "Australia",
            "postcode": 8021,
            "coordinates": {
                "latitude": "-32.2624",
                "longitude": "-118.0777"
            },
            "timezone": {
                "offset": "+4:00",
                "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
            }
        },
        "email": "keith.steward@example.com",
        "login": {
            "uuid": "745bcf72-3bbf-4ac7-bae5-088dfbe10c91",
            "username": "happywolf438",
            "password": "hatred",
            "salt": "GTLayuC0",
            "md5": "f5341ef549cacb5cea440f98ddbf9cfd",
            "sha1": "0506151fcd8cbc0749ae2a85b0ef8ba87150fbc1",
            "sha256": "004a6f4fc01745b30a822191f6efb8bc37c5c828af0670db985977161c2477b3"
        },
        "dob": {
            "date": "1976-03-28T23:11:38.591Z",
            "age": 45
        },
        "registered": {
            "date": "2012-08-19T21:38:54.434Z",
            "age": 9
        },
        "phone": "08-4988-9896",
        "cell": "0445-667-014",
        "id": {
            "name": "TFN",
            "value": "839518136"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/10.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/10.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/10.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Viktoria",
            "last": "Breistein"
        },
        "location": {
            "street": {
                "number": 8719,
                "name": "Hellinga"
            },
            "city": "Skotselv",
            "state": "Hedmark",
            "country": "Norway",
            "postcode": "3284",
            "coordinates": {
                "latitude": "13.8944",
                "longitude": "-95.7890"
            },
            "timezone": {
                "offset": "-7:00",
                "description": "Mountain Time (US & Canada)"
            }
        },
        "email": "viktoria.breistein@example.com",
        "login": {
            "uuid": "6548367a-f2a7-4af6-901d-9d66a8b5aba4",
            "username": "organicswan901",
            "password": "springer",
            "salt": "CaZOSfyf",
            "md5": "b06a8b88acdd22c1cbf6b80406c1178a",
            "sha1": "d9f049b8824e9fa82f801bd1e5ab29e9e1447f1f",
            "sha256": "7f3aba9ba51834938e15807c9f3be52a04f8071a690dbb1492a5568ff7df8c2b"
        },
        "dob": {
            "date": "1958-03-21T05:59:17.713Z",
            "age": 63
        },
        "registered": {
            "date": "2012-12-20T21:46:56.791Z",
            "age": 9
        },
        "phone": "21839738",
        "cell": "43876315",
        "id": {
            "name": "FN",
            "value": "21035842273"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/26.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/26.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
        },
        "nat": "NO"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Jack",
            "last": "Li"
        },
        "location": {
            "street": {
                "number": 139,
                "name": "3rd St"
            },
            "city": "Jasper",
            "state": "Manitoba",
            "country": "Canada",
            "postcode": "G9Y 8N5",
            "coordinates": {
                "latitude": "-81.8991",
                "longitude": "-89.8178"
            },
            "timezone": {
                "offset": "-3:00",
                "description": "Brazil, Buenos Aires, Georgetown"
            }
        },
        "email": "jack.li@example.com",
        "login": {
            "uuid": "9da515f7-8b90-4657-b66e-6991d7fedfef",
            "username": "bigfrog904",
            "password": "656565",
            "salt": "Z1KPL3AF",
            "md5": "1d686ab7bb29ffeca73a2cf99290c5a1",
            "sha1": "621493432f5f85ce9bcae63671e8cc45e53cad17",
            "sha256": "44055813ed6dc771712ad865d1007e3a9dd908d1b53bfb834a6ff9f50a445476"
        },
        "dob": {
            "date": "1963-09-28T19:24:28.153Z",
            "age": 58
        },
        "registered": {
            "date": "2011-05-28T08:01:43.121Z",
            "age": 10
        },
        "phone": "889-188-8021",
        "cell": "899-015-6756",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/52.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
        },
        "nat": "CA"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Leo",
            "last": "Kelly"
        },
        "location": {
            "street": {
                "number": 566,
                "name": "Adams St"
            },
            "city": "Wagga Wagga",
            "state": "Australian Capital Territory",
            "country": "Australia",
            "postcode": 2279,
            "coordinates": {
                "latitude": "31.4926",
                "longitude": "-11.9778"
            },
            "timezone": {
                "offset": "+3:00",
                "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
            }
        },
        "email": "leo.kelly@example.com",
        "login": {
            "uuid": "8a9c117d-5f92-4c15-accd-f122d5b5e70d",
            "username": "sadleopard484",
            "password": "vodka",
            "salt": "KRRZ2b42",
            "md5": "3e5c5faa7e5a4701b984513643a0b6b7",
            "sha1": "1f4c5501637b89f00aff20a2d4983c2696038b08",
            "sha256": "50583e2d705f73f6981f8b49f8482010f053ffbc1d9a0a92db73c8f5aa421fe8"
        },
        "dob": {
            "date": "1966-03-02T12:38:59.420Z",
            "age": 55
        },
        "registered": {
            "date": "2011-03-07T22:21:27.338Z",
            "age": 10
        },
        "phone": "04-6912-9336",
        "cell": "0444-098-961",
        "id": {
            "name": "TFN",
            "value": "655201212"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/51.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Isabel",
            "last": "Cooper"
        },
        "location": {
            "street": {
                "number": 558,
                "name": "Bealey Avenue"
            },
            "city": "Gisborne",
            "state": "Auckland",
            "country": "New Zealand",
            "postcode": 92185,
            "coordinates": {
                "latitude": "26.1619",
                "longitude": "75.8623"
            },
            "timezone": {
                "offset": "+5:45",
                "description": "Kathmandu"
            }
        },
        "email": "isabel.cooper@example.com",
        "login": {
            "uuid": "161d9ee4-9412-4d5f-85e7-6eb962825176",
            "username": "heavyelephant702",
            "password": "lang",
            "salt": "x2V1E4tN",
            "md5": "785cfcabd7d819f0d61fe3a063faaeec",
            "sha1": "e3d0c46ab24e4d45aa3d4316ff7c74b42ccbc6b4",
            "sha256": "b774bea1308b87df416ca2aefb671072e8baec426315ff618d84e8b6169360d3"
        },
        "dob": {
            "date": "1968-07-21T01:21:36.144Z",
            "age": 53
        },
        "registered": {
            "date": "2006-10-22T08:41:59.730Z",
            "age": 15
        },
        "phone": "(074)-136-3860",
        "cell": "(043)-422-1858",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/90.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/90.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/90.jpg"
        },
        "nat": "NZ"
    },
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Heather",
            "last": "Bailey"
        },
        "location": {
            "street": {
                "number": 2064,
                "name": "Robinson Rd"
            },
            "city": "Chesapeake",
            "state": "Iowa",
            "country": "United States",
            "postcode": 78802,
            "coordinates": {
                "latitude": "5.3769",
                "longitude": "-57.9759"
            },
            "timezone": {
                "offset": "+5:30",
                "description": "Bombay, Calcutta, Madras, New Delhi"
            }
        },
        "email": "heather.bailey@example.com",
        "login": {
            "uuid": "0173add9-a9e6-4801-9e58-8ddf2edd132d",
            "username": "smallladybug321",
            "password": "cook",
            "salt": "4JoXkhlE",
            "md5": "7f62f9eca3661e4c966e5d7e3ab255c4",
            "sha1": "5e31de97a74edebe703ea9e30b801d9ca016cbb9",
            "sha256": "ac6a2b266d829df266cc7a57bd84b9f59c6b841f544c47fd6662464c069f882f"
        },
        "dob": {
            "date": "1968-09-28T07:38:53.721Z",
            "age": 53
        },
        "registered": {
            "date": "2012-07-06T07:44:49.057Z",
            "age": 9
        },
        "phone": "(137)-569-5367",
        "cell": "(849)-439-6622",
        "id": {
            "name": "SSN",
            "value": "298-30-9402"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/61.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/61.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/61.jpg"
        },
        "nat": "US"
    }
];
const filterType = "name";
test('renders list', () => {
  render(<List filterOptions={options} filterType={filterType} currentItems={items} />);
});
