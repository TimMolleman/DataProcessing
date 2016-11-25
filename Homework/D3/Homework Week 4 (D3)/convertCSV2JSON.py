# Name: Tim Molleman
# Student number: 10587306

# import modules
import csv
import json

points = {}

# put population and country information in a dictionary
with open ("alcohol.csv", 'rb') as f:
    reader = csv.reader(f)
    for row in reader:
        points[row[0]] = row[1].replace("%", "")

# delete first element in dictionary
del points['Time (h)']

# format the dictionary to a JSON format
data = {"points": [{"hours" : key, "percentage" : value} for key, value in points.iteritems()]}
json = json.dumps(data)
print json