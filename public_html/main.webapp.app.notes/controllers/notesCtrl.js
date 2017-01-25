(function(){
    'use strict';

    angular.module("myApp" )
        .controller("notesCtrl", notesCtrl);

    notesCtrl.$inject = ['$state' , '$scope', '$timeout'];

    function notesCtrl($state, $scope, $timeout){
        var vm = this;
        vm.init = init;
        vm.name = "Notes Page";

        vm.init();

        function init(){

            $('.mainNavbar').css("display", "block");
            $timeout(function(){
                $('.mainNavbar').css("opacity", "1");
            }, 100);

        }

        vm.notes = [
            {title: "Set Up Clarifai w/ IntelliJ",
                content:
                [
                    "Run command",
                    "./gradlew clean build",
                    "If error for not having local.properties, create the local.properties file in top level and add this text to it ",
                    "sdk.dir=/Users/btholmes/Library/Android/sdk"
                ]

            },

            {title: "Facebook Authentication Links",
                content:
                [
                    "This is probably the best tutorial for setting it up with Ionic2",
                    "https://ionicthemes.com/tutorials/about/ionic2-facebook-login",
                    "Source for tutorial is: ",
                    "https://github.com/ionicthemes/ionic2-facebook-login",
                    "To set up Facebook authentication with Firebase use: ",
                    "https://developers.facebook.com/docs/apps/register",
                    "Source for working demo with this is: ",
                    "https://github.com/fuffenz/ionic2-native-facebook-login",
                    "Steps to Install the Cordova PlugIns:",
                    "cordova plugin add cordova-plugin-facebook4 --save --variable APP_ID='123456789' --variable APP_NAME= 'myApp'",
                    "cordova plugin add --save cordova-plugin-inappbrowser",
                    "cordova plugin add --save cordova-plugin-whitelist",
                    "ionic platform add android ",
                    "npm install",
                    "ionic build android",
                    "ionic run android"
                ]

            },

            {title: "Ionic2 Scotch Tutorial",
                content:
                    [
                        "Link:",
                        "https://scotch.io/tutorials/build-a-mobile-app-with-angular-2-and-ionic-2#getting-github-users",
                        "To run Ionic2 on Phone: ",
                        "adb devices",
                        "ionic platform android",
                        "ionic build android",
                        "ionic run android",
                        "More Useful Ionic Commands: ",
                        "Ionic serve (to test in browser)",
                        "Ionic g page name",
                        "In user-details.html: ",
                        "The user?.property just tells angular that users may be null initially, so that an undefined error is not thrown."
                    ]
            },

            {title: "Ionic2 Angular2 Firebase3 Tutorial",
                content:
                    [
                        "Link:",
                        "https://javebratt.com/ionic-2-firebase-3-week-1/",
                        "Commands to start: ",
                        "Ionic start name blank --v2",
                        "cd name",
                        "Now update @ionic/app-scripts: ",
                        "npm install @ionic/app-scripts@latest –save-dev",
                        "Install Firebase: ",
                        "npm install firebase –save",
                        "Commands to Create Pages and Providers",
                        "ionic generate page NameName",
                        "NOTE even though you type NameName, it creates like name-name inside pages directory. Each generated page comes with a .html, .ts, and .scss file",
                        "ionic generate provider EventData",
                        "Now, import all new pages into app.module.ts, and add by names to declarations and entryComponents",
                        "Next, add corodova extensión to be able to Access phones camera: ",
                        "ionic plugin add cordova-plugin-camera",
                        "",
                        "Authentication:",
                        "",
                        "Go to app.component.ts and initialize firebase",
                        "Import firebase from ‘firebase’;",
                        "Then initialize it in the constructor also with the api information you get from firebase.com, have to create a new project for the database",
                        "change @component to template: <ion-nav [root]=rootPage></ion-nav>",
                        "change rootPage = HomePage to rootPage = any;",
                        "Need to import homepage and  loginpage, also add ,NgZone to Component ",
                        "Import, create zone:NgZone variable before constructor, and create an auth observer inside constructor",
                        "firebase.auth().onAuthStateChanged((user) => { ",
                        "   this.zone.run( () => { ",
                        "       if (!user) { ",
                        "           this.rootPage = LoginPage; ",
                        "       } else { ",
                        "           this.rootPage = HomePage; ",
                        "       } ",
                        "   });",
                        "});",
                        "",
                        "Now go to AuthData provider (This will communicate firebase authentication with Ionic) ",
                        "Import firebase here also with:",
                        "Import firebase from ‘firebase’",
                        "Add two variables above constructor",
                        "public fireAuth: any;",
                        "public userProfile: any; ",
                        "Create firebase references inside the constructor ",
                        "this.fireAuth = firebase.auth(); this.userProfile = firebase.database().ref('/userProfile');",
                        "",
                        "Finally create the login, logout, resetpassword, and signup functions"
                    ]
            },

            {title: "Android Command not Recognized",
                content:
                    [
                        "export PATH=${PATH}:/Users/btholmes/Library/Android/sdk/platform-tools:/Users/btholmes/Library/Android/sdk/tools"
                    ]

            },

            {title: "Turn on Developer Mode in Phone",
                content:
                    [
                        "Settings-about-(tab build number 7 times)"
                    ]

            },

        ];


    }

})(); /**
 * Created by btholmes on 1/10/17.
 */
