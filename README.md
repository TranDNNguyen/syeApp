# keytaxsnap_android

## Preliminary installations
1. Install Node using the following guide: https://nodejs.org/en/download/
2. Run "npm install -g react-native-cli" to install React Native.
3. Make sure you have an Android emulator opened and running, such as Android Studio's.

## Running the app
1. Open one terminal and run "react-native start" where you have cloned this repository.
2. Keeping that terminal open, have a second terminal and run "react-native run-android" where you have cloned this repository.
3. The emulator should display the app.

# Development Guidelines
## Step 1: Estimate
Do an estimate how long would it take to resolve these issues. Once you have the estimate update the title at the end of the issue, adding (30 Minutes) or (1 Hour) or (1.5 Hours) or (3 Hours) or (More Research Needed)

Do not make any code revisions until an estimate is made and updated in the issue post. For new issues, pause, and give a quick estimate for them, then resume on your work

## Step 2: Sort and Start on Shorter Task Items
Work on the issues that take less time first, in that order. Check in code separately for each item. For issues with GUI changes, please upload the final result snapshot to the Screenshots folder in the same code check in for that item.

## Step 3: Add Comments for Changes, Update Labels, Divide Tasks with Roadblocks
Change labels to "In Progress" for issues that are currently being worked on.

Add comments to each issue summarizing changes and change the issue's label to "Review". If your initial estimate is 10 minutes, then when you finished it and found out that it actually took 20 minutes, please update the title to "(20 Minutes)" and add a comment about the change.

After commit code, add the url of the commit to the item's comment.

### How to divide tasks with roadblocks into 30 minute items:
If a task's time estimate is 1 hr, please break it into items 30 minutes or less and put those smaller steps in comments.

Assuming that the roadblock is fixed, update the issue time estimate with how long it will take to complete. Add in the issue description other issues/tasks that must be completed before revisitng the current one.

Ex:

"add in description (below title) Prerequisite: Resolving React Native Build failures create a new item: Resolving React Native Build failures add these steps in description

Attempt to build while closing finder windows (failed) Try to build on a newer virtual device (Currently set to iphone 6) Start new project, import media and code from existing project give estimate on the item"

Status Labels:

Pending: when task is In Progress and you have a roadblock, and you move on to work on the roadblock, remember to change the status "In Progress" to "pending"

In Progress: there should be only one "In Progess" item, the one that you are actively working on now.

### Commit Step
Every commit should have an equivalent item for it - either a bug item or an enhancement item. The issue number a commit is made for should be included in the comment of the commit as "#{issue number}".

# Review Guideline
## Step 1: Verify the commit that resolves the issue
Look at the commit history and check to see if the code resolves the issue the commit describes.

## Step 2: Build & Simulate
Following the procedures in the development guide, build the ReactNative project. Then, using the desired device or emulator, simulate the project.

## Step 3: Commentation
Put your verification results in the comment on the item. If the issue is corrected, comment "Review: good", else comment "Review: rejected". Update the title time spent to review this item. For example, if the review took 30 minutes, append "Review: 30 Minutes" to the title (i.e. "Open KeyTax Webpage on launch (20 Minutes, Review: 30 Minutes").

# Workflow Principles
Chilios charge clients based on these 30 minutes items. that's why we keep track of time working on each item. And it will help you resolve issues quicker and easier. Divide and Conquer principle
it makes your work more in Flow, instead of feeling stuck and building up pressure
the actual time should be put in the title once it's been completed, so we don't need to click inside to see it. but when we change the time, put comment on why we change. this will help you when you make another estimate on similar items.
