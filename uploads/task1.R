needs(readr)
options(readr.show_col_types = FALSE)
needs(scDHA)

# args <- commandArgs(trailingOnly = TRUE)
# filename <- args[1]
filename <- input[[1]]

filepath <- paste("./uploads/", filename, sep="")
df1 <- read_tsv(filepath)

newdata <- data.matrix(df1)

data <- t(newdata)
data <- log2(data + 1)

result <- scDHA(data, seed = 1)
result <- scDHA.vis(result, seed = 1)

jpeg(file=paste("./uploads/", filename, ".jpg", sep=""))
plot(result$pred, xlab = "scDHA1", ylab = "scDHA2")

dev.off()