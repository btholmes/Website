# Notes on Clarifai API 
 
 ## Building and Running

This project will compile in the standard manner through Android Studio or `./gradlew clean build` in your terminal. You just need to provide `clarifai_id` and `clarifai_secret` string resources

## Where to look

`RecognizeConceptsActivity` contains most of the non-boilerplate code. In particular, `RecognizeConceptsActivity.onImagePicked` makes the API call to Clarifai.

You can also look at `RecognizeConceptsAdapter.onBindViewHolder` to see how we display the information that the API returns to the user.

