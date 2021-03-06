var http = require('http'); // if going through a proxy that uses SSL change to "require('https');"

// Your external IP. Alexa can only access publically-accessible IPs. No LAN access unfortunately.
// Make sure to set up port forwarding on port 8080 to your DTV's IP on your router.
// In my case I had to move receiver to DMZ
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var IP_ADDRESS = process.env.PUBLIC_IP_ADDRESS;        

//externalIP or FQDN //////////////////////////////////////////////////////////////////////////
//var local_ip = '<some fqdn>';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * App ID for the skill
 */
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var APP_ID = "amzn1.ask.skill.[App ID]"; 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
* The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');
   
var DTVControl = function () {
    AlexaSkill.call(this, APP_ID);
};


// Extend AlexaSkill
DTVControl.prototype = Object.create(AlexaSkill.prototype);
DTVControl.prototype.constructor = DTVControl;

//Ignore Certificate errors if using HTTPS communication
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

DTVControl.prototype.intentHandlers = {
        DirectvIntent: function (intent, session, response) {
        
        //No matter what she wants to tell you her opinion.
        
        function satisfyAlexa() {
                        response.tell("OK");
                        };
        
        // Obtain User Intent
        switch(intent.slots.Control.value) {
                
                // Same button is used
				case "play":
				case "resume":
                      path = '/remote/processKey?key=play&hold=keyPress';
                break;
           
				case "pause":
				case "freeze":
                       path = '/remote/processKey?key=pause&hold=keyPress';
                break;
				
				case "guide":
                        path = '/remote/processKey?key=guide&hold=keyPress'
                break;
				
				case "power":
                        path = '/remote/processKey?key=power&hold=keyPress';
                break;
				
				case "format":
                       path = '/remote/processKey?key=format&hold=keyPress';
                break;
	
				case "rewind":
                       path = '/remote/processKey?key=rew&hold=keyPress';
                break;
				
				case "replay":
                         path = '/remote/processKey?key=replay&hold=keyPress';
                break;
				
				case "stop":
                          path= '/remote/processKey?key=stop&hold=keyPress';
                break;
				
				case "advance":
                                path= '/remote/processKey?key=advance&hold=keyPress';
                break;
				
				case "fast forward":
                                path = '/remote/processKey?key=ffwd&hold=keyPress';
                break;
		
				case "record":
				case "save":
                                path = '/remote/processKey?key=record&hold=keyPress'
                break;
				
				case "active":
                                path= '/remote/processKey?key=active&hold=keyPress';
                break;
				
				case "list":
				case "recorded shows":
				case "DVR":
                                path = '/remote/processKey?key=list&hold=keyPress';
                break;
				
				case "exit":
				case "end":
				case "leave":
                                path = '/remote/processKey?key=exit&hold=keyPress';
                break;
				
				case "back":
                                path= '/remote/processKey?key=back&hold=keyPress';
                break;
				
				case "menu":
                                path = '/remote/processKey?key=menu&hold=keyPress';
                break;
				
				case "info":
                                path= '/remote/processKey?key=info&hold=keyPress';
                break;
				
				case "up":

                                path = '/remote/processKey?key=up&hold=keyPress';
                break;
				
				case "down":
                                path = '/remote/processKey?key=down&hold=keyPress';
                break;

				case "left":
                                path= '/remote/processKey?key=left&hold=keyPress';
                break;
			
				case "right":
                                path= '/remote/processKey?key=right&hold=keyPress';
                break;
				
				case "select":
				case "enter":
                                path=  '/remote/processKey?key=select&hold=keyPress';
                break;
				
				case "channel up":
				case "page up":
                                path= '/remote/processKey?key=chanup&hold=keyPress';
                break;
				
				case "channel down":
				case "page down":
                     path = '/remote/processKey?key=chandown&hold=keyPress';
                break;
				
				case "previous":
                        path= '/remote/processKey?key=prev&hold=keyPress';
                break;
			
				case "CNN":
					path = '/tv/tune?major=202&minor=65535';
                
				break;
				
				case "AMC":
					path = '/tv/tune?major=254&minor=65535';
                
				break;
				
				case "A&E":
					path = '/tv/tune?major=265&minor=65535';
                
				break;
				
				case "animal planet":
					path = '/tv/tune?major=282&minor=65535';
                
				break;
				
				case "BET":
					path = '/tv/tune?major=329&minor=65535';
                
				break;
				
				case "bravo":
					path = '/tv/tune?major=237&minor=65535';
                
				break;
				
				case "comedy central":
					path = '/tv/tune?major=249&minor=65535';
                
				break;
				
				case "C span":
					path = '/tv/tune?major=250&minor=65535';
                
				break;
				
				case "cartoon network":
					path = '/tv/tune?major=296&minor=65535';
                
				break;
				
				case "discovery":
					path = '/tv/tune?major=278&minor=65535';
                
				break;
				
				case "Disney channel":
					path = '/tv/tune?major=290&minor=65535';
                
				break;
				
				case "Disney junior":
					path = '/tv/tune?major=289&minor=65535';
                
				break;
				
				case "Disney XD":
					path = '/tv/tune?major=292&minor=65535';
                
				break;
				
				case "food network":
					path = '/tv/tune?major=231&minor=65535';
                
				break;
				
				case "fox":
					path = '/tv/tune?major=360&minor=65535';
                
				break;
				
				case "FX":
					path = '/tv/tune?major=248&minor=65535';
                
				break;
				
				case "HGTV":
					path = '/tv/tune?major=229&minor=65535';
                
				break;
				
				case "history channel":
					path = '/tv/tune?major=269&minor=65535';
                
				break;
				
				case "lifetime":
					path = '/tv/tune?major=252&minor=65535';
                
				break;
				
				case "MSNBC":
					path = '/tv/tune?major=356&minor=65535';
                
				break;
				
				case "MTV":
					path = '/tv/tune?major=331&minor=65535';
                
				break;
				
				case "MTV2":
					path = '/tv/tune?major=333&minor=65535';
                
				break;
				
				case "national geographic":
					path = '/tv/tune?major=276&minor=65535';
                
				break;
				
				case "nick junior":
					path = '/tv/tune?major=301&minor=65535';
                
				break;
				
				case "spike":
					path = '/tv/tune?major=241&minor=65535';
                
				break;

				case "syfy":
					path = '/tv/tune?major=244&minor=65535';
                
				break;
				
				case "TBS":
					path = '/tv/tune?major=247&minor=65535';
                
				break;
				
				case "TNT":
					path = '/tv/tune?major=245&minor=65535';
                
				break;
			
				case "true TV":
					path = '/tv/tune?major=246&minor=65535';
                
				break;
				
				case "VH1":
					path = '/tv/tune?major=335&minor=65535';
                
				break;
				
				case "ESPN":
					path = '/tv/tune?major=206&minor=65535';
                
				break;
				
				case "ESPN2":
					path = '/tv/tune?major=209&minor=65535';
                
				break;

				case "NBC":
					path = '/tv/tune?major=009&minor=65535';
                
				break;

				case "CBS":
					path = '/tv/tune?major=004&minor=65535';
                
				break;

				case "ABC":
					path = '/tv/tune?major=007&minor=65535';
                
				break;
				
				default:
                
                        if (! isNaN(intent.slots.Channel.value) ) {

                 path = '/tv/tune?major=' + intent.slots.Channel.value  ;

              }
                else {
                response.tell("I didn't understand.");}
        break;

				
        } 
		var options = {
                     host: IP_ADDRESS,
                     port: 8080, // default port for DTV interface
                     path: '' + path, // Modify if path is prefixed 
                     method: 'GET' //, //(remove first comment slashes if using the "auth" option below)
					 // auth: 'username:password' // this is used if going through authenticated proxy (this is BASIC AUTH)
                    };
          var req = http.request(options, satisfyAlexa);
          req.end();						
        }
}


exports.handler = function (event, context) {
       
        var dtvControl = new DTVControl();
        dtvControl.execute(event, context);
        
};
