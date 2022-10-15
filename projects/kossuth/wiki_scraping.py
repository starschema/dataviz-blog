from bs4 import BeautifulSoup, Tag
import requests
import pandas as pd

URL = 'https://hu.wikipedia.org/wiki/Kossuth-d%C3%ADjasok_listája'

def parse_winner(wiki_entry):
    try:
        personal, details, _ = wiki_entry.split(')')
    except ValueError:
        print('Unknown structure:', wiki_entry)
        return {'name': wiki_entry}

    name, birth_info = personal.split('(')
    birth = birth_info
    death = None
    if '–' in birth_info:
        birth, death = birth_info.split('–')
        death = int(death) if death.strip() != '?' else -1

    birth = int(birth[:4]) if birth.strip() != '?' else -1

    occupations, awards = details.split('(')
    awards = [a for a in awards.split(';')]

    return {
        'name': name.strip(),
        'birth': int(birth),
        'death': int(death) if death else None,
        'occupations': [o.strip() for o in occupations.split(',')],
        'awards': awards
    }


soup = BeautifulSoup(requests.get(URL).content, 'html.parser')
main_content = soup.select_one('div.mw-parser-output')

winners = []
for header in main_content.find_all(['h2', 'h3']):
    section_name = header.select_one('span.mw-headline').get_text()
    section_entries = header.find_next_sibling().find_all('li')

    if section_name not in ['Csoportos díjazottak', 'Források']:
        for w in section_entries:
            winner_data = parse_winner(w.get_text())
            winner_data['wiki'] = f"https://hu.wikipedia.org{w.find('a')['href']}"
            winners.append(winner_data)

df = pd.DataFrame(winners)
df.to_excel('individual_winners.xlsx', index=False)

# helper file: occupations
all_occupations = df.occupations.explode()
all_occupations.value_counts().to_excel('occupations.xlsx', index=True)

# helper file: awards
all_awards = df.awards.explode()
award_length = all_awards.apply(lambda a: len(str(a).split(',')))
award_length.name = 'award_length'

award_df = pd.concat([all_awards, award_length], axis=1)
award_df.to_excel('award_structures.xlsx', index=False)
