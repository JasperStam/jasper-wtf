---
layout: post
title: Rocketkitz arduino
---

Rocket Kitz is ons product voor het vak Media Innovatie. Het doel van het vak was om kinderen in aanraking te brengen met techniek. Wij vonden niet dat kinderen nog meer met een digitale vorm van techniek in aanraking hoefden te komen, en kozen voor een fysieke variant.


Ons concept was Rocket Kitz, een toernooi voor scholen om een waterraket te maken die zo hoog mogelijk de lucht in kon schieten. Wij leveren de neus van de raket, die een parachute en hoogtemeter bevat. De hoogtemeter kan door de deelnemers zelf gebruikt worden om vluchtstatistieken in te zien, en zal in het toernooi gebruikt worden om winnaars te verkiezen.


Het ontwerpen van de hoogtemeter heb ik op me genomen.
De hoogtemeter moest aan de volgende eisen voldoen:
- Accurate hoogtelogging
- Klein van formaat
- Makkelijk op te laden
- Data moet uit te lezen zijn.


![Rocketkitz arduino]({{ site.url }}/assets/pictures/render-rocketkitz-1.png)


Om het geheel aan te drijven is gekozen voor een Arduino pro micro. Dit is een makkelijk uit te bereiden computertje met een kleine form factor. De arduino pro mini wordt eerder aanbevolen, maar omdat de data makkelijk uitleesbaar dient te zijn is gekozen voor de pro micro, omdat deze beschikt over een USB aansluiten. 


De hoogte wordt bijgehouden door een MPL3115A2 Hoogtemeter, een druksensor. Er zijn verschillende manieren om de hoogte bij te houden:
- GPS is mogelijk, maar aangezien de raket snel beweegt is dit inaccuraat.
- Om absolute hoogte te meten moet de luchtdruk gecorrigeerd worden adhv een weerinstantie
- Relatieve luchtdruk is de accuraatste oplossing, je meet luchtdruk onder, luchtdruk boven, door verschil in luchtdruk meet je hoogte


Om de arduino van stroom te voorzien hebben we gekozen voor batterijen.
- Accu’s zijn ook een mogelijkheid, maar LiPo’s opladen is gevaarlijk, en de oplader is relatief duur. Door 3 batterijen in serie aan te sluiten komt men uit op ~3.3V, wat nodig is om de Arduino van stroom te voorzien.

