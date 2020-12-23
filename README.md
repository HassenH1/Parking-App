# Parking-App

## Steps

1. Always pull from main first before creating a new branch
  - If not in main branch to get to main branch type -> git checkout main
  - Once in main type -> git pull upstream main
2. Create new Branch and switch to it
  - git checkout -b [branch name]
3. When finished with your Ticket aka task Then 
  - git add .
  - git commit -m "whatever message you want here"
  - git push upstream [your branch name here]

# Commands You Need 

## Branching

| Syntax                          | Description                                      |
| ------------------------------- | ------------------------------------------------ |
| git branch                      | List of branches                                 |
| git checkout -b [branch name]   | Create a new branch and switch to it             |



## Basic Snapshotting

| Syntax                               | Description                                       |
| ------------------------------------ | ------------------------------------------------- |
| git add -A                           | Add all new and changed files to the staging area |
| git commit -m "[commit message]"	   | Commit changes                                    |


## Updating Projects

| Syntax                          | Description                                      |
| ------------------------------- | ------------------------------------------------ |
| git pull upstream main          | Pulls new changes from main branch               |
