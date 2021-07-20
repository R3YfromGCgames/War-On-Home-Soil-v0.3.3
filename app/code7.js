gdjs.lvl_326Code = {};
gdjs.lvl_326Code.GDendObjects1= [];
gdjs.lvl_326Code.GDendObjects2= [];
gdjs.lvl_326Code.GDtankObjects1= [];
gdjs.lvl_326Code.GDtankObjects2= [];
gdjs.lvl_326Code.GDNewObjectObjects1= [];
gdjs.lvl_326Code.GDNewObjectObjects2= [];
gdjs.lvl_326Code.GDbulletObjects1= [];
gdjs.lvl_326Code.GDbulletObjects2= [];
gdjs.lvl_326Code.GDenemyplaceholderObjects1= [];
gdjs.lvl_326Code.GDenemyplaceholderObjects2= [];
gdjs.lvl_326Code.GDPixelSmokeObjects1= [];
gdjs.lvl_326Code.GDPixelSmokeObjects2= [];
gdjs.lvl_326Code.GDbarbedplaceholdrObjects1= [];
gdjs.lvl_326Code.GDbarbedplaceholdrObjects2= [];
gdjs.lvl_326Code.GDalien2Objects1= [];
gdjs.lvl_326Code.GDalien2Objects2= [];

gdjs.lvl_326Code.conditionTrue_0 = {val:false};
gdjs.lvl_326Code.condition0IsTrue_0 = {val:false};
gdjs.lvl_326Code.condition1IsTrue_0 = {val:false};
gdjs.lvl_326Code.condition2IsTrue_0 = {val:false};


gdjs.lvl_326Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_326Code.GDtankObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.lvl_326Code.GDtankObjects1.length !== 0 ? gdjs.lvl_326Code.GDtankObjects1[0] : null), true, "", 0);
}}

}


};gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDPixelSmokeObjects1Objects = Hashtable.newFrom({"PixelSmoke": gdjs.lvl_326Code.GDPixelSmokeObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_326Code.GDtankObjects1});gdjs.lvl_326Code.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("PixelSmoke"), gdjs.lvl_326Code.GDPixelSmokeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_326Code.GDtankObjects1);

gdjs.lvl_326Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDPixelSmokeObjects1Objects, gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects, 1000, false);
}if (gdjs.lvl_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_326Code.GDPixelSmokeObjects1 */
/* Reuse gdjs.lvl_326Code.GDtankObjects1 */
{for(var i = 0, len = gdjs.lvl_326Code.GDPixelSmokeObjects1.length ;i < len;++i) {
    gdjs.lvl_326Code.GDPixelSmokeObjects1[i].addForceTowardObject((gdjs.lvl_326Code.GDtankObjects1.length !== 0 ? gdjs.lvl_326Code.GDtankObjects1[0] : null), 1000, 1);
}
}}

}


};gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.lvl_326Code.GDbulletObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.lvl_326Code.GDbulletObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDenemyplaceholderObjects1Objects = Hashtable.newFrom({"enemyplaceholder": gdjs.lvl_326Code.GDenemyplaceholderObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_326Code.GDtankObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.lvl_326Code.GDendObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_326Code.GDtankObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDbarbedplaceholdrObjects1Objects = Hashtable.newFrom({"barbedplaceholdr": gdjs.lvl_326Code.GDbarbedplaceholdrObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.lvl_326Code.GDbulletObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDalien2Objects1Objects = Hashtable.newFrom({"alien2": gdjs.lvl_326Code.GDalien2Objects1});gdjs.lvl_326Code.eventsList2 = function(runtimeScene) {

};gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDenemyplaceholderObjects1Objects = Hashtable.newFrom({"enemyplaceholder": gdjs.lvl_326Code.GDenemyplaceholderObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_326Code.GDtankObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDenemyplaceholderObjects1Objects = Hashtable.newFrom({"enemyplaceholder": gdjs.lvl_326Code.GDenemyplaceholderObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_326Code.GDtankObjects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDalien2Objects1Objects = Hashtable.newFrom({"alien2": gdjs.lvl_326Code.GDalien2Objects1});gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_326Code.GDtankObjects1});gdjs.lvl_326Code.eventsList3 = function(runtimeScene) {

};gdjs.lvl_326Code.eventsList4 = function(runtimeScene) {

{


gdjs.lvl_326Code.eventsList0(runtimeScene);
}


{


gdjs.lvl_326Code.eventsList1(runtimeScene);
}


{



}


{


gdjs.lvl_326Code.condition0IsTrue_0.val = false;
gdjs.lvl_326Code.condition1IsTrue_0.val = false;
{
gdjs.lvl_326Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.lvl_326Code.condition0IsTrue_0.val ) {
{
gdjs.lvl_326Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "FireRate");
}}
if (gdjs.lvl_326Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_326Code.GDtankObjects1);
gdjs.lvl_326Code.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDbulletObjects1Objects, (( gdjs.lvl_326Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_326Code.GDtankObjects1[0].getPointX("Canon")), (( gdjs.lvl_326Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_326Code.GDtankObjects1[0].getPointY("Canon")), "");
}{for(var i = 0, len = gdjs.lvl_326Code.GDbulletObjects1.length ;i < len;++i) {
    gdjs.lvl_326Code.GDbulletObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 600, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.lvl_326Code.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemyplaceholder"), gdjs.lvl_326Code.GDenemyplaceholderObjects1);

gdjs.lvl_326Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDbulletObjects1Objects, gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDenemyplaceholderObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_326Code.GDenemyplaceholderObjects1 */
{for(var i = 0, len = gdjs.lvl_326Code.GDenemyplaceholderObjects1.length ;i < len;++i) {
    gdjs.lvl_326Code.GDenemyplaceholderObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.lvl_326Code.GDendObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_326Code.GDtankObjects1);

gdjs.lvl_326Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects, gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_326Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lvl 7", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("barbedplaceholdr"), gdjs.lvl_326Code.GDbarbedplaceholdrObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_326Code.GDtankObjects1);

gdjs.lvl_326Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects, gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDbarbedplaceholdrObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_326Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("alien2"), gdjs.lvl_326Code.GDalien2Objects1);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.lvl_326Code.GDbulletObjects1);

gdjs.lvl_326Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDbulletObjects1Objects, gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDalien2Objects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_326Code.GDalien2Objects1 */
{for(var i = 0, len = gdjs.lvl_326Code.GDalien2Objects1.length ;i < len;++i) {
    gdjs.lvl_326Code.GDalien2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


{


gdjs.lvl_326Code.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("enemyplaceholder"), gdjs.lvl_326Code.GDenemyplaceholderObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_326Code.GDtankObjects1);

gdjs.lvl_326Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDenemyplaceholderObjects1Objects, gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects, 1000, false);
}if (gdjs.lvl_326Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("alien2"), gdjs.lvl_326Code.GDalien2Objects1);
/* Reuse gdjs.lvl_326Code.GDenemyplaceholderObjects1 */
/* Reuse gdjs.lvl_326Code.GDtankObjects1 */
{for(var i = 0, len = gdjs.lvl_326Code.GDenemyplaceholderObjects1.length ;i < len;++i) {
    gdjs.lvl_326Code.GDenemyplaceholderObjects1[i].addForceTowardObject((gdjs.lvl_326Code.GDtankObjects1.length !== 0 ? gdjs.lvl_326Code.GDtankObjects1[0] : null), 3, 1);
}
}{for(var i = 0, len = gdjs.lvl_326Code.GDalien2Objects1.length ;i < len;++i) {
    gdjs.lvl_326Code.GDalien2Objects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.lvl_326Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_326Code.GDtankObjects1[0].getPointX("")), (( gdjs.lvl_326Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_326Code.GDtankObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemyplaceholder"), gdjs.lvl_326Code.GDenemyplaceholderObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_326Code.GDtankObjects1);

gdjs.lvl_326Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDenemyplaceholderObjects1Objects, gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_326Code.GDtankObjects1 */
{for(var i = 0, len = gdjs.lvl_326Code.GDtankObjects1.length ;i < len;++i) {
    gdjs.lvl_326Code.GDtankObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("alien2"), gdjs.lvl_326Code.GDalien2Objects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_326Code.GDtankObjects1);
{for(var i = 0, len = gdjs.lvl_326Code.GDalien2Objects1.length ;i < len;++i) {
    gdjs.lvl_326Code.GDalien2Objects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.lvl_326Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_326Code.GDtankObjects1[0].getPointX("")), (( gdjs.lvl_326Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_326Code.GDtankObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("alien2"), gdjs.lvl_326Code.GDalien2Objects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_326Code.GDtankObjects1);

gdjs.lvl_326Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDalien2Objects1Objects, gdjs.lvl_326Code.mapOfGDgdjs_46lvl_95326Code_46GDtankObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_326Code.GDtankObjects1 */
{for(var i = 0, len = gdjs.lvl_326Code.GDtankObjects1.length ;i < len;++i) {
    gdjs.lvl_326Code.GDtankObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{


{
}

}


{


gdjs.lvl_326Code.eventsList3(runtimeScene);
}


{


gdjs.lvl_326Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_326Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.lvl_326Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


};

gdjs.lvl_326Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl_326Code.GDendObjects1.length = 0;
gdjs.lvl_326Code.GDendObjects2.length = 0;
gdjs.lvl_326Code.GDtankObjects1.length = 0;
gdjs.lvl_326Code.GDtankObjects2.length = 0;
gdjs.lvl_326Code.GDNewObjectObjects1.length = 0;
gdjs.lvl_326Code.GDNewObjectObjects2.length = 0;
gdjs.lvl_326Code.GDbulletObjects1.length = 0;
gdjs.lvl_326Code.GDbulletObjects2.length = 0;
gdjs.lvl_326Code.GDenemyplaceholderObjects1.length = 0;
gdjs.lvl_326Code.GDenemyplaceholderObjects2.length = 0;
gdjs.lvl_326Code.GDPixelSmokeObjects1.length = 0;
gdjs.lvl_326Code.GDPixelSmokeObjects2.length = 0;
gdjs.lvl_326Code.GDbarbedplaceholdrObjects1.length = 0;
gdjs.lvl_326Code.GDbarbedplaceholdrObjects2.length = 0;
gdjs.lvl_326Code.GDalien2Objects1.length = 0;
gdjs.lvl_326Code.GDalien2Objects2.length = 0;

gdjs.lvl_326Code.eventsList4(runtimeScene);
return;

}

gdjs['lvl_326Code'] = gdjs.lvl_326Code;
