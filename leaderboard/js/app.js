var Model = Backbone.Model.extend({
 defaults: {
   "Title": "",
   "Description": "",
   "Tournaments": [
     {
       "Title": "",
       "Summary": "",
       "EventDetails": {
         "Courses": [
           {
             "ProgCourseKey": 0,
             "Name": "",
             "City": "",
             "State": "",
             "TimeZone": "",
             "ZipCode": "",
             "Country": "United States",
             "CourseId": "",
             "ParValues": [ ],
             "YardValues": [ ]
           }
         ],
         "TimeZone": "",
         "TimeOffSet": "",
         "City": "",
         "State": "",
         "ZipCode": "",
         "Country": "United States",
         "ProgEventKey": "",
         "SeriesKey": "",
         "PurseTotal": "",
         "DefendingChamp": "",
         "Winner": "",
         "Synopsis": ""
       },
       "Id": "",
       "LastUpdatedTime": "",
       "Tour": "PGA Tour",
       "TourLogo": "http:\/\/images.thegolfchannel.com\/images\/Logo-Tour-Small\/224042.jpg",
       "Rounds": 4,
       "StartDate": "",
       "EndDate": "",
       "Messages": [
         {
           "Text": ""
         }
       ],
       "Players": [
         {
           "Key": "",
           "Name": "",
           "Link": "",
           "SponsorLogo": "http:\/\/www.golfchannel.com\/Components\/Design\/img\/global\/icon\/titleist-leaderboard-logo.png",
           "Pos": "-",
           "RankChange": "-",
           "EventWinnings": "",
           "Scores": {
             "Total": "",
             "StartHole": 1,
             "Today": "",
             "Thru": "",
             "R1": "",
             "R2": "",
             "R3": "",
             "R4": "",
             "Strokes": "",
             "ScoreCards": [
               {
                 "Round": "4",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               },
               {
                 "Round": "3",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               },
               {
                 "Round": "2",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               },
               {
                 "Round": "1",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               }
             ]
           },
           "FirstName": "",
           "LastName": "",
           "BioImageURL": "",
           "BirthDate": "",
           "BirthCity": "",
           "BirthStateName": "",
           "BirthStateAbbreviation": "",
           "BirthCountry": "",
           "ResidenceCity": "",
           "ResidenceStateName": "",
           "ResidenceStateAbbreviation": "",
           "ResidenceCountry": "",
           "ProDate": "",
           "TopicUrl": "",
           "TourHighlights": [

           ],
           "MoneyListRanks": [

           ],
           "FlagUrl": ""
         },
         {
           "Key": "",
           "Name": "",
           "Link": "",
           "SponsorLogo": "http:\/\/www.golfchannel.com\/Components\/Design\/img\/global\/icon\/titleist-leaderboard-logo.png",
           "Pos": "-",
           "RankChange": "-",
           "EventWinnings": "",
           "Scores": {
             "Total": "",
             "StartHole": 1,
             "Today": "",
             "Thru": "",
             "R1": "",
             "R2": "",
             "R3": "",
             "R4": "",
             "Strokes": "",
             "ScoreCards": [
               {
                 "Round": "4",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               },
               {
                 "Round": "3",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               },
               {
                 "Round": "2",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               },
               {
                 "Round": "1",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               }
             ]
           },
           "FirstName": "",
           "LastName": "",
           "BioImageURL": "",
           "BirthDate": "",
           "BirthCity": "",
           "BirthStateName": "",
           "BirthStateAbbreviation": "",
           "BirthCountry": "",
           "ResidenceCity": "",
           "ResidenceStateName": "",
           "ResidenceStateAbbreviation": "",
           "ResidenceCountry": "",
           "ProDate": "",
           "TopicUrl": "",
           "TourHighlights": [

           ],
           "MoneyListRanks": [

           ],
           "FlagUrl": ""
         },
         {
           "Key": "",
           "Name": "",
           "Link": "",
           "SponsorLogo": "http:\/\/www.golfchannel.com\/Components\/Design\/img\/global\/icon\/titleist-leaderboard-logo.png",
           "Pos": "-",
           "RankChange": "-",
           "EventWinnings": "",
           "Scores": {
             "Total": "",
             "StartHole": 1,
             "Today": "",
             "Thru": "",
             "R1": "",
             "R2": "",
             "R3": "",
             "R4": "",
             "Strokes": "",
             "ScoreCards": [
               {
                 "Round": "4",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               },
               {
                 "Round": "3",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               },
               {
                 "Round": "2",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               },
               {
                 "Round": "1",
                 "CourseId": "",
                 "StartHole": "",
                 "ScoreCard": ""
               }
             ]
           },
           "FirstName": "",
           "LastName": "",
           "BioImageURL": "",
           "BirthDate": "",
           "BirthCity": "",
           "BirthStateName": "",
           "BirthStateAbbreviation": "",
           "BirthCountry": "",
           "ResidenceCity": "",
           "ResidenceStateName": "",
           "ResidenceStateAbbreviation": "",
           "ResidenceCountry": "",
           "ProDate": "",
           "TopicUrl": "",
           "TourHighlights": [

           ],
           "MoneyListRanks": [

           ],
           "FlagUrl": ""
         }
       ],
       "TourAbbreviation": "PGATOUR",
       "EventType": "StrokePlay",
       "Playoff": {

       }
     }
   ]
 },
 url: 'data.json',
 parse: function (response) {
  return response;
 }
});

var View = Backbone.View.extend({
 el: '.scores',
 template: '#player-template',
 initialize: function () {
   _.bindAll(this, "render");
   this.model.fetch({
     success: this.render
   });
 },
 render: function () {
  var data = this.model.attributes.Tournaments[0];
  var players = data.Players;
  var $playersDiv = $('.scores');
  var template = _.template($('#player-template').html());
  this.$el.parent('#leaderboard').find('.tournamentName').append(data.Title);
  this.$el.parent('#leaderboard').find('.tourName').append(data.Tour);
  for ( var keys in players ) {
   this.$el.append(template()).children('div:last-child');
   var playerRow = this.$el.find('.player:last-child');
   playerRow.find('.pos').html(players[keys].Pos);
   playerRow.find('.rank').html(players[keys].RankChange);
   playerRow.find('.name').html(players[keys].FirstName + ' ' + players[keys].LastName);
   playerRow.find('.thru').html(players[keys].Scores.Thru);
   playerRow.find('.total').html(players[keys].Scores.Total);
  }
  return this;
 }
});

(function() {
 var myModel = new Model();
 var myView = new View({
  model: myModel
 });
})($);
