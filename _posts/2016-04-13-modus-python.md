---
layout: post
title: Modus python
---

Voor modus was er een backend nodig. Voor timetracking is natuurlijk belangrijk dat de start en eindtijden worden opgeslagen.

De eerste versie van de Modus backend was ook door mij gemaakt, maar in NodeJS. Dit was heel snel op te zetten, maar liep al snel uit zijn voegen. Timestamps werden aangemaakt door de arduino zelf wat niet betrouwbaar bleek te zijn en dit leed tot data verlies. De check-in en check-uit berichten kwamen wel aan op de server, alleen klopten de begin en eindtijden niet altijd…

Hierna is gekozen om de backend naar Python over te zetten. Ik heb al veel ervaring met object oriented programmeren in PHP en met meerdere PHP frameworks zoals CodeIgniter, FuelPHP en Laravel, maar heb veel positieve dingen gehoord over Python. Dit leek me het ideale project om Python mee te leren.

Er zijn al heel veel stukken open source software gemaakt om het ontwikkelen makkelijker te maken. De backend is ontwikkeld met behulp van Flask. Flask is een microframework wat RESTful requests vergemakkelijkt, veel routing mogelijkheden bevat en uitbereidbaar is. Flask is gekozen omdat de backend een API moest worden, die de data doorgeeft in JSON formaat. De data wordt vervolgens bewerkt en in de juiste views geladen op de frontend. Ook is er gekeken naar Django, een veelgebruikt Python framework, maar dit leek ons te grootschalig.

Hiernaast is SQLAlchemy gebruikt een microframework wat data uit de database (objects) koppelt met virtuele en programmeerbare modellen, een ORM. De databasekoppeling is ook goed geabstraheerd. Voorlopig gebruikt de backend nog SQLite (database in een bestand), omdat dit simpel is en heel weinig serverconfiguratie vereist, maar een overstap naar PostgreSQL moet door het gebruik van SQLAlchemy in de toekomst zeer makkelijk worden. 

De ontwikkeling van de python backend is te volgen op [Github.](https://github.com/JasperStam/nfc-timetracking/tree/master/api)


