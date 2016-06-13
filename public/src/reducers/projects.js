import { TYPE_GALLERY, TYPE_EXTERNAL, TYPE_DOWNLOAD, TYPE_VOID } from '../constants';

const base = [
    {
        id: 1,
        date: '2016-03-23',
        name: 'CY brainstorm',
        description: 'De grondslag van Modus, de eerste brainstorm met Code Yellow. Het bedrijf gaf aan dat tijd bijhouden wenselijk was om een beter inzicht te krijgen in kosten per project. Er waren verschillende time tracking oplossingen geprobeerd, maar geen zonder veel succes.'
        + 'In deze brainstorm is het idee ontstaan om een tickets als fysieke objecten te introduceren.',
        completed: true,
        type: TYPE_VOID,
        categories: [
            { name: 'Concept', progress: 10 },
        ],
    }, {
        id: 2,
        date: '2016-03-24',
        name: 'Beneficial Intelligence',
        description: 'Trendonderzoek naar Beneficial Intelligence, het principe om machine learning in te zetten voor de gebruiker. Hier is gekeken naar bestaande voorbeelden van BI en nagedacht of dit voor Modus ingezet kon worden.',
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
        description: 'BI is volgens Ferry een macrotrend, om een wat kleinere trend te bekijken is er gekeken naar alle aspecten van Virtual Reality. Hier is een Consumer Trend Canvas voor ingevuld',
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
        description: 'Om het fysieke aspect van Modus te valideren is er heel vroeg in het proces een user test opgezet. Deze test werd gemaakt om te valideren of het fysieke aspect van time tracking werkt. Na het uitvoeren van deze test is de feedback gebruikt voor de volgende iteratie.',
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
        description: 'Een groot probleem van uren bijhouden is dat mensen het vergeten. We hebben time tracking herleid naar be-goals. Hieruit bleek dat timetracking totaal niet UX verantwoord is voor werknemers, het is iets wat van de baas moet. De werknemer heeft er meestal niks aan, hier willen we met Modus verandering in brengen. We bedachten een concept om een AI component in Modus in te bouwen wat pauzesuggesties gaf. Deze suggesties worden gebaseerd op waargenomen pause intervals die een hogere productiviteit opleveren, deze productiviteit wordt gemeten door een combinatie van aantal commits en hoeveelheid code.',
        completed: true,
        type: TYPE_VOID,
        categories: [
            { name: 'Trends', progress: 5 },
            { name: 'UX', progress: 5 },
            { name: 'Concept', progress: 10 },
        ],
    }, {
        id: 6,
        date: '2016-04-06',
        name: 'RocketKitz presentatie',
        description: 'Om de voortgang van ons Media Innovatie product aan te tonen, heb ik een presentatie gegeven. Deze presentatie is hiernaast te downloaden.',
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
        description: 'In dit stadium was het nodig om een werkende versie te User Testen. Om deze werkende versie te maken is gekozen voor NodeJS, aangezien deze snel is op te zetten en ik hier al veel ervaring mee heb.',
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
        description: 'Na twee user tests met de NodeJS versie van Modus is gekozen voor een betere aanpak. We ondervonden dat timestamps client side opslaan is niet betrouwbaar genoeg is. In deze versie is gekozen voor een Python + Flask + SQLAlchemy backend. Dit was een goede kans is om een nieuwe taal te leren en nodig voor betrouwbare timestamps; op deze manier kan je de ingezonden timestamps normaliseren op de backend. Tijdzones worden vertaald naar UTC en de server is altijd online, dit zorgt voor een betrouwbare urenverantwoording.',
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
        description: 'Voor ons Media Innovatie project, hebben we gekozen om geen werkende versie te maken. Elektronische onderdelen viel niet binnen de scope van het project, maar uiteraard konden we wel uitzoeken wat nodig was voor een werkende versie. Hiervoor is gekeken naar alle hardware die nodig is om accuraat hoogte te meten, deze hoogtemeter zou volgens het concept ingebouwd worden in de top van een waterraket. Alle componenten zijn bij elkaar gezocht en van het eindresultaat is een render gemaakt met Sketchup en VRay om een beeld te geven van het mogelijke eindproduct.',
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
        description: 'Op dit moment was Modus alleen getest met versies waar nog niet over het uiterlijk is nagedacht. Het docking station bestond uit Lego Technic of uit een simpele NFC Reader. Om klanten een idee te geven van het eindproduct, heb ik een 3d model van tags en het dock gemodeleerd in Sketchup. Met behulp van VRay zijn hier renders van gemaakt.',
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
        description: 'De eerste user tests zijn alleen bij Code Yellow uitgevoerd. Er is gekozen om deze user test bij een ander type bedrijf uit te voeren. Deze user test was de eerste bij het bedrijf Less or More, een maatwerk website bedrijf wat uurtje factuurtje werkt. Hier hebben we de versie getest met een werkende NFC lezer, die communiceert met de Python backend en een React frontend heeft. Dit was hun eerste aanraking met Modus en de user test zorgde voor extreem positieve feedback. Deze test gaf ons ook inzicht over mogelijke wensen voor de tags.',
        completed: true,
        type: TYPE_GALLERY,
        images: [
            'LESSORMORE_0.jpg',
            'LESSORMORE_1.jpg',
            'LESSORMORE_2.jpg',
        ],
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
        description: 'De tweede usertest bij Less or More. De feedback van user test 1 is inmiddels geïmplementeerd, de getrackte uren zijn makkelijker aan te passen in de frontend. Deze user test was achteraf niet extreem nuttig, aangezien alleen positieve dingen naar voren kwamen, geen aspecten die verbeterd konden worden.',
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
        description: 'In dit stadium was er nog niet nagedacht over de tags. De tags die gebruikt zijn in de user tests bestonden uit LEGO, simpele NFC tags of waren SD kaarthoesjes met een NFC sticker erin. Uit de user tests bleek dat deze versies, te groot, te licht en te pietluttig waren. Hier heb ik werk van gemaakt en ben een onderzoek gestart naar de ideale feel van de tag. Om snel een beeld te krijgen over welke tagformaten en -gewichten zorgden voor een goede user experience, heb ik tags tags van verschillende vormen en maten gekleid en laten testen door een breed scala van gebruikers. Hier is een onderzoeksrapport van gemaakt, waar is gekeken naar mogelijke productiewijzes van de tags.',
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
        description: 'Nu er duidelijkheid was over de gewenste feel van de tag, kon er een productiesample van worden gemaakt. Om hiermee te kunnen itereren is er gebruik gemaakt van 3d printen. Er zijn in totaal 3 iteraties gemodelleerd in Blender. De eerste iteratie is geprint op de Fontys, de volgende 2 bij Shapeways. Het uiteindelijke resultaat was een tag die zuinig omgaat met resources, goed in de hand licht, aan te passen is aan een project en stevig in elkaar zit.',
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
        description: 'Voor de artwork rubric heb ik tot nu toe alleen nog maar renders gemaakt. Om ook grafisch werk in mijn portfolio op te nemen heb ik de poster ontworpen die we tijdens de markt lieten zien. Het doel van deze poster was om mensen heel snel een beeld te geven van Modus. Er is gekozen om het storyboard en de features van Modus weer te geven. De poster is ontworpen in Illustrator en is grafisch in lijn met het conceptboek.',
        completed: true,
        type: TYPE_DOWNLOAD,
        url: 'Poster.pdf',
        categories: [
            { name: 'Artwork', progress: 20 },
        ],
    }, {
        id: 17,
        date: '2016-06-06',
        name: 'Portfolio',
        description: 'Voor mijn werk ben ik veel bezig met interfaces, voor het Fontys had ik deze periode echter nog geen interface ontworpen. Om mijn proces in PTM6 goed aan te tonen heb ik heel veel aandacht besteed aan de interface van mijn portfolio. Eerdere versies van mijn portfolio zijn gemaakt in blogformaat. Dit maakt het duidelijk om te zien wat ik precies gedaan heb, maar is niet heel gebruiksvriendelijk en belemmert de mogelijkheid tot het reflecteren. Dit portfolio is gemaakt voor de gebruiker. Om een beeld te krijgen van mijn proces hoeven niet eerst alle blogposts gelezen te worden, maar hoeft enkel een blik op de Radar Chart geworpen te worden. Als men meer wil weten over de desbetreffende rubric, kan er op een rubric geklikt worden. Vervolgens toont de grafiek aan de rechterkant van de Radar Chart alle taken die de rubric beinvloed hebben. Als dat nog niet voldoende is, toont de timeline een beschrijving en al het materiaal binnen die rubric. Om mezelf ook op technisch gebied uit te dagen, is dit portfolio gemaakt in React + Redux.',
        completed: true,
        type: TYPE_VOID,
        categories: [
            { name: 'Interface', progress: 10 },
            { name: 'UX', progress: 10 },
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
