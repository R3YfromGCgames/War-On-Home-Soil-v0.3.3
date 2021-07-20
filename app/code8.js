gdjs.lvl_321Code = {};
gdjs.lvl_321Code.GDendObjects1= [];
gdjs.lvl_321Code.GDendObjects2= [];
gdjs.lvl_321Code.GDtankObjects1= [];
gdjs.lvl_321Code.GDtankObjects2= [];
gdjs.lvl_321Code.GDNewObjectObjects1= [];
gdjs.lvl_321Code.GDNewObjectObjects2= [];
gdjs.lvl_321Code.GDbulletObjects1= [];
gdjs.lvl_321Code.GDbulletObjects2= [];
gdjs.lvl_321Code.GDenemyplaceholderObjects1= [];
gdjs.lvl_321Code.GDenemyplaceholderObjects2= [];
gdjs.lvl_321Code.GDPixelSmokeObjects1= [];
gdjs.lvl_321Code.GDPixelSmokeObjects2= [];
gdjs.lvl_321Code.GDbarbedplaceholdrObjects1= [];
gdjs.lvl_321Code.GDbarbedplaceholdrObjects2= [];
gdjs.lvl_321Code.GDalien2Objects1= [];
gdjs.lvl_321Code.GDalien2Objects2= [];

gdjs.lvl_321Code.conditionTrue_0 = {val:false};
gdjs.lvl_321Code.condition0IsTrue_0 = {val:false};
gdjs.lvl_321Code.condition1IsTrue_0 = {val:false};
gdjs.lvl_321Code.condition2IsTrue_0 = {val:false};


gdjs.lvl_321Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_321Code.GDtankObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.lvl_321Code.GDtankObjects1.length !== 0 ? gdjs.lvl_321Code.GDtankObjects1[0] : null), true, "", 0);
}}

}


};gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDPixelSmokeObjects1Objects = Hashtable.newFrom({"PixelSmoke": gdjs.lvl_321Code.GDPixelSmokeObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_321Code.GDtankObjects1});gdjs.lvl_321Code.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("PixelSmoke"), gdjs.lvl_321Code.GDPixelSmokeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_321Code.GDtankObjects1);

gdjs.lvl_321Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDPixelSmokeObjects1Objects, gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects, 1000, false);
}if (gdjs.lvl_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_321Code.GDPixelSmokeObjects1 */
/* Reuse gdjs.lvl_321Code.GDtankObjects1 */
{for(var i = 0, len = gdjs.lvl_321Code.GDPixelSmokeObjects1.length ;i < len;++i) {
    gdjs.lvl_321Code.GDPixelSmokeObjects1[i].addForceTowardObject((gdjs.lvl_321Code.GDtankObjects1.length !== 0 ? gdjs.lvl_321Code.GDtankObjects1[0] : null), 1000, 1);
}
}}

}


};gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.lvl_321Code.GDbulletObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.lvl_321Code.GDbulletObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDenemyplaceholderObjects1Objects = Hashtable.newFrom({"enemyplaceholder": gdjs.lvl_321Code.GDenemyplaceholderObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_321Code.GDtankObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.lvl_321Code.GDendObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_321Code.GDtankObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDbarbedplaceholdrObjects1Objects = Hashtable.newFrom({"barbedplaceholdr": gdjs.lvl_321Code.GDbarbedplaceholdrObjects1});gdjs.lvl_321Code.eventsList2 = function(runtimeScene) {

};gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDenemyplaceholderObjects1Objects = Hashtable.newFrom({"enemyplaceholder": gdjs.lvl_321Code.GDenemyplaceholderObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_321Code.GDtankObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDenemyplaceholderObjects1Objects = Hashtable.newFrom({"enemyplaceholder": gdjs.lvl_321Code.GDenemyplaceholderObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_321Code.GDtankObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDalien2Objects1Objects = Hashtable.newFrom({"alien2": gdjs.lvl_321Code.GDalien2Objects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_321Code.GDtankObjects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDalien2Objects1Objects = Hashtable.newFrom({"alien2": gdjs.lvl_321Code.GDalien2Objects1});gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.lvl_321Code.GDbulletObjects1});gdjs.lvl_321Code.eventsList3 = function(runtimeScene) {

};gdjs.lvl_321Code.eventsList4 = function(runtimeScene) {

{


gdjs.lvl_321Code.eventsList0(runtimeScene);
}


{


gdjs.lvl_321Code.eventsList1(runtimeScene);
}


{



}


{


gdjs.lvl_321Code.condition0IsTrue_0.val = false;
gdjs.lvl_321Code.condition1IsTrue_0.val = false;
{
gdjs.lvl_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.lvl_321Code.condition0IsTrue_0.val ) {
{
gdjs.lvl_321Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "FireRate");
}}
if (gdjs.lvl_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_321Code.GDtankObjects1);
gdjs.lvl_321Code.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDbulletObjects1Objects, (( gdjs.lvl_321Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_321Code.GDtankObjects1[0].getPointX("Canon")), (( gdjs.lvl_321Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_321Code.GDtankObjects1[0].getPointY("Canon")), "");
}{for(var i = 0, len = gdjs.lvl_321Code.GDbulletObjects1.length ;i < len;++i) {
    gdjs.lvl_321Code.GDbulletObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 600, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.lvl_321Code.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemyplaceholder"), gdjs.lvl_321Code.GDenemyplaceholderObjects1);

gdjs.lvl_321Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDbulletObjects1Objects, gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDenemyplaceholderObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_321Code.GDenemyplaceholderObjects1 */
{for(var i = 0, len = gdjs.lvl_321Code.GDenemyplaceholderObjects1.length ;i < len;++i) {
    gdjs.lvl_321Code.GDenemyplaceholderObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.lvl_321Code.GDendObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_321Code.GDtankObjects1);

gdjs.lvl_321Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects, gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lvl 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("barbedplaceholdr"), gdjs.lvl_321Code.GDbarbedplaceholdrObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_321Code.GDtankObjects1);

gdjs.lvl_321Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects, gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDbarbedplaceholdrObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{


{
}

}


{


{
}

}


{


gdjs.lvl_321Code.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("enemyplaceholder"), gdjs.lvl_321Code.GDenemyplaceholderObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_321Code.GDtankObjects1);

gdjs.lvl_321Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDenemyplaceholderObjects1Objects, gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects, 1000, false);
}if (gdjs.lvl_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_321Code.GDenemyplaceholderObjects1 */
/* Reuse gdjs.lvl_321Code.GDtankObjects1 */
{for(var i = 0, len = gdjs.lvl_321Code.GDenemyplaceholderObjects1.length ;i < len;++i) {
    gdjs.lvl_321Code.GDenemyplaceholderObjects1[i].addForceTowardObject((gdjs.lvl_321Code.GDtankObjects1.length !== 0 ? gdjs.lvl_321Code.GDtankObjects1[0] : null), 3, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemyplaceholder"), gdjs.lvl_321Code.GDenemyplaceholderObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_321Code.GDtankObjects1);

gdjs.lvl_321Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDenemyplaceholderObjects1Objects, gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_321Code.GDtankObjects1 */
{for(var i = 0, len = gdjs.lvl_321Code.GDtankObjects1.length ;i < len;++i) {
    gdjs.lvl_321Code.GDtankObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("alien2"), gdjs.lvl_321Code.GDalien2Objects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_321Code.GDtankObjects1);
{for(var i = 0, len = gdjs.lvl_321Code.GDalien2Objects1.length ;i < len;++i) {
    gdjs.lvl_321Code.GDalien2Objects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.lvl_321Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_321Code.GDtankObjects1[0].getPointX("")), (( gdjs.lvl_321Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_321Code.GDtankObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("alien2"), gdjs.lvl_321Code.GDalien2Objects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_321Code.GDtankObjects1);

gdjs.lvl_321Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDalien2Objects1Objects, gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDtankObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_321Code.GDtankObjects1 */
{for(var i = 0, len = gdjs.lvl_321Code.GDtankObjects1.length ;i < len;++i) {
    gdjs.lvl_321Code.GDtankObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("alien2"), gdjs.lvl_321Code.GDalien2Objects1);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.lvl_321Code.GDbulletObjects1);

gdjs.lvl_321Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDalien2Objects1Objects, gdjs.lvl_321Code.mapOfGDgdjs_46lvl_95321Code_46GDbulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_321Code.GDalien2Objects1 */
/* Reuse gdjs.lvl_321Code.GDbulletObjects1 */
{for(var i = 0, len = gdjs.lvl_321Code.GDalien2Objects1.length ;i < len;++i) {
    gdjs.lvl_321Code.GDalien2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.lvl_321Code.GDbulletObjects1.length ;i < len;++i) {
    gdjs.lvl_321Code.GDbulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.lvl_321Code.eventsList3(runtimeScene);
}


{


gdjs.lvl_321Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.lvl_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


};

gdjs.lvl_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl_321Code.GDendObjects1.length = 0;
gdjs.lvl_321Code.GDendObjects2.length = 0;
gdjs.lvl_321Code.GDtankObjects1.length = 0;
gdjs.lvl_321Code.GDtankObjects2.length = 0;
gdjs.lvl_321Code.GDNewObjectObjects1.length = 0;
gdjs.lvl_321Code.GDNewObjectObjects2.length = 0;
gdjs.lvl_321Code.GDbulletObjects1.length = 0;
gdjs.lvl_321Code.GDbulletObjects2.length = 0;
gdjs.lvl_321Code.GDenemyplaceholderObjects1.length = 0;
gdjs.lvl_321Code.GDenemyplaceholderObjects2.length = 0;
gdjs.lvl_321Code.GDPixelSmokeObjects1.length = 0;
gdjs.lvl_321Code.GDPixelSmokeObjects2.length = 0;
gdjs.lvl_321Code.GDbarbedplaceholdrObjects1.length = 0;
gdjs.lvl_321Code.GDbarbedplaceholdrObjects2.length = 0;
gdjs.lvl_321Code.GDalien2Objects1.length = 0;
gdjs.lvl_321Code.GDalien2Objects2.length = 0;

gdjs.lvl_321Code.eventsList4(runtimeScene);
return;

}

gdjs['lvl_321Code'] = gdjs.lvl_321Code;
