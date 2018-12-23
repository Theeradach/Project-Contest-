# Load the libraries
library(arules)
library(datasets)
library(rjson)

groceries <- read.transactions("http://www.sci.csueastbay.edu/~esuess/classes/Statistics_6620/Presentations/ml13/groceries.csv", sep = ",")

# get arguments of cli
args <- commandArgs(trailingOnly = TRUE)

# Input data 
dataInput <- gsub("[+]"," ",args) 

# Create rule for catagorised data 
rules<-apriori(data=groceries, parameter=list(supp=0.001,conf = 0.15,minlen=2), 
               appearance = list(default="rhs",lhs=dataInput),
               control = list(verbose=F))
rules<-sort(rules, decreasing=TRUE,by="confidence")

#output <-  list(res = inspect(rules[1-3]))
result <- inspect(rules[1:5])
# return to JSON data
print(toJSON(result))

