# Name: Tim Molleman
# Student number: 10587306

# import modules
import csv
import json

points = {}

# put population and country information in a dictionary
with open ("download.csv", 'rb') as f:
    reader = csv.reader(f)
    for row in reader:
        points[row[1]] = row[2].replace(",", "")

# format the dictionary to a JSON format
data = {"points": [{"country" : key, "population" : value} for key, value in points.iteritems()]}
json_bitch = json.dumps(data)