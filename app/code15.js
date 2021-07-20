gdjs.testing_32levelCode = {};
gdjs.testing_32levelCode.GDendObjects1= [];
gdjs.testing_32levelCode.GDendObjects2= [];
gdjs.testing_32levelCode.GDtankObjects1= [];
gdjs.testing_32levelCode.GDtankObjects2= [];
gdjs.testing_32levelCode.GDNewObjectObjects1= [];
gdjs.testing_32levelCode.GDNewObjectObjects2= [];
gdjs.testing_32levelCode.GDbulletObjects1= [];
gdjs.testing_32levelCode.GDbulletObjects2= [];
gdjs.testing_32levelCode.GDbarbedplaceholdrObjects1= [];
gdjs.testing_32levelCode.GDbarbedplaceholdrObjects2= [];
gdjs.testing_32levelCode.GDPixelFlameObjects1= [];
gdjs.testing_32levelCode.GDPixelFlameObjects2= [];
gdjs.testing_32levelCode.GDPixelSmokeObjects1= [];
gdjs.testing_32levelCode.GDPixelSmokeObjects2= [];
gdjs.testing_32levelCode.GDYButtonObjects1= [];
gdjs.testing_32levelCode.GDYButtonObjects2= [];

gdjs.testing_32levelCode.conditionTrue_0 = {val:false};
gdjs.testing_32levelCode.condition0IsTrue_0 = {val:false};
gdjs.testing_32levelCode.condition1IsTrue_0 = {val:false};
gdjs.testing_32levelCode.condition2IsTrue_0 = {val:false};
gdjs.testing_32levelCode.condition3IsTrue_0 = {val:false};
gdjs.testing_32levelCode.condition4IsTrue_0 = {val:false};
gdjs.testing_32levelCode.conditionTrue_1 = {val:false};
gdjs.testing_32levelCode.condition0IsTrue_1 = {val:false};
gdjs.testing_32levelCode.condition1IsTrue_1 = {val:false};
gdjs.testing_32levelCode.condition2IsTrue_1 = {val:false};
gdjs.testing_32levelCode.condition3IsTrue_1 = {val:false};
gdjs.testing_32levelCode.condition4IsTrue_1 = {val:false};


gdjs.testing_32levelCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.testing_32levelCode.GDtankObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.testing_32levelCode.GDtankObjects1.length !== 0 ? gdjs.testing_32levelCode.GDtankObjects1[0] : null), true, "", 0);
}}

}


};gdjs.testing_32levelCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.testing_32levelCode.condition0IsTrue_0.val = false;
gdjs.testing_32levelCode.condition1IsTrue_0.val = false;
gdjs.testing_32levelCode.condition2IsTrue_0.val = false;
gdjs.testing_32levelCode.condition3IsTrue_0.val = false;
{
gdjs.testing_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.testing_32levelCode.condition0IsTrue_0.val ) {
{
gdjs.testing_32levelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.testing_32levelCode.condition1IsTrue_0.val ) {
{
gdjs.testing_32levelCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.testing_32levelCode.condition2IsTrue_0.val ) {
{
gdjs.testing_32levelCode.condition3IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}}
}
}
if (gdjs.testing_32levelCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.testing_32levelCode.GDtankObjects1);
{for(var i = 0, len = gdjs.testing_32levelCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.testing_32levelCode.GDtankObjects1[i].rotateTowardAngle(-(90), 200, runtimeScene);
}
}{for(var i = 0, len = gdjs.testing_32levelCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.testing_32levelCode.GDtankObjects1[i].rotateTowardAngle(90, 200, runtimeScene);
}
}{for(var i = 0, len = gdjs.testing_32levelCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.testing_32levelCode.GDtankObjects1[i].rotateTowardAngle(0, 200, runtimeScene);
}
}{for(var i = 0, len = gdjs.testing_32levelCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.testing_32levelCode.GDtankObjects1[i].rotateTowardAngle(180, 200, runtimeScene);
}
}}

}


};gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.testing_32levelCode.GDbulletObjects1});gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.testing_32levelCode.GDtankObjects1});gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.testing_32levelCode.GDendObjects1});gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.testing_32levelCode.GDtankObjects1});gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDbarbedplaceholdrObjects1Objects = Hashtable.newFrom({"barbedplaceholdr": gdjs.testing_32levelCode.GDbarbedplaceholdrObjects1});gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDPixelSmokeObjects1Objects = Hashtable.newFrom({"PixelSmoke": gdjs.testing_32levelCode.GDPixelSmokeObjects1});gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.testing_32levelCode.GDtankObjects1});gdjs.testing_32levelCode.eventsList2 = function(runtimeScene) {

};gdjs.testing_32levelCode.eventsList3 = function(runtimeScene) {

};gdjs.testing_32levelCode.eventsList4 = function(runtimeScene) {

};gdjs.testing_32levelCode.eventsList5 = function(runtimeScene) {

{


gdjs.testing_32levelCode.eventsList0(runtimeScene);
}


{


gdjs.testing_32levelCode.eventsList1(runtimeScene);
}


{



}


{


gdjs.testing_32levelCode.condition0IsTrue_0.val = false;
gdjs.testing_32levelCode.condition1IsTrue_0.val = false;
{
gdjs.testing_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if ( gdjs.testing_32levelCode.condition0IsTrue_0.val ) {
{
{gdjs.testing_32levelCode.conditionTrue_1 = gdjs.testing_32levelCode.condition1IsTrue_0;
gdjs.testing_32levelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10690084);
}
}}
if (gdjs.testing_32levelCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.testing_32levelCode.GDtankObjects1);
gdjs.testing_32levelCode.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDbulletObjects1Objects, (( gdjs.testing_32levelCode.GDtankObjects1.length === 0 ) ? 0 :gdjs.testing_32levelCode.GDtankObjects1[0].getPointX("shootpoint")), (( gdjs.testing_32levelCode.GDtankObjects1.length === 0 ) ? 0 :gdjs.testing_32levelCode.GDtankObjects1[0].getPointY("shootpoint")), "");
}{for(var i = 0, len = gdjs.testing_32levelCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.testing_32levelCode.GDbulletObjects1[i].addPolarForce((( gdjs.testing_32levelCode.GDtankObjects1.length === 0 ) ? 0 :gdjs.testing_32levelCode.GDtankObjects1[0].getAngle()) - 90, 200, 1);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.testing_32levelCode.GDendObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.testing_32levelCode.GDtankObjects1);

gdjs.testing_32levelCode.condition0IsTrue_0.val = false;
{
gdjs.testing_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDtankObjects1Objects, gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.testing_32levelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "well done!", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("barbedplaceholdr"), gdjs.testing_32levelCode.GDbarbedplaceholdrObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.testing_32levelCode.GDtankObjects1);

gdjs.testing_32levelCode.condition0IsTrue_0.val = false;
{
gdjs.testing_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDtankObjects1Objects, gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDbarbedplaceholdrObjects1Objects, false, runtimeScene, false);
}if (gdjs.testing_32levelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.testing_32levelCode.GDtankObjects1 */
{for(var i = 0, len = gdjs.testing_32levelCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.testing_32levelCode.GDtankObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PixelSmoke"), gdjs.testing_32levelCode.GDPixelSmokeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.testing_32levelCode.GDtankObjects1);

gdjs.testing_32levelCode.condition0IsTrue_0.val = false;
{
gdjs.testing_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDPixelSmokeObjects1Objects, gdjs.testing_32levelCode.mapOfGDgdjs_46testing_9532levelCode_46GDtankObjects1Objects, 1000, false);
}if (gdjs.testing_32levelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.testing_32levelCode.GDPixelSmokeObjects1 */
/* Reuse gdjs.testing_32levelCode.GDtankObjects1 */
{for(var i = 0, len = gdjs.testing_32levelCode.GDPixelSmokeObjects1.length ;i < len;++i) {
    gdjs.testing_32levelCode.GDPixelSmokeObjects1[i].addForceTowardObject((gdjs.testing_32levelCode.GDtankObjects1.length !== 0 ? gdjs.testing_32levelCode.GDtankObjects1[0] : null), 1000, 1);
}
}}

}


{


gdjs.testing_32levelCode.eventsList2(runtimeScene);
}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.testing_32levelCode.GDtankObjects1);
{for(var i = 0, len = gdjs.testing_32levelCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.testing_32levelCode.GDtankObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{


gdjs.testing_32levelCode.eventsList3(runtimeScene);
}


{


gdjs.testing_32levelCode.condition0IsTrue_0.val = false;
{
gdjs.testing_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.testing_32levelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


{


gdjs.testing_32levelCode.eventsList4(runtimeScene);
}


{


{
}

}


};

gdjs.testing_32levelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.testing_32levelCode.GDendObjects1.length = 0;
gdjs.testing_32levelCode.GDendObjects2.length = 0;
gdjs.testing_32levelCode.GDtankObjects1.length = 0;
gdjs.testing_32levelCode.GDtankObjects2.length = 0;
gdjs.testing_32levelCode.GDNewObjectObjects1.length = 0;
gdjs.testing_32levelCode.GDNewObjectObjects2.length = 0;
gdjs.testing_32levelCode.GDbulletObjects1.length = 0;
gdjs.testing_32levelCode.GDbulletObjects2.length = 0;
gdjs.testing_32levelCode.GDbarbedplaceholdrObjects1.length = 0;
gdjs.testing_32levelCode.GDbarbedplaceholdrObjects2.length = 0;
gdjs.testing_32levelCode.GDPixelFlameObjects1.length = 0;
gdjs.testing_32levelCode.GDPixelFlameObjects2.length = 0;
gdjs.testing_32levelCode.GDPixelSmokeObjects1.length = 0;
gdjs.testing_32levelCode.GDPixelSmokeObjects2.length = 0;
gdjs.testing_32levelCode.GDYButtonObjects1.length = 0;
gdjs.testing_32levelCode.GDYButtonObjects2.length = 0;

gdjs.testing_32levelCode.eventsList5(runtimeScene);
return;

}

gdjs['testing_32levelCode'] = gdjs.testing_32levelCode;
