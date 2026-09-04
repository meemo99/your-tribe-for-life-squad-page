# Afspraken over samenwerking: Squadpage 
> In dit document staan de afspraken over hoe wij samenwerken aan de squadpage. Door dezelfde werkwijze en conventies te gebruiken houden we het project overzichtelijk en behouden we consistentie.

## Teamafspraken & teamcanvas

- ### Team canvas
<img width="730" height="517" alt="Scherm­afbeelding 2026-09-04 om 00 49 06" src="https://github.com/user-attachments/assets/d9ce7955-efe6-44f9-a920-2b239415e200" />

### Gedeelde doelen
- De basis van SvelteKit onder de knie krijgen.
- kennis delen in de groep en deze toepassen
- Elkaar ondersteunen bij het behalen van persoonlijke leerdoelen

### Persoonlijke leerdoelen

`1. Khitam`
- Complexe code schrijven (Animaties) 
- Een realistische design maken en ook echt maken

`2. Oumaima`
- Realistische planning maken en aanhouden
- Alle testen uitvoeren
- Complexere code schrijven

`3. Nadira`
- Complexe code schrijven
- Methoden vinden om overzicht en grip te houden op mijn dagelijkse taken
- Leervraag: Welke leerstrategieën kan ik gebruiken om nieuwe kennis snel en doelgericht eigen te maken, zonder vast te blijven zitten in de theorie?


### Teamafspraken
- Elke lesdag houden we een korte standup
- Taken en voortgang houden we bij in het [projectboard](https://github.com/users/meemo99/projects/12/views/1)
- Iedere taak heeft een duidelijke hoofdverantwoordelijke
- We starten taken aan de hand van issues
- Blockers communiceren we op tijd
- We verdelen het werk zo dat iedereen bijdraagt aan alle fases van de dlc
- We vragen en geven actief feedback
- We volgen de FDND code conventies
- We reviewen elkaars werk voordat het wordt gemerged
- We ondersteunen elkaar bij onze persoonlijke leerdoelen.
- Aan het einde van iedere week reflecteren we kort op onze samenwerking

***


## Workflow
We werken vanuit kleine en duidelijke issues (proces en doel moet navolgbaar zijn)

```bash
issue
-> branch
-> commits
-> pull request
-> review
-> feedback verwerken
-> mergen
-> done
```

### `issues`
Voor iedere taak maken we een issue aan, bijvoorbeeld:
```
[Feature]
[Documentation]
[Task]
[Team]
```
Een issue bevat minimaal:
- Het doel van de taak, waarom bestaat de taak
- Een korte checklist, wat moet er gebeuren
- Een hoofdverantwoordelijke
- Welke keuzes onderweg zijn gemaakt
- Wat het resultaat is

### `Branches`
Vanuit de main maken wij branches aan voor een korte taak.
- De naam beschrijft waar je aan werkt, bijvoorbeeld:
```
feature-person-card
fix-person-image
docs-contributing
```
Een branch hoort bij een duidelijk issue en blijft gericht op 1 taak of feature

### `Commits`
We volgen de FDND workflowconventies en gebruiken conventional commits.

Structuur:
```
type: korte beschrijving #issuenummer
```
- `Feat:` nieuwe functionaliteit
- `Fix:` probleem oplossen
- `docs:` documentatie
- `Refactor:` code verbeteren zonder de functionaliteit te veranderen
- `test:` tests toevoegen of aanpassen
- `style:`
  
> Iedere relevante commit verwijst naar het bijbehorende issue

### `Pull request & review`
> [Bron: pull request](https://docs.github.com/en/pull-requests/concepts/helping-others-review-your-changes)

1. Voor pull requests gebruiken we de onderstaande template;

```
## Wat verandert er?

Lost issue #1337 op.

<!-- Een PR moet genoeg informatie bevatten om ook later nog goed te begrijpen wat er is veranderd. Beschrijf bijvoorbeeld: wat was het probleem / waarom was deze wijziging nodig, hoe lost deze PR het probleem op en zijn er nog vragen of discussiepunten? Neem belangrijke informatie uit het Issue hier kort over in plaats van alleen naar het issue te linken. -->

[Live site](https://livesite.com)

## Hoe is dit getest?

<!-- Link hier naar de testresultaten in de Wiki -->

### RAPPE-principes

- [ ] [User test]()
- [ ] [Accessibility test]()
- [ ] [Progressive Enhancement test]()
- [ ] [Performance test]()
- [ ] [Responsive Design test]()
- [ ] [Device test]()
- [ ] [Browser test]()

## Afbeeldingen

<!-- Vooral relevant bij visuele/UI-wijzigingen. Voeg indien mogelijk screenshots toe van de situatie vóór en na de wijziging. -->

## Hoe review je deze PR?

<!-- Geef de reviewer duidelijke stappen om de wijziging te controleren. -->
```
2. Minimaal 1 teamgenoot reviewt het werk.
3. Feedback wordt eerst verwerkt of onderbouwd voordat de PR wordt gemerged.

*** 

## Code conventies
We volgen de [FDND code conventies](https://docs.fdnd.nl/conventies.html#pull-request)

***


### Reflecteren op de samenwerking
Aan het einde van iedere week bespreken we kort:
- Wat ging goed?
- Wat liep minder goed?
- Waren verantwoordelijkheden duidelijk?
- Hebben we knelpunten op tijd besproken?
- Hoe verliep feedback geven en ontvangen?
- Wat willen we volgende week verbeteren?

### Stand ups & communicatie
Op iedere lesdag houden we een korte stand up

iedereen benoemt:
- Waar werk ik aan?
- Wat heb ik gedaan?
- Wat is mijn volgende stap?
- Loop ik ergens op vast?
- Heb ik hulp of feedback nodig?

