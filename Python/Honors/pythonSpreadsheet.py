import csv 
import sys
 
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