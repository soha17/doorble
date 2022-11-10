import os
import re
import pandas as pd

directory_in_str = "./logs"

directory = "logs"

dates = []
times = []
rds = []
pids = []
pages_visited = []
raw_lines = []

# figuring out all the patterns
date_pattern = r'(([0-9])|([0-2][0-9])|([3][0-1]))\/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\/\d{4}'
time_pattern = r'(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)'
rd_pattern = r'rd=[0-9]'
pid_pattern = r'pid=[A-Za-z0-9]+'
pages_visited_pattern = r'/doorble/[a-zA-Z0-9_\-]+.html'

# ok so we're getting the file name for every file in logs
for file in os.listdir("logs"):
    filename = os.fsdecode(file)
    #  print(filename)
    #  print(os.listdir())
    # got the file name -> now need to parse through it and make a bad boi df
    file_path = directory + "/" + filename
    fin = open(file_path, 'rt', encoding='utf-8')
    for line in fin:
        # date
        date = re.search(date_pattern, line)
        dates.append(date.group())

        # time
        time = re.search(time_pattern, line)
        times.append(time.group())

        # rd
        rd = re.search(rd_pattern, line)
        if rd != None:
            rds.append(rd.group())
        else:
            rds.append("")
        
        # pid
        pid = re.search(pid_pattern, line)
        if pid != None:
            # print(pid.group())
            pids.append(pid.group())
        else:
            pids.append("")
        
        page = re.search(pages_visited_pattern, line)
        if page != None:
            pages_visited.append(page.group())
        else:
            pages_visited.append("")
        
        raw_lines.append(line)
        
d = {'Date': dates, 'Time': times, 'Random': rds, 'Prolific ID': pids, 'Pages Visited': pages_visited, 'Raw lines': raw_lines}
df = pd.DataFrame(d)
print(df)
df.to_csv('logsparsed.csv')

# print(len(dates))
# print(len(times))
# print(len(rds))
# print(len(pids))
# print(len(pages_visited))

        