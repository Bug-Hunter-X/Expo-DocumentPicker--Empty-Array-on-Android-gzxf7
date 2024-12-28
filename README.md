# Expo DocumentPicker - Empty Array on Android

This repository demonstrates a bug in the Expo DocumentPicker API on Android where it sometimes returns an empty array even when a file is successfully selected by the user.  This leads to unexpected app behavior due to missing file data.

The `bug.js` file shows the problematic implementation. The solution is provided in `bugSolution.js`, which implements a more robust error handling mechanism to account for this inconsistency.

## Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app using Expo Go or a similar environment.
4. Try selecting a file using the DocumentPicker. Observe the inconsistent behavior of the empty array response.

## Solution

The provided solution in `bugSolution.js` demonstrates error handling to mitigate this issue. It explicitly checks for empty responses and provides a more informative user experience.