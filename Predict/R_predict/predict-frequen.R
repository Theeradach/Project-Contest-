# Load the libraries
library(arules)
library(arulesViz)
library(rjson)

groceries <- read.transactions("http://www.sci.csueastbay.edu/~esuess/classes/Statistics_6620/Presentations/ml13/groceries.csv", sep = ",")

#rule for the most frequent items : 
frequentItems <- eclat (groceries, parameter = list(supp = 0.07, maxlen = 15)) # calculates support for frequent items

#output <-  list(res = inspect(rules[1-3]))
result <- inspect(frequentItems[1:15])
# return to JSON data
print(toJSON(result))
