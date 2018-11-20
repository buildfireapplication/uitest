# uitest
While applying to 
http://jobs.buildfire.com/ui/#/ @4:30pm PST
Got a Invalid Job response

POST jobs.buildfire.com/api/ 

{"profile":
{"name":"Seung Kang"
,"email":"edwardgkang@gmail.com"
,"mobileFriendlyExperience":"3+ Years"
,"uiSkill":"Great"
,"size":"50000"
,"vanilla":"7"
,"angular":"7"
,"react":"1-4"
,"performance":"true"
,"position":"ui"
,"sampleUrl":""}}

looking through applicationCtrl.js 
noticed that the endpoint is 
"/prep/" + $scope.profile.email;
did not want to debug via POST trial and error
so circumventing the POST error and entered in the endpoint

looking through the testCtrl.js 
I was able to find the reference to /ui/zips/ui.zip
which then I unpacked and started the work @ 5:18pm

while trying to post to the http://jobs.buildfire.com/api/test

changed the position to full stack and was able to post successfully

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"profile":{"name":"Seung Kang","email":"edwardgkang@gmail.com","mobileFriendlyExperience":"3+ Years","uiSkill":"Great","size":"50000","vanilla":"7","angular":"7","react":"1-4","performance":"true","position":"ui","sampleUrl":""}}' \
http://jobs.buildfire.com/api/test
