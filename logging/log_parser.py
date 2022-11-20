import os
import re
import pandas as pd
import numpy as np

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
pid_pattern = r'pid=[A-Za-z0-9_]+'
pages_visited_pattern = r'/doorble/(registration+.html|homepage+.html|[a-zA-Z0-9_\-]+.html)' 


# ok so we're getting the file name for every file in logs
for file in os.listdir("logs"):
    filename = os.fsdecode(file)
    # use condition to grab a specific log file -- should only need the most recent log file since each file will contain the full log history.
    if (filename == "logs11202022.txt"):
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

# Convert date to datetime
df.Date = pd.to_datetime(df.Date)
#
df = df[df.Date >= '20/Nov/2022']
df = df[df['Prolific ID'] != '']
print(df)
df.to_csv('logscleaned.csv')

# Analytics
# Pages Visited by PID
print(df[['Prolific ID', 'Pages Visited', 'Random']].groupby(['Prolific ID', 'Random']).count())

# Check whether participant visited pages to accomplish their task
# For the condition assigned, check if the page visited string matches that where the participant should receive their completion code.
#   - If participant visits the same page more than once, modify pages visited value to indicate the visit number
#   - Reshape data to one row per PID

reshapedDf = df.pivot_table(values=None, index=['Prolific ID', 'Random'],columns=['Pages Visited'])
# Fix reshape
reshapedDf = reshapedDf['Date']
print(reshapedDf)
"""
conditions 1 & 4 will both need to click on the sft + img pages. Condition 8 will see the content for these pages in their feed but
only has the ability to click on the related lft pages.
Note: the first condition met will trigger the corresponding number from the choiceList, so more restrictive conditions must be placed first
"""

condList = [
(pd.notnull(reshapedDf['/doorble/registration.html']) & pd.notnull(reshapedDf['/doorble/ads_sft_img.html']) & (pd.notnull(reshapedDf['/doorble/loc_sft_img.html'])) & (pd.notnull(reshapedDf['/doorble/completion.html']))), #1
(pd.notnull(reshapedDf['/doorble/registration.html']) & pd.notnull(reshapedDf['/doorble/ads_lft_video.html']) & (pd.notnull(reshapedDf['/doorble/loc_lft_video.html'])) & (pd.notnull(reshapedDf['/doorble/completion.html']))), #2
(pd.notnull(reshapedDf['/doorble/ads_sft_img.html']) & (pd.notnull(reshapedDf['/doorble/loc_sft_img.html'])) & (pd.notnull(reshapedDf['/doorble/helpcenter.html'])) & (pd.notnull(reshapedDf['/doorble/completion.html']))), #4
(pd.notnull(reshapedDf['/doorble/ads_lft_video.html']) & (pd.notnull(reshapedDf['/doorble/loc_lft_video.html'])) & (pd.notnull(reshapedDf['/doorble/helpcenter.html'])) & (pd.notnull(reshapedDf['/doorble/completion.html']))), #5
(pd.notnull(reshapedDf['/doorble/homepage.html']) & (pd.notnull(reshapedDf['/doorble/settings.html'])) & (pd.notnull(reshapedDf['/doorble/completion.html']))), #6
(pd.notnull(reshapedDf['/doorble/homepage.html']) & (pd.notnull(reshapedDf['/doorble/completion.html']))) #3, 7, 8, 9
]

# The ordering of this choiceList should match that of the conditions above
choiceList = [1, 2, 4, 5, 6, 3789]
reshapedDf['reachedCompletion'] = np.select(condList, choiceList, 0)
print(reshapedDf)
# Use this to check if anyone didn't reach completion
# print(reshapedDf['reachedCompletion'].value_counts()[0])

# Time spent across pages
df['Time'] = pd.to_datetime(df['Time'])
timeSpentDf = df.groupby(['Prolific ID', 'Random']).agg(starttime = ('Time', np.min),
endtime = ('Time', np.max))
timeSpentDf['timespent'] = timeSpentDf['endtime'] - timeSpentDf['starttime']
print(timeSpentDf)
print(timeSpentDf['timespent'].mean())

# print(len(dates))
# print(len(times))
# print(len(rds))
# print(len(pids))
# print(len(pages_visited))

        