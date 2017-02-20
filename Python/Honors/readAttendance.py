import csv 
import sys

def readSheet(path) :
	result = ""
	f = open(path, 'rU')
	reader = csv.reader(f)
	first = True
	headers = []
	attendanceCount = {}
	email = 0;
	for row in reader :
		row = str(row)
		# This is what row looks like ['colA\tcolB\tcolC']
		row = row.replace('[', '')
		row = row.replace(']', '')
		row = row.replace("'", "")
		row = row.split('\\t') or row.split(",")

		if first :
			if len(row) > 0 :
				place = 0;
				for item in row :
					if item.strip() == "Email" :
						email = place
						break
					place+=1
			first = False

		else :
			if len(row) > 0 :
				attendanceCount[row[email]] = 1
			else :
				result += "There was nothing in this row"

		result = len(attendanceCount)
	f.close()
	return result



if __name__ == "__main__" :
	result = "I am result"
	if len(sys.argv) > 1:
		path = sys.argv[1]
		result = readSheet(path)
	else :
		path = "Attendance/AwkwardProm2017CSV.csv"
		# path = "Attendance/eggs.csv"
		result = readSheet(path)
	print result
