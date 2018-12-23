library(rjson)
library(jsonlite)

emp <-
  '[
{"Name" : "Mario", "Age" : 32, "Occupation" : "Plumber"}, 
{"Name" : "Peach", "Age" : 21, "Occupation" : "Princess"},
{"Name" : "Bowser", "Occupation" : "Koopa"}
]'

mydf <- fromJSON(emp)
mydf2 <- list(result1 = mydf[1],
              result2 = mydf[2],
              result3 = mydf[3]
             )

# output JSON
print(toJSON(mydf2))