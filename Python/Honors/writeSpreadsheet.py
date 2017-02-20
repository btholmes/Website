import csv
import sys
import requests
from bs4 import BeautifulSoup

def printSpreadsheet() :
	if len(sys.argv) > 1:
		i = 1
	result = ""
	while i < len(sys.argv) :
		f = open(sys.argv[i], 'rU')
		reader = csv.reader(f)
		start = False
		for row in reader :
			row = str(row)
			row = row.replace('[', '')
			row = row.replace("'", "")
			row = row.split(',')

			if(len(row[0]) > 0) :
				result += "\n" + row[0] + " " + row[1]
		++i
	print result
	f.close()

def writeTest():
    print "writing test"
    ifile = open('test.csv', "rb")
    reader = csv.reader(ifile)
    ofile = open('test.csv', "wb")
    writer = csv.writer(ofile, delimiter=',', quotechar='"', quoting=csv.QUOTE_ALL)

    for row in reader:
        writer.writerow(row)

    ifile.close()
    ofile.close()


def writeEggs():
    print "write A"
    with open('eggs.csv', 'wb') as csvfile:
        spamwriter = csv.writer(csvfile, delimiter=',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
        spamwriter.writerow(['Spam'] * 5 + ['Baked Beans'])
        spamwriter.writerow(['Spam', 'Lovely Spam', 'Wonderful Spam'])

def createDict():
	dict = {}
	dict.setdefault('Ben', {'href' : 'http://bholmes.me', 'age' :  25})
	print "Dictionary at Ben is " + str(dict['Ben']['age'])


def scrapeWeb():
	page = requests.get("http://dataquestio.github.io/web-scraping-pages/simple.html")
	soup = BeautifulSoup(page.content, 'html.parser')
	print(soup.prettify())


def main():
	writeTest()
	writeEggs()
	createDict()


if __name__ == "__main__":
    main()
