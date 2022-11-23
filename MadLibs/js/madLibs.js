// JavaScript Document
console.log("Zack's Javascript is working");
//-zw
// Mad Libs Javascript
var Noun0 = "";
var Group = "";
var Animal = "";
var NounP0 = "";
var Adj0 = "";
var Noun1 = "";
var Noun2 = "";
var Building = "";
var NounP1 = "";
var Part = "";
var Noun3 = "";
var Cloth = "";
var Film = "";
var Letter = "";
var Noun4 = "";
var Adj1 = "";
var Noun5 = "";
var Noun6 = "";
var Activity = "";
var Future = "";
var Verb = "";
var Numb = "";

function Start(){
	Noun0 = document.forms["madLibsForm"]["noun0"].value;
	Group = document.forms["madLibsForm"]["group0"].value;
	Animal = document.forms["madLibsForm"]["animal0"].value;
	NounP0 = document.forms["madLibsForm"]["nounp0"].value;
	Adj0 = document.forms["madLibsForm"]["adj0"].value;
	Noun1 = document.forms["madLibsForm"]["noun1"].value;
	Noun2 = document.forms["madLibsForm"]["noun2"].value;
	Building = document.forms["madLibsForm"]["bnoun0"].value;
	NounP1 = document.forms["madLibsForm"]["nounp1"].value;
	Part = document.forms["madLibsForm"]["part0"].value;
	Noun3 = document.forms["madLibsForm"]["noun3"].value;
	Cloth = document.forms["madLibsForm"]["cloth0"].value;
	Film = document.forms["madLibsForm"]["film0"].value;
	Letter = document.forms["madLibsForm"]["lette0"].value;
	Noun4 = document.forms["madLibsForm"]["noun4"].value;
	Adj1 = document.forms["madLibsForm"]["adj1"].value;
	Noun5 = document.forms["madLibsForm"]["noun5"].value;
	Noun6 = document.forms["madLibsForm"]["noun6"].value;
	Activity = document.forms["madLibsForm"]["act0"].value;
	Future = document.forms["madLibsForm"]["time0"].value;
	Verb = document.forms["madLibsForm"]["verb0"].value;
	Numb = document.forms["madLibsForm"]["numb0"].value;
	document.getElementById("storyContent").innerHTML = "CEO: Hello everyone, here at " + Noun0 + " studios, we strive to create an excellent film experience for " + Group + " everywhere, but it’s come to my attention that a bunch of " + Animal + " have taken over Studio B, producing the most awful " + NounP0 + " anyone’s laid eyes on. This is ruining our professional and " + Adj0 + " relationships as a brand, and more importantly decreasing our " + Noun1 + " value. To turn this around, we’ve partnered with anti-" + Animal + " inc to produce " + Noun2 + "-style documentaries in the hopes it will do something. Any questions? <br> Employee1: Yeah, how did a bunch of " + Animal + " even get into the " + Building + "? <br> CEO: It’s currently unknown, the security " + NounP1 + " somehow had a malfunction of the " + Part + " so we didn’t get any footage, but all we know is, they must have stacked themselves and worn a " + Cloth + " to avoid detection. <br> Employee2: So how do these " + Noun2 + "-style documentaries help our case? <br> CEO: Glad you asked. These new " + Film + " are capable of 4" + Letter + " resolution, which will be a great selling point on the back of the " + Noun4 + ", so I’d say we just wing it. As our " + Adj1 + " motto goes: We always wing it, when the " + Noun5 + " hits the " + Noun6 + ". <br> Employee1: Will making these documentaries take long? I’ve got to go to my " + Activity + " at " + Future + " <br> CEO: Oh yeah, I’ve " + Verb + " the math, and it should only take about " + Numb + " hours."
	document.getElementById("Story").classList.remove("hide");
}
