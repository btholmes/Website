# General Notes on Android 
 * All the layout is in res/layout folder, (XML files) 
 * **FAB** means Field Action Button 
 * Go to activity recognize xml 
        <android.support.v7.widget.RecyclerView
        android:id="@+id/resultsList"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:padding="16dp"
         />
  * Then RecognizeConceptsActivity has Bind Views at top 
       @BindView(R.id.resultsList) RecyclerView resultsList;
       
 * resultslist is only used once in onStart() method 
       	 @Override protected void onStart() {
    	super.onStart();

    	resultsList.setLayoutManager(new LinearLayoutManager(this));
   	 resultsList.setAdapter(adapter);
  	}