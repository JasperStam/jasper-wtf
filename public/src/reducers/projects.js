import { TYPE_GALLERY, TYPE_EXTERNAL, TYPE_DOWNLOAD, TYPE_VOID } from '../constants';

const base = [
    {
        id: 1,
        date: '2016-03-23',
        name: 'CY brainstorm',
        description: 'Eerste brainstorm met Code Yellow. Het bedrijf gaf aan dat ze verschillende time tracking oplossingen geprobeerd hadden, maar zonder veel succes.'
        + 'In deze brainstorm is er gekeken naar de mogelijkheid van taken als fysiek object',
        completed: true,
        type: TYPE_VOID,
        categories: [
            { name: 'Concept', progress: 10 },
        ],
    }, {
        id: 2,
        date: '2016-03-24',
        name: 'Beneficial Intelligence',
        description: 'Trendonderzoek naar Beneficial Intelligence, het principe om machine learning in te zetten voor de gebruiker. Hier is gekeken naar bestaande voorbeelden van BI, en nagedacht of dit voor Modus ingezet kon worden.',
        completed: true,
        type: TYPE_DOWNLOAD,
        url: 'Coolhunting_BI.pdf',
        categories: [
            { name: 'Trends', progress: 10 },
        ],
    }, {
        id: 3,
        date: '2016-03-24',
        name: 'VR Trendwatch',
        description: 'BI is volgens Ferry een macrotrend, om een wat kleinere trend te bekijken is er gekeken naar alle aspecten van de trend Virtual Reality en het Consumer Trend Canvas is hiervoor ingevuld',
        completed: true,
        type: TYPE_DOWNLOAD,
        url: 'Canvas_VR.JPG',
        categories: [
            { name: 'Trends', progress: 5 },
        ],
    }, {
        id: 4,
        date: '2016-04-04',
        name: 'Lego usertest',
        description: 'Om het fysieke aspect van Modus te valideren is er heel vroeg in het proces een user test opgezet. Deze test werd opgezet om te kijken of fysieke time tracking minder snel vergeten werd. Na het uitvoeren van deze test is de feedback gebruikt voor de volgende iteratie.',
        completed: true,
        type: TYPE_GALLERY,
        images: [
            'LEGO_0.jpg',
            'LEGO_1.jpg',
            'LEGO_2.JPG',
            'LEGO_3.JPG',
        ],
        categories: [
            { name: 'User testing', progress: 10 },
            { name: 'Iteratief werken en reflectie', progress: 10 },
        ],
    }, {
        id: 5,
        date: '2016-04-05',
        name: 'Planning concept',
        description: 'Uren bijhouden is meestal iets wat van de baas moet. De werknemer heeft er meestal niks aan, hier willen we met Modus verandering in brengen. Het idee was om een AI component in Modus in te bouwen, wat men suggesties gaf voor pauzes. Deze suggesties worden gebaseerd op waargenomen pause intervals die een hogere productiviteit opleveren. Productiviteit wordt gemeten door een combinatie van aantal commits en hoeveelheid code.',
        completed: true,
        type: TYPE_VOID,
        categories: [
            { name: 'Trends', progress: 5 },
            { name: 'Concept', progress: 10 },
        ],
    }, {
        id: 6,
        date: '2016-04-06',
        name: 'RocketKitz presentatie',
        description: 'Presentatie voor Media Innovations om de voortgang van ons concept te laten zien.',
        completed: true,
        type: TYPE_DOWNLOAD,
        url: 'RocketKitz_Presentatie.pptx',
        categories: [
            { name: 'Presentatie', progress: 20 },
        ],
    }, {
        id: 7,
        date: '2016-04-08',
        name: 'Modus NodeJS',
        description: 'De eerste werkende versie van modus. Hiervoor is gekozen voor NodeJS, aangezien deze snel is op te zetten en ik hier al veel ervaring mee heb.',
        completed: true,
        type: TYPE_EXTERNAL,
        url: 'https://github.com/JasperStam/nfc-timetracking/blob/db9502747b0039fce35cefb96ede1fb40ca56b14/server.js',
        urlDescription: 'nfc-timetracking/server.js',
        categories: [
            { name: 'Werking product', progress: 20 },
            { name: 'Technische haalbaarheid', progress: 5 },
            { name: 'Product', progress: 20 },
            { name: 'Iteratief werken en reflectie', progress: 5 },
        ],
    }, {
        id: 8,
        date: '2016-04-13',
        name: 'Modus Python',
        description: 'Na twee user tests met de client side NodeJS versie van Modus is gekozen voor een betere aanpak. Timestamps client side opslaan is niet betrouwbaar genoeg. In deze versie is gekozen voor een Python + Flask + SQLAlchemy backend. Dit was een goede kans is om een nieuwe taal te leren en nodig voor betrouwbare timestamps.',
        completed: true,
        type: TYPE_EXTERNAL,
        url: 'https://github.com/JasperStam/nfc-timetracking/tree/master/api',
        urlDescription: 'nfc-timetracking/api',
        categories: [
            { name: 'Werking product', progress: 30 },
            { name: 'Technische haalbaarheid', progress: 20 },
            { name: 'Product', progress: 20 },
            { name: 'Onderzoek', progress: 15 },
            { name: 'Iteratief werken en reflectie', progress: 10 },
        ],
    }, {
        id: 9,
        date: '2016-04-19',
        name: 'RocketKitz arduino',
        description: 'Voor ons Media Innovatie project, hebben we gekozen om geen werkende versie te maken. Wel was het nodig om aan het nerding aspect te voldoen. Hiervoor is gekeken naar alle hardware die nodig was voor een werkende versie en een render gemaakt om een beeld te krijgen.',
        completed: true,
        type: TYPE_GALLERY,
        images: [
            'ROCKETKITZ_0.png',
            'ROCKETKITZ_1.png',
            'ROCKETKITZ_2.png',
            'ROCKETKITZ_3.png',
        ],
        categories: [
            { name: 'Werking product', progress: 10 },
            { name: 'Artwork', progress: 20 },
            { name: 'Onderzoek', progress: 15 },
        ],
    }, {
        id: 10,
        date: '2016-04-20',
        name: 'Modus renders',
        description: 'Op dit moment was Modus alleen getest met versies waar nog niet over het uiterlijk is nagedacht. Om klanten een idee te geven van het eindproduct, heb ik een 3d model van tags en het dock gemodeleerd in Sketchup. Met behulp van VRay zijn hier renders van gemaakt.',
        completed: true,
        type: TYPE_GALLERY,
        images: [
            'MODUS_RENDER_0.jpg',
            'MODUS_RENDER_1.jpg',
            'MODUS_RENDER_2.jpg',
        ],
        categories: [
            { name: 'Artwork', progress: 10 },
            { name: 'Onderzoek', progress: 15 },
        ],
    }, {
        id: 11,
        date: '2016-04-22',
        name: 'Usertest Less or More 1',
        description: 'Voor deze user test is gekozen om een ander type gebruiker te testen. Dit was de eerste user test bij het bedrijf Less or More, een maatwerk website bedrijf wat uurtje factuurtje werkt. Dit was hun eerste aanraking met Modus en zorgde voor extreem positieve feedback. Dit gaf ons ook inzicht over mogelijke wensen voor de tags.',
        completed: true,
        type: TYPE_VOID,
        categories: [
            { name: 'User testing', progress: 20 },
            { name: 'Presentatie', progress: 15 },
            { name: 'Iteratief werken en reflectie', progress: 10 },
        ],
    }, {
        id: 12,
        date: '2016-04-23',
        name: 'Concept verbetering',
        description: 'Naar aanleiding van de afgelopen 2 user tests is er gekozen om ons concept iets aan te passen. Bij Code Yellow wordt er met tickets gewerkt, taken binnen een project. In de versie die daar getest is, werden de tags gekoppeld aan een ticket. Hierdoor kwam het fysieke aspect van Modus niet goed tot uiting, omdat de mentale link tussen tag en ticket te zwak was door een overschot aan tickets. Door successvolle tests met Less or More waar tijd bijhouden per project gaat, is er gekozen om tags te koppelen aan een project, niet aan een taak.',
        completed: true,
        type: TYPE_VOID,
        categories: [
            { name: 'Concept', progress: 10 },
        ],
    }, {
        id: 13,
        date: '2016-04-29',
        name: 'Usertest Less or More 2',
        description: 'De tweede usertest bij Less or More. De feedback van user test 1 is inmiddels geimplementeerd. Deze user test was achteraf niet extreem nuttig, aangezien alleen positieve dingen naar voren kwamen, geen aspecten die verbeterd konden worden.',
        completed: true,
        type: TYPE_VOID,
        categories: [
            { name: 'User testing', progress: 20 },
            { name: 'Presentatie', progress: 15 },
            { name: 'Iteratief werken en reflectie', progress: 3 },
        ],
    }, {
        id: 14,
        date: '2016-05-20',
        name: 'Onderzoek tags',
        description: 'Ik miste nog UX bewijslast en had iets nodig om te onderzoeken. Daarom heb ik onderzoek gedaan naar de ideale feel van de tag. Hiervoor heb ik tags van verschillende vormen gekleid en laten voelen door meerdere personen.',
        completed: true,
        type: TYPE_DOWNLOAD,
        url: 'Onderzoek_Productontwerp.pdf',
        categories: [
            { name: 'Onderzoek', progress: 10 },
            { name: 'UX', progress: 30 },
            { name: 'Iteratief werken en reflectie', progress: 5 },
            { name: 'User testing', progress: 10 },
            { name: 'Concept', progress: 10 },
            { name: 'Documentatie', progress: 30 },
        ],
    }, {
        id: 15,
        date: '2016-05-24',
        name: '3d printen tags',
        description: 'Nu er duidelijkheid was over de gewenste feel van de tag, kon er een productiesample van worden gemaakt. Hier zijn in totaal 3 iteraties van gemodelleerd in Blender. De eerste iteratie is geprint op de Fontys, de volgende 2 bij Shapeways.',
        completed: true,
        type: TYPE_GALLERY,
        images: [
            '3D_0.png',
            '3D_1.jpg',
            '3D_2.jpg',
            '3D_3.png',
        ],
        categories: [
            { name: 'Onderzoek', progress: 10 },
            { name: 'UX', progress: 5 },
            { name: 'Iteratief werken en reflectie', progress: 5 },
            { name: 'Product', progress: 10 },
        ],
    }, {
        id: 16,
        date: '2016-05-26',
        name: 'Poster',
        description: 'Voor de artwork rubric heb ik tot nu toe alleen nog maar renders gemaakt. Om ook grafisch werk in mijn portfolio op te nemen heb ik de poster ontworpen die we tijdens de markt lieten zien.',
        completed: true,
        type: TYPE_DOWNLOAD,
        url: 'Poster.pdf',
        categories: [
            { name: 'Artwork', progress: 20 },
        ],
    }, {
        id: 17,
        date: '2016-06-06',
        name: 'Tag designer',
        description: 'Deze periode had ik nog geen interface ontworpen. Aangezien ik het ontwerpen van de tags bezig ben geweest, leek het me verstandig om een interface te ontwerpen waar klanten hun tags mee konden ontwerpen en bestellen.',
        completed: true,
        type: TYPE_VOID,
        categories: [
            { name: 'Interface', progress: 10 },
            { name: 'UX', progress: 5 },
            { name: 'Product', progress: 5 },
        ],
    },
];

const projects = (state = [], action = { type: '' }) => {
    switch (action.type) {
        default:
            return base;
    }
};

export default projects;
