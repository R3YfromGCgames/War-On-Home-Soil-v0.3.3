gdjs.referance_32levelCode = {};
gdjs.referance_32levelCode.GDNewObjectObjects1= [];
gdjs.referance_32levelCode.GDNewObjectObjects2= [];
gdjs.referance_32levelCode.GDtankObjects1= [];
gdjs.referance_32levelCode.GDtankObjects2= [];
gdjs.referance_32levelCode.GDenemyplaceholderObjects1= [];
gdjs.referance_32levelCode.GDenemyplaceholderObjects2= [];
gdjs.referance_32levelCode.GDendObjects1= [];
gdjs.referance_32levelCode.GDendObjects2= [];
gdjs.referance_32levelCode.GDbulletObjects1= [];
gdjs.referance_32levelCode.GDbulletObjects2= [];
gdjs.referance_32levelCode.GDNewObject2Objects1= [];
gdjs.referance_32levelCode.GDNewObject2Objects2= [];

gdjs.referance_32levelCode.conditionTrue_0 = {val:false};
gdjs.referance_32levelCode.condition0IsTrue_0 = {val:false};
gdjs.referance_32levelCode.condition1IsTrue_0 = {val:false};
gdjs.referance_32levelCode.condition2IsTrue_0 = {val:false};
gdjs.referance_32levelCode.condition3IsTrue_0 = {val:false};
gdjs.referance_32levelCode.condition4IsTrue_0 = {val:false};


gdjs.referance_32levelCode.eventsList0 = function(runtimeScene) {

};gdjs.referance_32levelCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.referance_32levelCode.condition0IsTrue_0.val = false;
gdjs.referance_32levelCode.condition1IsTrue_0.val = false;
gdjs.referance_32levelCode.condition2IsTrue_0.val = false;
gdjs.referance_32levelCode.condition3IsTrue_0.val = false;
{
gdjs.referance_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.referance_32levelCode.condition0IsTrue_0.val ) {
{
gdjs.referance_32levelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.referance_32levelCode.condition1IsTrue_0.val ) {
{
gdjs.referance_32levelCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.referance_32levelCode.condition2IsTrue_0.val ) {
{
gdjs.referance_32levelCode.condition3IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}}
}
}
if (gdjs.referance_32levelCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.referance_32levelCode.GDtankObjects1);
{for(var i = 0, len = gdjs.referance_32levelCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.referance_32levelCode.GDtankObjects1[i].rotateTowardAngle(-(90), 200, runtimeScene);
}
}{for(var i = 0, len = gdjs.referance_32levelCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.referance_32levelCode.GDtankObjects1[i].rotateTowardAngle(90, 200, runtimeScene);
}
}{for(var i = 0, len = gdjs.referance_32levelCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.referance_32levelCode.GDtankObjects1[i].rotateTowardAngle(0, 200, runtimeScene);
}
}{for(var i = 0, len = gdjs.referance_32levelCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.referance_32levelCode.GDtankObjects1[i].rotateTowardAngle(180, 200, runtimeScene);
}
}}

}


};gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.referance_32levelCode.GDbulletObjects1});gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.referance_32levelCode.GDbulletObjects1});gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDenemyplaceholderObjects1Objects = Hashtable.newFrom({"enemyplaceholder": gdjs.referance_32levelCode.GDenemyplaceholderObjects1});gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.referance_32levelCode.GDtankObjects1});gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.referance_32levelCode.GDendObjects1});gdjs.referance_32levelCode.eventsList2 = function(runtimeScene) {

};gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDenemyplaceholderObjects1Objects = Hashtable.newFrom({"enemyplaceholder": gdjs.referance_32levelCode.GDenemyplaceholderObjects1});gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.referance_32levelCode.GDtankObjects1});gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDenemyplaceholderObjects1Objects = Hashtable.newFrom({"enemyplaceholder": gdjs.referance_32levelCode.GDenemyplaceholderObjects1});gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.referance_32levelCode.GDtankObjects1});gdjs.referance_32levelCode.eventsList3 = function(runtimeScene) {

};gdjs.referance_32levelCode.eventsList4 = function(runtimeScene) {

{


gdjs.referance_32levelCode.eventsList0(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.referance_32levelCode.GDtankObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.referance_32levelCode.GDtankObjects1.length !== 0 ? gdjs.referance_32levelCode.GDtankObjects1[0] : null), true, "", 0);
}}

}


{


{
}

}


{


gdjs.referance_32levelCode.eventsList1(runtimeScene);
}


{



}


{


gdjs.referance_32levelCode.condition0IsTrue_0.val = false;
gdjs.referance_32levelCode.condition1IsTrue_0.val = false;
{
gdjs.referance_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.referance_32levelCode.condition0IsTrue_0.val ) {
{
gdjs.referance_32levelCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "FireRate");
}}
if (gdjs.referance_32levelCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.referance_32levelCode.GDtankObjects1);
gdjs.referance_32levelCode.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDbulletObjects1Objects, (( gdjs.referance_32levelCode.GDtankObjects1.length === 0 ) ? 0 :gdjs.referance_32levelCode.GDtankObjects1[0].getPointX("Canon")), (( gdjs.referance_32levelCode.GDtankObjects1.length === 0 ) ? 0 :gdjs.referance_32levelCode.GDtankObjects1[0].getPointY("Canon")), "");
}{for(var i = 0, len = gdjs.referance_32levelCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.referance_32levelCode.GDbulletObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 300, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.referance_32levelCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemyplaceholder"), gdjs.referance_32levelCode.GDenemyplaceholderObjects1);

gdjs.referance_32levelCode.condition0IsTrue_0.val = false;
{
gdjs.referance_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDbulletObjects1Objects, gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDenemyplaceholderObjects1Objects, false, runtimeScene, false);
}if (gdjs.referance_32levelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.referance_32levelCode.GDenemyplaceholderObjects1 */
{for(var i = 0, len = gdjs.referance_32levelCode.GDenemyplaceholderObjects1.length ;i < len;++i) {
    gdjs.referance_32levelCode.GDenemyplaceholderObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.referance_32levelCode.GDendObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.referance_32levelCode.GDtankObjects1);

gdjs.referance_32levelCode.condition0IsTrue_0.val = false;
{
gdjs.referance_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDtankObjects1Objects, gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.referance_32levelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lvl 1", false);
}}

}


{


gdjs.referance_32levelCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("enemyplaceholder"), gdjs.referance_32levelCode.GDenemyplaceholderObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.referance_32levelCode.GDtankObjects1);

gdjs.referance_32levelCode.condition0IsTrue_0.val = false;
{
gdjs.referance_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDenemyplaceholderObjects1Objects, gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDtankObjects1Objects, 1000, false);
}if (gdjs.referance_32levelCode.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemyplaceholder"), gdjs.referance_32levelCode.GDenemyplaceholderObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.referance_32levelCode.GDtankObjects1);

gdjs.referance_32levelCode.condition0IsTrue_0.val = false;
{
gdjs.referance_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDenemyplaceholderObjects1Objects, gdjs.referance_32levelCode.mapOfGDgdjs_46referance_9532levelCode_46GDtankObjects1Objects, false, runtimeScene, false);
}if (gdjs.referance_32levelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.referance_32levelCode.GDtankObjects1 */
{for(var i = 0, len = gdjs.referance_32levelCode.GDtankObjects1.length ;i < len;++i) {
    gdjs.referance_32levelCode.GDtankObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


{


gdjs.referance_32levelCode.eventsList3(runtimeScene);
}


{


gdjs.referance_32levelCode.condition0IsTrue_0.val = false;
{
gdjs.referance_32levelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.referance_32levelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


};

gdjs.referance_32levelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.referance_32levelCode.GDNewObjectObjects1.length = 0;
gdjs.referance_32levelCode.GDNewObjectObjects2.length = 0;
gdjs.referance_32levelCode.GDtankObjects1.length = 0;
gdjs.referance_32levelCode.GDtankObjects2.length = 0;
gdjs.referance_32levelCode.GDenemyplaceholderObjects1.length = 0;
gdjs.referance_32levelCode.GDenemyplaceholderObjects2.length = 0;
gdjs.referance_32levelCode.GDendObjects1.length = 0;
gdjs.referance_32levelCode.GDendObjects2.length = 0;
gdjs.referance_32levelCode.GDbulletObjects1.length = 0;
gdjs.referance_32levelCode.GDbulletObjects2.length = 0;
gdjs.referance_32levelCode.GDNewObject2Objects1.length = 0;
gdjs.referance_32levelCode.GDNewObject2Objects2.length = 0;

gdjs.referance_32levelCode.eventsList4(runtimeScene);
return;

}

gdjs['referance_32levelCode'] = gdjs.referance_32levelCode;
