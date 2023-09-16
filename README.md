# scDHA-web-app
This web app utilizes the [scDHA](https://github.com/duct317/scDHA/tree/master) package.

# Requirements
- This app use ExpressJS with Pug template. Also, there are several useful packages:
  - `nodemon`: Automatically restart NodeJS server
  - `path`: Provides utilities for working with file and directory paths
  - `browser-sync`: Automatically reload behavior of front-end
  - `r-script`: Run R script from NodeJS with pushing and getting data
- Several required package for R:
  - `needs`: For better portability/reliability with r-script package
  - `readr`: Provide a fast way to read rectangular data from delimited files
  - `scDHA`: For cell data analysis
  - `mclust`: For some minor calculations
 
# How to run the scDHA-web-app
Run these 2 command simultaneously:
- `npm run dev`
- `npm run ui`

# Testing
Use file "Goolam.tsv" in folder "test_data" to test the Visualization function.
