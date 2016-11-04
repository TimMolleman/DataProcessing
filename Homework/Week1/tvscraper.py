#!/usr/bin/env python
# Name: Tim Molleman
# Student number: 10587306
'''
This script scrapes IMDB and outputs a CSV file with highest rated tv series.
'''
import csv
import unicodedata

from pattern.web import URL, DOM, plaintext

TARGET_URL = URL("http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series")
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'

# get a DOM object for the HTML of TARGET_URL
dom = DOM(TARGET_URL.download(cached=True))

def extract_tvseries(dom):
    '''
    Extract a list of highest rated TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Rating
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''

    # create lists for series elements
    title = []
    ratings = []
    genres = []
    actors_serie = []
    actors = []
    runtime = []

    # fill list of titles of series
    for a in dom.by_class("lister-item-header"):
        for e in a.by_tag("a"):
            title.append(e.content.encode('ascii', 'ignore'))
   
    # fill list of ratings of series
    for a in dom.by_class("ratings-bar"):
        for e in a.by_tag("strong"):
            ratings.append(e.content.encode('ascii', 'ignore'))

    # fill list of genres of series
    for a in dom.by_class("genre"):
        genres.append(a.content.encode('ascii', 'ignore').replace("\n", "").replace("  ", ""))

    # fill list of actors in series
    for b in dom.by_class("lister-item-content"):
        for a in b.by_tag("p"):
            for e in a.by_tag("a"):
                actors_serie.append(e.content.encode('ascii', 'ignore'))
        actors.append(actors_serie)
        actors_serie = [] 

    # fill list of runtimes of series
    for a in dom.by_class("text-muted"):
        for e in a.by_class("runtime"):
            runtime.append(e.content.encode('ascii', 'ignore')[:2])

    # create dictionary of series elements and return it to function
    d = {"title":title, "ratings":ratings, "genre":genres, "actors":actors, "runtime":runtime}
    return d


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest rated TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Rating', 'Genre', 'Actors', 'Runtime'])

    # write row with elements in csv file for every series
    for i in range(len(tvseries["title"])):
        writer.writerow([tvseries["title"][i], tvseries["ratings"][i], 
            tvseries["genre"][i], str(tvseries["actors"][i])[1:len(str(tvseries["actors"][i])) - 1], 
            tvseries["runtime"][i]])

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)